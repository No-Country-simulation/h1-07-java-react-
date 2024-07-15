package io.justina.justinaio.services;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import io.justina.justinaio.dto.BajaPorNombreRequest;
import io.justina.justinaio.dto.LaboratorioModificacionRequest;
import io.justina.justinaio.dto.LaboratorioRequest;
import io.justina.justinaio.dto.LaboratorioResponse;
import io.justina.justinaio.model.Laboratorio;
import io.justina.justinaio.repositories.LaboratorioRepository;
import io.justina.justinaio.util.Mapper;
import io.justina.justinaio.util.PageResponse;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class LaboratorioService {

    private final LaboratorioRepository laboratorioRepository;

    public void crearLaboratorio(LaboratorioRequest laboratorioRequest) {

        if (laboratorioRequest.getNombre() == null || laboratorioRequest.getNombre().isEmpty()) {
            throw new IllegalArgumentException("Laboratorio sin nombre");
        }

        if (laboratorioRequest.getDescripcion() == null || laboratorioRequest.getDescripcion().isEmpty()) {
            throw new IllegalArgumentException("Laboratorio sin descripción");
        }

        Optional<Laboratorio> existente = laboratorioRepository.buscarPorNombre(laboratorioRequest.getNombre());
        if (existente.isPresent()) {
            throw new IllegalArgumentException("El laboratorio ya existe");
        }

        laboratorioRepository.save(Mapper.toLaboratorio(laboratorioRequest));
    }

    public void modificarLaboratorio(LaboratorioModificacionRequest laboratorioRequest) {

        Laboratorio laboratorio = laboratorioRepository.buscarPorNombre(laboratorioRequest.getNombre()).orElseThrow(
                () -> new NullPointerException("Laboratorio a modificar no encontrado"));

        if (laboratorioRequest.getNombreCambio() != null) {
            laboratorio.setNombre(laboratorioRequest.getNombreCambio());
        }

        if (laboratorioRequest.getDescripcion() != null) {
            laboratorio.setDescripcion(laboratorioRequest.getDescripcion());
        }

        laboratorioRepository.save(laboratorio);
    }

    public void bajaLaboratorio(BajaPorNombreRequest bajaLaboratorioRequest) {

        Laboratorio laboratorio = laboratorioRepository.buscarPorNombre(bajaLaboratorioRequest.getNombre())
                .orElseThrow(
                        () -> new NullPointerException("Laboratorio a dar de baja no encontrado"));
        laboratorio.setEsActivo(false);
        laboratorioRepository.save(laboratorio);

    }

    public PageResponse<LaboratorioResponse> buscarLaboratorios(int page, int size) {

        Pageable pageable = PageRequest.of(page, size, Sort.by("nombre").ascending());
        Page<Laboratorio> laboratorios = laboratorioRepository.findByEsActivoTrue(pageable);
        List<LaboratorioResponse> laboratoriosResponse = laboratorios.stream()
                .map(Mapper::toLaboratorioResponse).toList();
        return new PageResponse<>(
                laboratoriosResponse,
                laboratorios.getNumber(),
                laboratorios.getSize(),
                laboratorios.getTotalElements(),
                laboratorios.getTotalPages(),
                laboratorios.isFirst(),
                laboratorios.isLast());

    }

    public Object buscarUnLaboratorio(String nombre) {

        Optional<Laboratorio> laboratorio = laboratorioRepository.buscarLaboratorio(nombre);

        if (laboratorio.isEmpty()) {
            throw new NullPointerException("Laboratorio no encontrado");
        }

        LaboratorioResponse laboratorioResponse = new LaboratorioResponse();
        laboratorioResponse.setNombre(laboratorio.get().getNombre());
        laboratorioResponse.setDescripcion(laboratorio.get().getDescripcion());
        return laboratorioResponse;

    }

}
