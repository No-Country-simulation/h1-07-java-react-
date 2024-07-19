package io.justina.justinaio.services;

import java.util.List;
import java.util.Optional;

import io.justina.justinaio.util.PageResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.justina.justinaio.dto.BajaPorNombreRequest;
import io.justina.justinaio.dto.FinanciadorModificacionRequest;
import io.justina.justinaio.dto.FinanciadorRequest;
import io.justina.justinaio.dto.FinanciadorResponse;
import io.justina.justinaio.model.Financiador;
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
            throw new IllegalArgumentException("Financiador sin nombre");
        }

        if (financiadorRequest.getDescripcion() == null || financiadorRequest.getDescripcion().isEmpty()) {
            throw new IllegalArgumentException("Financiador sin descripción");
        }

        Optional<Financiador> existente = financiadorRepository.buscarPorNombre(financiadorRequest.getNombre());
        if (existente.isPresent()) {
            throw new IllegalArgumentException("El financiador ya existe");
        }

        financiadorRepository.save(Mapper.toFinanciador(financiadorRequest));
    }

    public void modificarFinanciador(FinanciadorModificacionRequest financiadorRequest) {

        Financiador financiador = financiadorRepository.buscarPorNombre(financiadorRequest.getNombre()).orElseThrow(
                () -> new NullPointerException("Financiador a modificar no encontrado"));

        if (financiadorRequest.getNombreCambio() != null) {
            financiador.setNombre(financiadorRequest.getNombreCambio());
        }

        if (financiadorRequest.getDescripcion() != null) {
            financiador.setDescripcion(financiadorRequest.getDescripcion());
        }

        financiadorRepository.save(financiador);
    }

    public void bajaFinanciador(BajaPorNombreRequest bajaFinanciadorRequest) {

        Optional<Financiador> financiador = financiadorRepository.buscarPorNombre(bajaFinanciadorRequest.getNombre());

        if (financiador.isEmpty()) {
            throw new NullPointerException("Financiador a dar de baja no encontrado");
        }

        if (!financiador.get().isEsActivo()) {
            throw new IllegalArgumentException("El financiador ya se encuentra dado de baja");
        }

        financiador.get().setEsActivo(false);
        financiadorRepository.save(financiador.get());
    }

    public PageResponse<FinanciadorResponse> buscarFinanciadores(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("nombre").ascending());
        Page<Financiador> financiadores = financiadorRepository.findByEsActivoTrue(pageable);
        List<FinanciadorResponse> financiadoresResponse = financiadores.stream()
                .map(Mapper::toFinanciadorResponse).toList();
        return new PageResponse<>(
                financiadoresResponse,
                financiadores.getNumber(),
                financiadores.getSize(),
                financiadores.getTotalElements(),
                financiadores.getTotalPages(),
                financiadores.isFirst(),
                financiadores.isLast());
    }

    public FinanciadorResponse buscarUnFinanciador(String nombre) {

        Optional<Financiador> financiador = financiadorRepository.buscarFinanciador(nombre);

        if (financiador.isEmpty()) {
            throw new NullPointerException("Financiador no encontrado");
        }

        FinanciadorResponse financiadorResponse = new FinanciadorResponse();
        financiadorResponse.setNombre(financiador.get().getNombre());
        financiadorResponse.setDescripcion(financiador.get().getDescripcion());
        return financiadorResponse;
    }

}
