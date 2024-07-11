package io.justina.justinaio.repositories;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import io.justina.justinaio.model.Financiador;

public interface FinanciadorRepository extends JpaRepository<Financiador, Integer> {
    boolean existsByNombre(String nombreFinanciador);

    @Query("SELECT f FROM Financiador f WHERE f.nombre = :nombre")
    Optional<Financiador> buscarPorNombre(@Param("nombre") String nombre);

    @Query("SELECT f FROM Financiador f WHERE f.esActivo = true")
    ArrayList<Financiador> buscarFinanciadores(Pageable pageable);

    @Query("SELECT f FROM Financiador f WHERE f.esActivo = true AND f.nombre = :nombre")
    Optional<Financiador> buscarFinanciador(@Param("nombre") String nombre);

}
