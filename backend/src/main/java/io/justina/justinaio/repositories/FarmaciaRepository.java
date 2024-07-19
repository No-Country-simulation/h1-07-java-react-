package io.justina.justinaio.repositories;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import io.justina.justinaio.model.Farmacia;

@Repository
public interface FarmaciaRepository
        extends JpaRepository<Farmacia, Integer>, JpaSpecificationExecutor<Farmacia> {

    @Query("SELECT f FROM Farmacia f WHERE f.nombre = :nombre")
    Optional<Farmacia> buscarPorNombre(@Param("nombre") String nombre);

    @Query("SELECT f FROM Farmacia f WHERE f.esActivo = true AND f.nombre = :nombre")
    Optional<Farmacia> buscarFarmacia(@Param("nombre") String nombre);

    Page<Farmacia> findByEsActivoTrue(Pageable pageable);
}
