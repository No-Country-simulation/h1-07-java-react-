package io.justina.justinaio.services;

import io.justina.justinaio.dto.NuevoTratamientoRequest;
import io.justina.justinaio.model.*;
import io.justina.justinaio.model.enums.EstadoHorario;
import io.justina.justinaio.model.enums.EstadoTratamiento;
import io.justina.justinaio.model.enums.TipoTratamiento;
import io.justina.justinaio.repositories.*;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TratamientoService {

    private final TratamientoRepository tratamientoRepository;
    private final MedicoRepository medicoRepository;
    private final PacienteRepository pacienteRepository;
    private final PatologiaRepository patologiaRepository;
    private final MedicamentoRepository medicamentoRepository;
    private final HorarioTomaRepository horarioTomaRepository;


    public void crearTratamiento(NuevoTratamientoRequest request, Authentication token) {
        Usuario userMedico = (Usuario) token.getPrincipal();

        Patologia patologia = null;
        Medicamento medicamento = null;
        TipoTratamiento tipoTratamiento = TipoTratamiento.values()[request.getTipoTratamiento()];
        if (tipoTratamiento == TipoTratamiento.MEDICAMENTO) {
            patologia = obtenerPatologiaPorId(request.getPatologiaId());
            medicamento = obtenerMedicamentoPorId(request.getMedicamentoId());
        }

        Date fechaInicio = request.getFechaInicio() != null ? request.getFechaInicio()
                : Date.from(LocalDate.now().atStartOfDay(ZoneId.systemDefault()).toInstant());
        Date fechaFin = Date.from(fechaInicio.toInstant().plusSeconds(
                request.getDiasTotales() * 24L * 60 * 60));

        Tratamiento tratamiento = Tratamiento.builder()
                .medico(obtenerMedicoPorId(userMedico.getId()))
                .paciente(obtenerPacientePorId(request.getPacienteId()))
                .patologia(patologia)
                .medicamento(medicamento)
                .tipoTratamiento(tipoTratamiento)
                .descripcion(request.getDescripcion())
                .dosisDiaria(request.getDosisDiaria())
                .fechaInicio(fechaInicio)
                .fechaFin(fechaFin)
                .estado(EstadoTratamiento.EN_CURSO)
                .esActivo(true)
                .build();

        tratamientoRepository.save(tratamiento);

        List<HorarioToma> horarios = crearHorariosToma(tratamiento, request.getHoraInicio(), request.getDosisDiaria(), request.getDiasTotales());
        tratamiento.setHorarios(horarios);
        horarioTomaRepository.saveAll(horarios);

        // Finalmente, guardamos el tratamiento nuevamente para asegurar que los horarios estén asociados
        //tratamientoRepository.save(tratamiento);
    }

    private List<HorarioToma> crearHorariosToma(Tratamiento tratamiento, LocalTime horaInicio, Integer dosisDiaria, Integer diasTotales) {
        List<HorarioToma> horarios = new ArrayList<>();
        long intervaloHoras = 24 / dosisDiaria;

        for (int dia = 0; dia < diasTotales; dia++) {
            for (int dosis = 0; dosis < dosisDiaria; dosis++) {
                LocalTime horaToma = horaInicio.plusHours(intervaloHoras * dosis);
                HorarioToma horarioToma = HorarioToma.builder()
                        .tratamiento(tratamiento)
                        .hora(horaToma)
                        .estadoHorario(EstadoHorario.ACTIVO)
                        .build();
                horarios.add(horarioToma);
            }
            horaInicio = horaInicio.plusHours(24); // Incrementa un día
        }
        return horarios;
    }

    private Medico obtenerMedicoPorId(Integer id) {
        return medicoRepository.findById(id)
                .orElseThrow(() -> new NullPointerException("No se encuentra logueado el médico"));
    }

    private Paciente obtenerPacientePorId(Integer id) {
        return pacienteRepository.findById(id)
                .orElseThrow(() -> new NullPointerException("No se encuentra el paciente en la DB con ese ID"));
    }

    private Patologia obtenerPatologiaPorId(Integer id) {
        return patologiaRepository.findById(id)
                .orElseThrow(() -> new NullPointerException("No se encuentra la patologia en la DB con ese ID"));
    }

    private Medicamento obtenerMedicamentoPorId(Integer id) {
        return medicamentoRepository.findById(id)
                .orElseThrow(() -> new NullPointerException("No se encuentra el medicamento en la DB con ese ID"));
    }
}

