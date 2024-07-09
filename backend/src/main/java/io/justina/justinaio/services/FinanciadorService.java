package io.justina.justinaio.services;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.justina.justinaio.dto.FinanciadorRequest;
import io.justina.justinaio.repositories.FinanciadorRepository;
import io.justina.justinaio.util.Mapper;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class FinanciadorService {

    private final FinanciadorRepository financiadorRepository;

    @Transactional
    public void crearFinanciador(FinanciadorRequest financiadorRequest) {
        
        if (financiadorRequest.getNombre() == null || financiadorRequest.getNombre().isEmpty()) {
            throw new NullPointerException("Financiador sin nombre");
        }

        if (financiadorRequest.getDescripcion() == null || financiadorRequest.getDescripcion().isEmpty()) {
            throw new NullPointerException("Financiador sin descripción");
        }

        financiadorRepository.save(Mapper.toFinanciador(financiadorRequest));

        throw new UnsupportedOperationException("Unimplemented method 'crearFinanciador'");
    }
    
}
