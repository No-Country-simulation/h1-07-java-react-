package io.justina.justinaio.services;

import io.justina.justinaio.dto.AdherenciaRequest;
import io.justina.justinaio.model.AdherenciaTratamiento;
import io.justina.justinaio.model.HorarioToma;
import io.justina.justinaio.model.Paciente;
import io.justina.justinaio.model.Tratamiento;
import io.justina.justinaio.model.enums.EstadoAdherencia;
import io.justina.justinaio.model.enums.EstadoHorario;
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

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AdherenciaService {
    private final HorarioTomaRepository horarioTomaRepository;

    @Transactional
    public void confirmarAdherencia(Integer idHorario) {
        HorarioToma horarioToma = horarioTomaRepository.findById(idHorario)
                .orElseThrow(() -> new IllegalArgumentException("Horario no encontrado"));
        horarioToma.setEstadoHorario(EstadoHorario.TERMINADO);
        horarioTomaRepository.save(horarioToma);
    }

    @Transactional
    public void noTomarMedicamento(Integer idHorario) {
        HorarioToma horarioToma = horarioTomaRepository.findById(idHorario)
                .orElseThrow(() -> new IllegalArgumentException("Horario no encontrado"));
        horarioToma.setEstadoHorario(EstadoHorario.NO_TOMADO);
        horarioTomaRepository.save(horarioToma);
    }
}

