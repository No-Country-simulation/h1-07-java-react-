package io.justina.justinaio.repositories;

import io.justina.justinaio.model.Entidad;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EntidadRepository extends JpaRepository<Entidad,Integer> {
    boolean existsByNombre(String nombre);
}
