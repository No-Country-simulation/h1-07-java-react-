package io.justina.justinaio.repositories;

import io.justina.justinaio.model.HorarioToma;
import io.justina.justinaio.model.Notificacion;
import io.justina.justinaio.model.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface NotificacionRepository extends JpaRepository<Notificacion, Integer> {
    List<Notificacion> findByPacienteAndFechaNotificacionBetweenAndLeidoFalse(Paciente paciente, LocalDateTime startDate, LocalDateTime endDate);

    boolean existsByHorarioToma(HorarioToma horario);

    List<Notificacion> findByPacienteAndLeidoFalse(Paciente paciente);

    List<Notificacion> findByPacienteAndFechaNotificacionBetween(Paciente paciente, LocalDateTime tresDiasAtras, LocalDateTime ahora);
}



