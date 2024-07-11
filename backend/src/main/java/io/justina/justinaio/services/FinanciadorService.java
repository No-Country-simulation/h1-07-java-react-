package io.justina.justinaio.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.justina.justinaio.dto.BajaFinanciadorRequest;
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

    public void bajaFinanciador(BajaFinanciadorRequest bajaFinanciadorRequest) {

        Financiador financiador = financiadorRepository.buscarPorNombre(bajaFinanciadorRequest.getNombreFinanciador())
                .orElseThrow(
                        () -> new NullPointerException("Financiador a dar de baja no encontrado"));
        financiador.setEsActivo(false);
        financiadorRepository.save(financiador);
    }

    public ArrayList<FinanciadorResponse> buscarFinanciadores(int page) {
        PageRequest pageRequest = PageRequest.of(page, 10);
        ArrayList<FinanciadorResponse> financiadores = new ArrayList<>();

        for (Financiador f : financiadorRepository.buscarFinanciadores(pageRequest)) {
            FinanciadorResponse financiador = new FinanciadorResponse();
            financiador.setNombre(f.getNombre());
            financiador.setDescripcion(f.getDescripcion());
            financiadores.add(financiador);
        }
        return financiadores;
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
