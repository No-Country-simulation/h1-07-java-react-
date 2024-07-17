package io.justina.justinaio.repositories;

import io.justina.justinaio.model.HorarioToma;
import io.justina.justinaio.model.Tratamiento;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HorarioTomaRepository extends JpaRepository<HorarioToma, Integer> {
    List<HorarioToma> findByTratamiento(Tratamiento tratamiento);
}
