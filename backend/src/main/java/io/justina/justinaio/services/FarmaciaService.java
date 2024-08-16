package io.justina.justinaio.services;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import io.justina.justinaio.dto.BajaPorNombreRequest;
import io.justina.justinaio.dto.FarmaciaModificacionRequest;
import io.justina.justinaio.dto.FarmaciaRequest;
import io.justina.justinaio.dto.FarmaciaResponse;
import io.justina.justinaio.model.Farmacia;
import io.justina.justinaio.repositories.FarmaciaRepository;
import io.justina.justinaio.util.Mapper;
import io.justina.justinaio.util.PageResponse;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class FarmaciaService {

    private final FarmaciaRepository farmaciaRepository;

    @Transactional
    public void crearFarmacia(FarmaciaRequest farmaciaRequest) {

        if (farmaciaRequest.getNombre() == null || farmaciaRequest.getNombre().isEmpty()) {
            throw new IllegalArgumentException("Farmacia sin nombre");
        }

        if (farmaciaRequest.getDireccion() == null || farmaciaRequest.getDireccion().isEmpty()) {
            throw new IllegalArgumentException("Farmacia sin dirección");
        }

        Optional<Farmacia> existente = farmaciaRepository.buscarPorNombre(farmaciaRequest.getNombre());
        if (existente.isPresent()) {
            throw new IllegalArgumentException("La farmacia ya existe");
        }

        farmaciaRepository.save(Mapper.toFarmacia(farmaciaRequest));

    }

    @Transactional
    public void modificarFarmacia(FarmaciaModificacionRequest farmaciaRequest) {

        Farmacia farmacia = farmaciaRepository.buscarPorNombre(farmaciaRequest.getNombre()).orElseThrow(
                () -> new NullPointerException("Farmacia a modificar no encontrada"));

        if (farmaciaRequest.getNombreCambio() != null) {
            farmacia.setNombre(farmaciaRequest.getNombreCambio());
        }

        if (farmaciaRequest.getDireccion() != null) {
            farmacia.setDireccion(farmaciaRequest.getDireccion());
        }

        farmaciaRepository.save(farmacia);

    }

    @Transactional
    public void bajaFarmacia(BajaPorNombreRequest bajaFarmaciaRequest) {

        Optional<Farmacia> farmacia = farmaciaRepository.buscarPorNombre(bajaFarmaciaRequest.getNombre());

        if (farmacia.isEmpty()) {
            throw new NullPointerException("Farmacia a dar de baja no encontrada");
        }

        if (!farmacia.get().isEsActivo()) {
            throw new IllegalArgumentException("La farmacia ya se encuentra dada de baja");
        }

        farmacia.get().setEsActivo(false);
        farmaciaRepository.save(farmacia.get());

    }

    public PageResponse<FarmaciaResponse> buscarFarmacias(int page, int size) {

        Pageable pageable = PageRequest.of(page, size, Sort.by("nombre").ascending());
        Page<Farmacia> farmacias = farmaciaRepository.findByEsActivoTrue(pageable);
        List<FarmaciaResponse> farmaciasResponse = farmacias.stream()
                .map(Mapper::toFarmaciaResponse).toList();
        return new PageResponse<>(
                farmaciasResponse,
                farmacias.getNumber(),
                farmacias.getSize(),
                farmacias.getTotalElements(),
                farmacias.getTotalPages(),
                farmacias.isFirst(),
                farmacias.isLast());

    }

    public Object buscarUnaFarmacia(String nombre) {

        Optional<Farmacia> farmacia = farmaciaRepository.buscarFarmacia(nombre);

        if (farmacia.isEmpty()) {
            throw new NullPointerException("Farmacia no encontrada");
        }

        FarmaciaResponse farmaciaResponse = new FarmaciaResponse();
        farmaciaResponse.setNombre(farmacia.get().getNombre());
        farmaciaResponse.setDireccion(farmacia.get().getDireccion());
        return farmaciaResponse;

    }

    public void bajaFarmaciaPorId(Integer idFarmacia) {
        Optional<Farmacia> farmacia = farmaciaRepository.findById(idFarmacia);

        if (farmacia.isEmpty()) {
            throw new NullPointerException("Farmacia a dar de baja no encontrada");
        }

        if (!farmacia.get().isEsActivo()) {
            throw new IllegalArgumentException("La farmacia ya se encuentra dada de baja");
        }

        farmacia.get().setEsActivo(false);
        farmaciaRepository.save(farmacia.get());
    }
}
