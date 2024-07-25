package io.justina.justinaio.repositories;

import io.justina.justinaio.model.Paciente;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.Optional;

public interface PacienteRepository extends JpaRepository<Paciente, Integer>, JpaSpecificationExecutor<Paciente> {
    Page<Paciente> findAllByMedicosIdMedico(Pageable pageable, Integer id);

    Optional<Paciente> findByIdPaciente(Integer id);
}
