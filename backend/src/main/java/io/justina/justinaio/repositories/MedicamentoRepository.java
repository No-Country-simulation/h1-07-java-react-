package io.justina.justinaio.repositories;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import io.justina.justinaio.model.Medicamento;

public interface MedicamentoRepository
        extends JpaRepository<Medicamento, Integer>, JpaSpecificationExecutor<Medicamento> {
    boolean existsByNombre(String nombre);

    @Query("SELECT m FROM Medicamento m WHERE m.nombre = :nombre")
    Optional<Medicamento> buscarPorNombre(String nombre);

    @Query("SELECT m FROM Medicamento m WHERE m.esActivo = true AND m.nombre = :nombre")
    Optional<Medicamento> buscarMedicamento(@Param("nombre") String nombre);

    Page<Medicamento> findByEsActivoTrue(Pageable pageable);
}
