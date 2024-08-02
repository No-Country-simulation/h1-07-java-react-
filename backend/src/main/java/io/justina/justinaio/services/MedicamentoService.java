package io.justina.justinaio.services;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import io.justina.justinaio.dto.BajaPorNombreRequest;
import io.justina.justinaio.dto.MedicamentoModificacionRequest;
import io.justina.justinaio.dto.MedicamentoRequest;
import io.justina.justinaio.dto.MedicamentoResponse;
import io.justina.justinaio.model.Medicamento;
import io.justina.justinaio.repositories.MedicamentoRepository;
import io.justina.justinaio.util.Mapper;
import io.justina.justinaio.util.PageResponse;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class MedicamentoService {

    private final MedicamentoRepository medicamentoRepository;

    public void crearMedicamento(MedicamentoRequest medicamentoRequest) {

        if (medicamentoRequest.getNombre() == null || medicamentoRequest.getNombre().isEmpty()) {
            throw new IllegalArgumentException("Medicamento sin nombre");
        }

        if (medicamentoRequest.getDescripcion() == null || medicamentoRequest.getDescripcion().isEmpty()) {
            throw new IllegalArgumentException("Medicamento sin descripción");
        }

        Optional<Medicamento> existente = medicamentoRepository.buscarPorNombre(medicamentoRequest.getNombre());
        if (existente.isPresent()) {
            throw new IllegalArgumentException("El medicamento ya existe");
        }

        medicamentoRepository.save(Mapper.toMedicamento(medicamentoRequest));
    }

    public void modificarMedicamento(MedicamentoModificacionRequest medicamentoRequest) {
        Medicamento medicamento = medicamentoRepository.buscarPorNombre(medicamentoRequest.getNombre()).orElseThrow(
                () -> new NullPointerException("Medicamento a modificar no encontrado"));

        if (medicamentoRequest.getNombreCambio() != null) {
            medicamento.setNombre(medicamentoRequest.getNombreCambio());
        }

        if (medicamentoRequest.getDescripcion() != null) {
            medicamento.setDescripcion(medicamentoRequest.getDescripcion());
        }

        medicamentoRepository.save(medicamento);
    }

    public void bajaMedicamento(BajaPorNombreRequest bajaMedicamentoRequest) {

        Optional<Medicamento> medicamento = medicamentoRepository.buscarPorNombre(bajaMedicamentoRequest.getNombre());

        if (medicamento.isEmpty()) {
            throw new NullPointerException("Medicamento a dar de baja no encontrado");
        }

        if (!medicamento.get().isEsActivo()) {
            throw new IllegalArgumentException("El medicamento ya se encuentra dado de baja");
        }

        medicamento.get().setEsActivo(false);
        medicamentoRepository.save(medicamento.get());

    }

    public PageResponse<MedicamentoResponse> buscarMedicamentos(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("nombre").ascending());
        Page<Medicamento> medicamentos = medicamentoRepository.findByEsActivoTrue(pageable);
        List<MedicamentoResponse> medicamentosResponse = medicamentos.stream()
                .map(Mapper::toMedicamentoResponse).toList();
        return new PageResponse<>(
                medicamentosResponse,
                medicamentos.getNumber(),
                medicamentos.getSize(),
                medicamentos.getTotalElements(),
                medicamentos.getTotalPages(),
                medicamentos.isFirst(),
                medicamentos.isLast());
    }

    public Object buscarUnMedicamento(String nombre) {

        Optional<Medicamento> medicamento = medicamentoRepository.buscarMedicamento(nombre);

        if (medicamento.isEmpty()) {
            throw new NullPointerException("Medicamento no encontrado");
        }

        MedicamentoResponse medicamentoResponse = new MedicamentoResponse();
        medicamentoResponse.setNombre(medicamento.get().getNombre());
        medicamentoResponse.setDescripcion(medicamento.get().getDescripcion());
        return medicamentoResponse;
    }

}
