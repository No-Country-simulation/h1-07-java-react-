package io.justina.justinaio.services;

import io.justina.justinaio.dto.NotificacionResponse;
import io.justina.justinaio.model.HorarioToma;
import io.justina.justinaio.model.Notificacion;
import io.justina.justinaio.model.Paciente;
import io.justina.justinaio.model.Usuario;
import io.justina.justinaio.repositories.HorarioTomaRepository;
import io.justina.justinaio.repositories.NotificacionRepository;
import io.justina.justinaio.repositories.PacienteRepository;
import io.justina.justinaio.util.Mapper;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Service
@RequiredArgsConstructor
public class NotificacionService {

    private final NotificacionRepository notificacionRepository;
    private final HorarioTomaRepository horarioTomaRepository;
    private final PacienteRepository pacienteRepository;

    @Transactional
    @Scheduled(fixedRate = 840000) // Ejecución cada 14 minutos
    public void crearNotificaciones() {
        // Obtener todas las HorarioToma de los próximos 20 minutos y crear notificaciones
        List<HorarioToma> proximosHorarios = obtenerProximosHorarios();

        for (HorarioToma horario : proximosHorarios) {
            boolean existeNotificacion = notificacionRepository.existsByHorarioToma(horario);
            if (!existeNotificacion) {
                Notificacion notificacion = Notificacion.builder()
                        .horarioToma(horario)
                        .paciente(horario.getTratamiento().getPaciente())
                        .fecha(horario.getFecha())
                        .hora(horario.getHora())
                        .leido(false)
                        .mensaje(horario.getTratamiento().getDescripcion())
                        .build();

                notificacionRepository.save(notificacion);
            }
        }
    }

    private List<HorarioToma> obtenerProximosHorarios() {
        // Lógica para obtener los horarios de toma de los próximos 20 minutos
        LocalDateTime ahora = LocalDateTime.now();
        LocalDateTime veinteMinutosDespues = ahora.plus(20, ChronoUnit.MINUTES);

        return horarioTomaRepository.findByHoraBetween(ahora.toLocalTime(), veinteMinutosDespues.toLocalTime());
    }

    public List<NotificacionResponse> obtenerTodasNotificacionesPaciente(Paciente paciente) {
        LocalDate ahora = LocalDate.now();
        LocalDate tresDiasAtras = ahora.minusDays(3);

        // Obtén todas las notificaciones (leídas y no leídas) en el rango de fechas
        List<Notificacion> notificaciones = notificacionRepository.findByPacienteAndFechaBetween(paciente, tresDiasAtras, ahora);

        // Mapea las notificaciones a NotificacionResponse
        return notificaciones.stream()
                .map(Mapper::toNotificacionResponse)
                .toList();
    }


    public List<NotificacionResponse> obtenerNotificacionesNoLeidasPaciente(Paciente paciente) {
        LocalDate ahora = LocalDate.now();
        LocalDate tresDiasAtras = ahora.minusDays(3);

        List<Notificacion> notificaciones = notificacionRepository.findByPacienteAndFechaBetweenAndLeidoFalse(paciente, tresDiasAtras, ahora);

        return notificaciones.stream().map(Mapper::toNotificacionResponse).toList();
    }

    public void marcarNotificacionesLeidas(Authentication token) {
        Usuario usuarioPaciente = ((Usuario) token.getPrincipal());
        Paciente paciente = pacienteRepository.findById(usuarioPaciente.getId()).orElseThrow(
                () -> new NullPointerException("Paciente no encontrado con ese ID"));
        // Recupera las notificaciones no leídas para el paciente
        List<Notificacion> notificaciones = notificacionRepository.findByPacienteAndLeidoFalse(paciente);

        // Marca todas las notificaciones como leídas
        notificaciones.forEach(notificacion -> notificacion.setLeido(true));

        // Guarda las notificaciones actualizadas
        notificacionRepository.saveAll(notificaciones);
    }

    public void marcarAdherenciaPorIdNotificacion(Integer idNotificacion) {
        Notificacion notificacion = notificacionRepository.findById(idNotificacion).orElseThrow(
                () -> new NullPointerException("Notificación no encontrada"));
        notificacion.setLeido(true);
        notificacionRepository.save(notificacion);
    }
}
