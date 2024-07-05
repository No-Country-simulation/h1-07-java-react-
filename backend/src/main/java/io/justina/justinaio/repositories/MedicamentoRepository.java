package io.justina.justinaio.repositories;

import io.justina.justinaio.model.Medicamento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicamentoRepository extends JpaRepository<Medicamento,Integer> {
    boolean existsByNombre(String nombre);
}
