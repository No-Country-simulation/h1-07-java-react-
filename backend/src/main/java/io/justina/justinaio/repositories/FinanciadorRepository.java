package io.justina.justinaio.repositories;

import io.justina.justinaio.model.Financiador;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FinanciadorRepository extends JpaRepository<Financiador, Integer> {
    boolean existsByNombre(String nombreFinanciador);
}
