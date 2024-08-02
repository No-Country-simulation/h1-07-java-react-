package io.justina.justinaio.repositories;

import io.justina.justinaio.model.Medico;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

public interface MedicoRepository extends JpaRepository<Medico, Integer>, JpaSpecificationExecutor<Medico> {
    Page<Medico> findAllByPacientesIdPaciente(Pageable pageable, Integer idPaciente);
}

