package io.justina.justinaio.repositories;


import io.justina.justinaio.model.Tratamiento;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TratamientoRepository extends JpaRepository<Tratamiento, Integer>, JpaSpecificationExecutor<Tratamiento> {

    @Query("SELECT t FROM Tratamiento t JOIN FETCH t.horarios h WHERE t.paciente.id = :idPaciente AND t.medico.idMedico = :idMedico AND t.esActivo = true AND h.esActivo = true")
    Page<Tratamiento> findByPacienteIdAndMedicoIdAndEsActivoTrue(Pageable pageable, Integer idPaciente, Integer idMedico);

    @Query("SELECT t FROM Tratamiento t JOIN FETCH t.horarios h WHERE t.paciente.id = :idPaciente AND t.esActivo = true AND h.esActivo = true")
    Page<Tratamiento> findByPacienteIdAndEsActivoTrue(Pageable pageable, Integer idPaciente);

    List<Tratamiento> findByPaciente_IdPacienteAndMedico_IdMedico(Integer idPaciente, Integer idMedico);
}

