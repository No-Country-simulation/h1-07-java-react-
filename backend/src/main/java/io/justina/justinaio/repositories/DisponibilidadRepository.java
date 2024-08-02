package io.justina.justinaio.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import io.justina.justinaio.model.Disponibilidad;

@Repository
public interface DisponibilidadRepository extends JpaRepository<Disponibilidad, Integer> {

    @Query("SELECT d FROM Disponibilidad d WHERE d.medico.idMedico = :idMedico")
    Disponibilidad findDisponibilidadByMedicoId(@Param("idMedico") Integer idMedico);
}
