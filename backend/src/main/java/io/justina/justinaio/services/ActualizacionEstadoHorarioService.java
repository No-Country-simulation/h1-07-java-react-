package io.justina.justinaio.services;

import io.justina.justinaio.model.HorarioToma;
import io.justina.justinaio.model.Notificacion;
import io.justina.justinaio.model.enums.EstadoHorario;
import io.justina.justinaio.repositories.HorarioTomaRepository;
import io.justina.justinaio.repositories.NotificacionRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ActualizacionEstadoHorarioService {

    private final HorarioTomaRepository horarioTomaRepository;
    private final NotificacionRepository notificacionRepository;

    public void actualizarEstados() {
        LocalDateTime ahora = LocalDateTime.now();
        LocalDateTime haceUnDia = ahora.minusDays(1);

        // Obtener todos los horarios en curso cuya fecha y hora ya pasaron hace un día o más
        List<HorarioToma> horariosEnCurso = horarioTomaRepository.findByEstadoHorarioAndFechaBefore(EstadoHorario.EN_CURSO, haceUnDia.toLocalDate());

        for (HorarioToma horario : horariosEnCurso) {
            LocalDateTime fechaHoraHorario = LocalDateTime.of(horario.getFecha(), horario.getHora());
            if (fechaHoraHorario.isBefore(haceUnDia)) {
                horario.setEstadoHorario(EstadoHorario.NO_COMPLETADO);

                // Verificar si existe una notificación asociada
                Notificacion notificacion = notificacionRepository.findByHorarioToma(horario);
                if (notificacion != null && !notificacion.getLeido()) {
                    // Marcar la notificación como leída
                    notificacion.setLeido(true);
                    notificacionRepository.save(notificacion);
                }
            }
        }

        // Guardar las actualizaciones en el repositorio
        horarioTomaRepository.saveAll(horariosEnCurso);
    }
}


