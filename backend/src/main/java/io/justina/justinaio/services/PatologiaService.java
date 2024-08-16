package io.justina.justinaio.services;

import io.justina.justinaio.dto.FarmaciaResponse;
import io.justina.justinaio.dto.PatologiaRequest;
import io.justina.justinaio.dto.PatologiaResponse;
import io.justina.justinaio.model.Farmacia;
import io.justina.justinaio.model.Patologia;
import io.justina.justinaio.repositories.PatologiaRepository;
import io.justina.justinaio.util.Mapper;
import io.justina.justinaio.util.PageResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PatologiaService {
    private final PatologiaRepository patologiaRepository;


    public void crearPatologia(PatologiaRequest patologiaRequest) {
        Patologia patologia = Mapper.toPatologia(patologiaRequest);
        patologiaRepository.save(patologia);
    }

    public PageResponse<PatologiaResponse> listarPatologias(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("idPatologia").descending());
        Page<Patologia> patologias = patologiaRepository.findByEsActivoTrue(pageable);
        List<PatologiaResponse> patologiaResponses = patologias.stream()
                .map(Mapper::toPatologiaResponse).toList();

        return new PageResponse<>(
                patologiaResponses,
                patologias.getNumber(),
                patologias.getSize(),
                patologias.getTotalElements(),
                patologias.getTotalPages(),
                patologias.isFirst(),
                patologias.isLast()
        );
    }

    public PatologiaResponse encontrarPatologiaPorId(Integer idPatologia) {
        Patologia patologia = patologiaRepository.findById(idPatologia).orElseThrow(() ->
                new IllegalArgumentException("Patologia no encontrada")
        );
        return Mapper.toPatologiaResponse(patologia);
    }

    public void modificarPatologia(PatologiaRequest patologiaRequest, Integer idPatologia) {
        Patologia patologia = patologiaRepository.findById(idPatologia).orElseThrow(() ->
                new IllegalArgumentException("Patologia no encontrada")
        );
        patologia.setNombre(patologiaRequest.getNombre());
        patologia.setDescripcion(patologiaRequest.getDescripcion());
        patologiaRepository.save(patologia);
    }

    public void bajaPatologia(Integer idPatologia) {
        Patologia patologia = patologiaRepository.findById(idPatologia).orElseThrow(() ->
                new IllegalArgumentException("Patologia no encontrada")
        );
        patologia.setEsActivo(false);
        patologiaRepository.save(patologia);
    }
}