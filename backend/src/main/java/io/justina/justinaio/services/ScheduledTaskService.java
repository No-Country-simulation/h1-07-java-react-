package io.justina.justinaio.services;

import io.justina.justinaio.model.HorarioToma;
import io.justina.justinaio.repositories.HorarioTomaRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class ScheduledTaskService {
    private final HorarioTomaRepository horarioTomaRepository;
    private final EmailService emailService;

    @Scheduled(fixedRate = 1800000) // Ejecutar cada 30 minutos
    public void sendReminderEmails() {
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime thirtyMinutesAgo = now.minusMinutes(30);

        log.info("Executing sendReminderEmails at {}", now);

        // Buscar todos los HorarioToma activos entre 30 minutos antes y la hora actual
        List<HorarioToma> upcomingHorarios = horarioTomaRepository.findAllByFechaAndHoraBetweenAndEsActivoTrue(
                now.toLocalDate(), thirtyMinutesAgo.toLocalTime(), now.toLocalTime()
        );

        log.info("Found {} upcoming HorarioTomas", upcomingHorarios.size());

        for (HorarioToma horarioToma : upcomingHorarios) {
            emailService.sendReminderEmail(horarioToma);
        }
    }
}



