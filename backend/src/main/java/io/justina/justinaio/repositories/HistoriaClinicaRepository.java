package io.justina.justinaio.repositories;

import io.justina.justinaio.model.CasoClinico;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface HistoriaClinicaRepository extends JpaRepository<CasoClinico, Long>, JpaSpecificationExecutor<CasoClinico> {
    Page<CasoClinico> findByPacienteIdPaciente(Integer idPaciente, Pageable pageable);
}
