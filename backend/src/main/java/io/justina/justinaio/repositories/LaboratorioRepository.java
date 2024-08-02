package io.justina.justinaio.repositories;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import io.justina.justinaio.model.Laboratorio;

@Repository
public interface LaboratorioRepository
        extends JpaRepository<Laboratorio, Integer>, JpaSpecificationExecutor<Laboratorio> {

    @Query("SELECT l FROM Laboratorio l WHERE l.nombre = :nombre")
    Optional<Laboratorio> buscarPorNombre(@Param("nombre") String nombre);

    @Query("SELECT l FROM Laboratorio l WHERE l.esActivo = true AND l.nombre = :nombre")
    Optional<Laboratorio> buscarLaboratorio(@Param("nombre") String nombre);

    Page<Laboratorio> findByEsActivoTrue(Pageable pageable);
}
