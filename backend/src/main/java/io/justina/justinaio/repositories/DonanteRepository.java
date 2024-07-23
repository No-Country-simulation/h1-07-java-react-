package io.justina.justinaio.repositories;

import io.justina.justinaio.model.Donante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface DonanteRepository extends JpaRepository<Donante, Integer>, JpaSpecificationExecutor<Donante> {

}
