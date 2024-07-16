package io.justina.justinaio.services;

import io.justina.justinaio.dto.AdherenciaRequest;
import io.justina.justinaio.model.AdherenciaTratamiento;
import io.justina.justinaio.model.HorarioToma;
import io.justina.justinaio.model.Paciente;
import io.justina.justinaio.model.Tratamiento;
import io.justina.justinaio.model.enums.EstadoAdherencia;
import io.justina.justinaio.repositories.AdherenciaTratamientoRepository;
import io.justina.justinaio.repositories.HorarioTomaRepository;
import io.justina.justinaio.repositories.PacienteRepository;
import io.justina.justinaio.repositories.TratamientoRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneId;
import java.util.Date;

@Service
@RequiredArgsConstructor
public class  AdherenciaService {

    private final AdherenciaTratamientoRepository adherenciaTratamientoRepository;
    private final TratamientoRepository tratamientoRepository;
    private final HorarioTomaRepository horarioTomaRepository;
    private final PacienteRepository pacienteRepository;

    public void registrarAdherencia(AdherenciaRequest request) {
        Tratamiento tratamiento = tratamientoRepository.findById(request.getTratamientoId())
                .orElseThrow(() -> new EntityNotFoundException("Tratamiento no encontrado"));

        HorarioToma horarioToma = horarioTomaRepository.findById(request.getHorarioId())
                .orElseThrow(() -> new EntityNotFoundException("Horario de toma no encontrado"));

        Paciente paciente = pacienteRepository.findById(request.getPacienteId())
                .orElseThrow(() -> new EntityNotFoundException("Paciente no encontrado"));

        EstadoAdherencia estado = determinarEstadoAdherencia(horarioToma, request.getFechaHora());

        AdherenciaTratamiento adherencia = AdherenciaTratamiento.builder()
                .paciente(paciente)
                .tratamiento(tratamiento)
                .horarioToma(horarioToma)
                .comentarios(request.getComentarios())
                .estadoAdherencia(estado)
                .fechaHora(request.getFechaHora())
                .build();
        adherenciaTratamientoRepository.save(adherencia);
    }

    private EstadoAdherencia determinarEstadoAdherencia(HorarioToma horarioToma, Date fechaHora) {
        LocalTime horaProgramada = horarioToma.getHora();
        LocalTime horaReal = LocalDateTime.ofInstant(fechaHora.toInstant(), ZoneId.systemDefault()).toLocalTime();

        LocalTime margenInicio = horaProgramada.minusMinutes(30);
        LocalTime margenFin = horaProgramada.plusMinutes(30);

        if (horaReal.isAfter(margenInicio) && horaReal.isBefore(margenFin)) {
            return EstadoAdherencia.A_TIEMPO;
        } else if (horaReal.isAfter(margenFin)) {
            return EstadoAdherencia.RETRASO;
        }
        return EstadoAdherencia.SUSPENDIDO;
    }
}

