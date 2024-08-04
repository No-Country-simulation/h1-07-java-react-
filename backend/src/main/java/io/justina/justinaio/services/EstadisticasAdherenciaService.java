package io.justina.justinaio.services;

import io.justina.justinaio.dto.AdherenciaResponse;
import io.justina.justinaio.dto.AdherenciaTotalResponse;
import io.justina.justinaio.model.*;
import io.justina.justinaio.model.enums.EstadoHorario;
import io.justina.justinaio.repositories.MedicoRepository;
import io.justina.justinaio.repositories.PacienteRepository;
import io.justina.justinaio.repositories.TratamientoRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EstadisticasAdherenciaService {

    private final TratamientoRepository tratamientoRepository;
    private final PacienteRepository pacienteRepository;
    private final MedicoRepository medicoRepository;

    public AdherenciaResponse obtenerEstadisticasPorTratamiento(Integer idTratamiento, EstadoHorario estadoHorario) {
        Tratamiento tratamiento = tratamientoRepository.findById(idTratamiento).orElseThrow();
        return calcularAdherencia(tratamiento, estadoHorario);
    }

    public List<AdherenciaResponse> obtenerEstadisticasPorPacienteYMedico(Integer idPaciente, Authentication token, EstadoHorario estadoHorario) {
        Paciente paciente = pacienteRepository.findById(idPaciente).orElseThrow(
                () -> new NullPointerException("Paciente no encontrado con ese ID")
        );
        Usuario usuarioMedico = (Usuario) token.getPrincipal();
        Medico medico = medicoRepository.findById(usuarioMedico.getId()).orElseThrow(
                () -> new NullPointerException("Medico no encontrado con ese ID")
        );
        Integer idMedico = medico.getIdMedico();
        List<Tratamiento> tratamientos = tratamientoRepository.findByPaciente_IdPacienteAndMedico_IdMedico(idPaciente, idMedico);
        return tratamientos.stream()
                .map(tratamiento -> calcularAdherencia(tratamiento, estadoHorario))
                .collect(Collectors.toList());
    }

    public AdherenciaTotalResponse obtenerEstadisticasTotalesPorTratamiento(Integer idTratamiento) {
        Tratamiento tratamiento = tratamientoRepository.findById(idTratamiento).orElseThrow();
        return calcularAdherenciaTotal(tratamiento);
    }

    public List<AdherenciaTotalResponse> obtenerEstadisticasTotalesPorPacienteYMedico(Integer idPaciente, Authentication token) {
        Paciente paciente = pacienteRepository.findById(idPaciente).orElseThrow(
                () -> new NullPointerException("Paciente no encontrado con ese ID")
        );
        Usuario usuarioMedico = (Usuario) token.getPrincipal();
        Medico medico = medicoRepository.findById(usuarioMedico.getId()).orElseThrow(
                () -> new NullPointerException("Medico no encontrado con ese ID")
        );
        Integer idMedico = medico.getIdMedico();
        List<Tratamiento> tratamientos = tratamientoRepository.findByPaciente_IdPacienteAndMedico_IdMedico(idPaciente, idMedico);
        return tratamientos.stream()
                .map(this::calcularAdherenciaTotal)
                .collect(Collectors.toList());
    }

    private AdherenciaResponse calcularAdherencia(Tratamiento tratamiento, EstadoHorario estadoHorario) {
        LocalDateTime ahora = LocalDateTime.now();

        List<HorarioToma> horarios = tratamiento.getHorarios().stream()
                .filter(HorarioToma::getEsActivo)
                .filter(horario -> horario.getEstadoHorario() != EstadoHorario.BORRADO)
                .filter(horario -> LocalDateTime.of(horario.getFecha(), horario.getHora()).isBefore(ahora)) // Filtrar por fecha y hora actuales
                .toList();

        List<HorarioToma> horariosFiltrados = horarios.stream()
                .filter(horario -> horario.getEstadoHorario() == estadoHorario)
                .toList();

        int cuentaElementoPrincipal = horariosFiltrados.size();
        int totalTomas = horarios.size();
        double porcentaje = totalTomas == 0 ? 0 : (double) cuentaElementoPrincipal / totalTomas;
        List<String> comentarios = horariosFiltrados.stream()
                .map(HorarioToma::getCometario)
                .collect(Collectors.toList());

        return AdherenciaResponse.builder()
                .cuentaElementoPrincipal(cuentaElementoPrincipal)
                .totalTomas(totalTomas)
                .porcentaje(porcentaje)
                .comentarios(comentarios)
                .build();
    }

    private AdherenciaTotalResponse calcularAdherenciaTotal(Tratamiento tratamiento) {
        LocalDateTime ahora = LocalDateTime.now();

        List<HorarioToma> horarios = tratamiento.getHorarios().stream()
                .filter(HorarioToma::getEsActivo)// Filtrar por fecha y hora actuales
                .toList();

        int totalCompletado = (int) horarios.stream().filter(horario -> horario.getEstadoHorario() == EstadoHorario.COMPLETADO).count();
        int totalNoCompletado = (int) horarios.stream().filter(horario -> horario.getEstadoHorario() == EstadoHorario.NO_COMPLETADO).count();
        int totalRetrasados = (int) horarios.stream().filter(horario -> horario.getEstadoHorario() == EstadoHorario.ATRASADO).count();
        int totalHorarios = totalCompletado + totalNoCompletado + totalRetrasados;

        return AdherenciaTotalResponse.builder()
                .totalCompletado(totalCompletado)
                .totalNoCompletado(totalNoCompletado)
                .totalRetrasados(totalRetrasados)
                .totalHorarios(totalHorarios)
                .build();
    }
}
