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

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
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

        // Calcula la fecha de inicio y finalización del tratamiento
        LocalDate fechaInicio = calcularFechaInicio(request.getFechaInicio(), request.getHoraInicio());
        LocalDate fechaFin = fechaInicio.plusDays(request.getDiasTotales());

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
    }

    public void modificarTratamiento(Integer tratamientoId, NuevoTratamientoRequest request, Authentication token) {
        Usuario userMedico = (Usuario) token.getPrincipal();

        // Obtiene el tratamiento existente por ID
        Tratamiento tratamiento = tratamientoRepository.findById(tratamientoId)
                .orElseThrow(() -> new NullPointerException("No se encuentra el tratamiento en la DB con ese ID"));

        // Verifica que el médico que hace la modificación es el mismo que creó el tratamiento
        if (!tratamiento.getMedico().getIdMedico().equals(userMedico.getId())) {
            throw new SecurityException("No tienes permiso para modificar este tratamiento");
        }

        // Actualiza los campos del tratamiento con la nueva información del request
        TipoTratamiento tipoTratamiento = TipoTratamiento.values()[request.getTipoTratamiento()];
        if (tipoTratamiento == TipoTratamiento.MEDICAMENTO) {
            Patologia patologia = obtenerPatologiaPorId(request.getPatologiaId());
            Medicamento medicamento = obtenerMedicamentoPorId(request.getMedicamentoId());
            tratamiento.setPatologia(patologia);
            tratamiento.setMedicamento(medicamento);
        } else {
            tratamiento.setPatologia(null);
            tratamiento.setMedicamento(null);
        }

        tratamiento.setTipoTratamiento(tipoTratamiento);
        tratamiento.setDescripcion(request.getDescripcion());
        tratamiento.setDosisDiaria(request.getDosisDiaria());

        // Actualiza la fecha de inicio y recalcula la fecha de fin
        LocalDate fechaInicio = calcularFechaInicio(request.getFechaInicio(), request.getHoraInicio());
        tratamiento.setFechaInicio(fechaInicio);
        tratamiento.setFechaFin(fechaInicio.plusDays(request.getDiasTotales()));

        tratamiento.setEstado(EstadoTratamiento.EN_CURSO);

        // Actualiza el tratamiento
        tratamientoRepository.save(tratamiento);

        // Primero elimina los horarios de toma antiguos (esto debería ser redundante, pero es una medida de precaución)
        List<HorarioToma> horariosExistentes = horarioTomaRepository.findByTratamiento(tratamiento);
        horarioTomaRepository.deleteAll(horariosExistentes);

        // Crea y asigna nuevos horarios de toma
        List<HorarioToma> nuevosHorarios = crearHorariosToma(tratamiento, request.getHoraInicio(), request.getDosisDiaria(), request.getDiasTotales());
        tratamiento.setHorarios(nuevosHorarios);  // Aquí se actualizan los horarios de toma del tratamiento

        // Guarda los nuevos horarios
        horarioTomaRepository.saveAll(nuevosHorarios);
    }

    private LocalDate calcularFechaInicio(LocalDate fechaInicioRequest, LocalTime horaInicioRequest) {
        LocalDate fechaInicio;

        if(fechaInicioRequest.isBefore(LocalDate.now())) {
            throw new IllegalArgumentException("La fecha de inicio no puede ser anterior a la fecha actual");
        }

        if (fechaInicioRequest == null) {
            fechaInicio = LocalDate.now();
        } else {
            fechaInicio = fechaInicioRequest;
        }


        // Ajusta la fecha de inicio si la hora es menor a la hora actual y es el mismo día
        LocalTime currentTime = LocalTime.now();
        if (fechaInicio.isEqual(LocalDate.now()) && horaInicioRequest != null && horaInicioRequest.isBefore(currentTime)) {
            fechaInicio = fechaInicio.plusDays(1);
        }

        return fechaInicio;
    }

    private List<HorarioToma> crearHorariosToma(Tratamiento tratamiento, LocalTime horaInicio, Integer dosisDiaria, Integer diasTotales) {
        List<HorarioToma> horarios = new ArrayList<>();
        long totalDosis = dosisDiaria * diasTotales;
        long intervaloHoras = 24 / dosisDiaria;

        LocalDate fechaActual = tratamiento.getFechaInicio();
        LocalTime horaActual = horaInicio;

        while (totalDosis > 0) {
            HorarioToma horarioToma = HorarioToma.builder()
                    .tratamiento(tratamiento)
                    .hora(horaActual)
                    .estadoHorario(EstadoHorario.ACTIVO)
                    .fecha(fechaActual)
                    .build();
            horarios.add(horarioToma);

            horaActual = horaActual.plusHours(intervaloHoras);
            totalDosis--;

            // Incrementa la fecha cada vez que se supera 23:59
            if (horaActual.isAfter(LocalTime.of(23, 59)) || horaActual.equals(LocalTime.of(0, 0))) {
                fechaActual = fechaActual.plusDays(1);
                horaActual = horaActual.minusHours(24); // Ajusta la hora al siguiente ciclo del día
            }
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
