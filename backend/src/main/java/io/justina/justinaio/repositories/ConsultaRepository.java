package io.justina.justinaio.repositories;

import io.justina.justinaio.model.Consulta;
import io.justina.justinaio.model.Medico;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ConsultaRepository extends JpaRepository<Consulta, Integer>, JpaSpecificationExecutor<Consulta> {

    @Query("SELECT c.fecha FROM Consulta c WHERE c.medico = :medico GROUP BY c.fecha HAVING COUNT(*) = :nTurnos")
    List<String> listarConsultasDeUnMedico(@Param("medico") Medico medico, @Param("nTurnos") Long nTurnos);

    @Query("SELECT c.horario FROM Consulta c WHERE (c.medico = :medico AND c.fecha = :fechaConsulta)")
    List<Integer> listarHorariosDeUnMedico(@Param("medico") Medico medico, @Param("fechaConsulta") String fecha);

    @Query("SELECT c FROM Consulta c WHERE (c.medico.id = :medicoId)")
    Page<Consulta> findAllByMedicoId(Pageable pageable, @Param("medicoId") Integer medicoId);

    @Query("SELECT c FROM Consulta c WHERE (c.medico.id = :medicoId AND c.paciente.id = :pacienteId)")
    Page<Consulta> findAllByMedicoIdAndPacienteId(Pageable pageable, @Param("medicoId") Integer id, @Param("pacienteId") Integer pacienteId);

    @Query("SELECT c FROM Consulta c WHERE (c.paciente.id = :medicoId)")
    Page<Consulta> findAllByPacienteId(Pageable pageable, @Param("medicoId") Integer medicoid);

    boolean existsByMedicoAndFechaAndHorario(Medico medico, String fecha, Integer horario);

}