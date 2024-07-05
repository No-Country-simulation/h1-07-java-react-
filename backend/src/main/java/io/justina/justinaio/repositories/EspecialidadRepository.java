package io.justina.justinaio.repositories;

import io.justina.justinaio.model.Especialidad;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EspecialidadRepository extends JpaRepository<Especialidad,Integer> {
    boolean existsByNombre(String nombreEspecialidad);
}
