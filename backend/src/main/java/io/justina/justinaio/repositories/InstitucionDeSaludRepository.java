package io.justina.justinaio.repositories;

import java.util.Optional;

import io.justina.justinaio.model.InstitucionDeSalud;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import io.justina.justinaio.model.Farmacia;

@Repository
public interface InstitucionDeSaludRepository
        extends JpaRepository<InstitucionDeSalud, Integer>, JpaSpecificationExecutor<InstitucionDeSalud>{

    @Query("SELECT i FROM InstitucionDeSalud i WHERE i.nombre = :nombre")
    Optional<InstitucionDeSalud> buscarPorNombre(@Param("nombre") String nombre);

    @Query("SELECT i FROM InstitucionDeSalud i WHERE i.esActivo = true AND i.nombre = :nombre")
    Optional<InstitucionDeSalud> buscarInstitucionDeSalud(@Param("nombre") String nombre);

    Page<InstitucionDeSalud> findByEsActivoTrue(Pageable pageable);
}
