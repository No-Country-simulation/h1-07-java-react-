package io.justina.justinaio.repositories;

import io.justina.justinaio.model.TipoDocumento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TipoDocumentoRepository extends JpaRepository<TipoDocumento,Integer> {
    boolean existsByDescripcion(String descripcion);
}
