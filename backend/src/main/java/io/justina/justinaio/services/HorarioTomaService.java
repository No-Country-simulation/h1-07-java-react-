package io.justina.justinaio.services;

import io.justina.justinaio.dto.HorarioTomaRequest;
import io.justina.justinaio.model.HorarioToma;
import io.justina.justinaio.model.Paciente;
import io.justina.justinaio.model.Usuario;
import io.justina.justinaio.model.enums.EstadoHorario;
import io.justina.justinaio.repositories.HorarioTomaRepository;
import io.justina.justinaio.repositories.PacienteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class HorarioTomaService {
    private final HorarioTomaRepository horarioTomaRepository;
    private final PacienteRepository pacienteRepository;

    public void marcarAdherenciaHoraToma(HorarioTomaRequest horarioTomaRequest, Authentication token) {
        Usuario usuarioPaciente = ((Usuario) token.getPrincipal());
        if(usuarioPaciente == null){
            throw new NullPointerException("Usuario no encontrado");
        }
        Paciente paciente = pacienteRepository.findById(usuarioPaciente.getId()).orElseThrow(
                () -> new NullPointerException("Paciente no encontrado con ese ID")
        );
        HorarioToma horarioToma = horarioTomaRepository.findById(horarioTomaRequest.getHorarioId()).orElseThrow(
                () -> new NullPointerException("Horario no encontrado con ese ID")
        );
        horarioToma.setEstadoHorario(EstadoHorario.values()[horarioTomaRequest.getEstado()]);
        horarioToma.setCometario(horarioToma.getCometario());
        horarioTomaRepository.save(horarioToma);
    }
}
