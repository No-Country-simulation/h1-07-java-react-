package io.justina.justinaio.repositories;

import io.justina.justinaio.model.HorarioToma;
import io.justina.justinaio.model.Tratamiento;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

public interface HorarioTomaRepository extends JpaRepository<HorarioToma, Integer> {
    List<HorarioToma> findByTratamientoAndEsActivoTrue(Tratamiento tratamiento);

    List<HorarioToma> findAllByFechaAndHoraBetweenAndEsActivoTrue(LocalDate localDate, LocalTime localTime, LocalTime localTime1);

    List<HorarioToma> findByHoraBetween(LocalTime localTime, LocalTime localTime1);
}
