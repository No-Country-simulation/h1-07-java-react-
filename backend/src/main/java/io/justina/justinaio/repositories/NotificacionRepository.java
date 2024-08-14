package io.justina.justinaio.repositories;

import io.justina.justinaio.model.HorarioToma;
import io.justina.justinaio.model.Notificacion;
import io.justina.justinaio.model.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface NotificacionRepository extends JpaRepository<Notificacion, Integer> {

    // Encuentra notificaciones para un paciente dentro de un rango de fechas y que no estén leídas
    List<Notificacion> findByPacienteAndFechaBetweenAndLeidoFalse(Paciente paciente, LocalDate startDate, LocalDate endDate);

    // Verifica si existe alguna notificación para un horario de toma específico
    boolean existsByHorarioToma(HorarioToma horario);

    // Encuentra notificaciones para un paciente que no estén leídas
    List<Notificacion> findByPacienteAndLeidoFalse(Paciente paciente);

    // Encuentra todas las notificaciones para un paciente dentro de un rango de fechas
    List<Notificacion> findByPacienteAndFechaBetween(Paciente paciente, LocalDate startDate, LocalDate endDate);

    Notificacion findByHorarioToma(HorarioToma horario);
}




