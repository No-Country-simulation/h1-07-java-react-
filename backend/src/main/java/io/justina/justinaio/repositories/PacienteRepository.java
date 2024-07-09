package io.justina.justinaio.repositories;

import io.justina.justinaio.model.Paciente;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PacienteRepository extends JpaRepository<Paciente, Integer> {
    Page<Paciente> findAllByMedicosIdMedico(Pageable pageable, Integer id);
}
