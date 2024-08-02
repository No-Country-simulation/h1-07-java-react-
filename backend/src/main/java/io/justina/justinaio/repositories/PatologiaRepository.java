package io.justina.justinaio.repositories;

import io.justina.justinaio.model.Patologia;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatologiaRepository extends JpaRepository<Patologia, Integer> {
    boolean existsByNombre(String nombre);
}
