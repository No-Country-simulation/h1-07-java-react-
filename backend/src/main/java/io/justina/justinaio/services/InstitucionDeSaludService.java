package io.justina.justinaio.services;

import java.util.List;
import java.util.Optional;

import io.justina.justinaio.dto.*;
import io.justina.justinaio.model.Farmacia;
import io.justina.justinaio.model.InstitucionDeSalud;
import io.justina.justinaio.repositories.InstitucionDeSaludRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import io.justina.justinaio.util.Mapper;
import io.justina.justinaio.util.PageResponse;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class InstitucionDeSaludService {

    private InstitucionDeSaludRepository institucionDeSaludRepository;

    @Transactional
    public void crearInstitucionDeSalud(InstitucionDeSaludRequest institucionDeSaludRequest) {

        if (institucionDeSaludRequest.getNombre() == null || institucionDeSaludRequest.getNombre().isEmpty()) {
            throw new IllegalArgumentException("Institución de salud sin nombre");
        }

        if (institucionDeSaludRequest.getDireccion() == null || institucionDeSaludRequest.getDireccion().isEmpty()) {
            throw new IllegalArgumentException("Institución de salud sin dirección");
        }

        if (institucionDeSaludRequest.getEmailContacto() == null || institucionDeSaludRequest.getEmailContacto().isEmpty()) {
            throw new IllegalArgumentException("Institución de salud sin email de contacto");
        }

        Optional<InstitucionDeSalud> existente = institucionDeSaludRepository.buscarPorNombre(institucionDeSaludRequest.getNombre());
        if (existente.isPresent()) {
            throw new IllegalArgumentException("La institución de salud ya existe");
        }

        institucionDeSaludRepository.save(Mapper.toInstitucionDeSalud(institucionDeSaludRequest));

    }

    @Transactional
    public void modificarInstitucionDeSalud(InstitucionDeSaludModificacionRequest institucionDeSaludRequest) {

        InstitucionDeSalud institucionDeSalud = institucionDeSaludRepository.buscarPorNombre(institucionDeSaludRequest.getNombre()).orElseThrow(
                () -> new NullPointerException("Institución de salud a modificar no encontrada"));

        if (institucionDeSaludRequest.getNombreCambio() != null) {
            institucionDeSalud.setNombre(institucionDeSaludRequest.getNombreCambio());
        }

        if (institucionDeSaludRequest.getDireccion() != null) {
            institucionDeSalud.setDireccion(institucionDeSaludRequest.getDireccion());
        }

        if (institucionDeSaludRequest.getEmailContacto() != null) {
            institucionDeSalud.setEmailContacto(institucionDeSaludRequest.getEmailContacto());
        }

        institucionDeSaludRepository.save(institucionDeSalud);

    }

    @Transactional
    public void bajaInstitucionDeSalud(BajaPorNombreRequest bajaInstitucionDeSaludRequest) {

        Optional<InstitucionDeSalud> institucionDeSalud = institucionDeSaludRepository.buscarPorNombre(bajaInstitucionDeSaludRequest.getNombre());

        if (institucionDeSalud.isEmpty()) {
            throw new NullPointerException("Institución de salud a dar de baja no encontrada");
        }

        if (!institucionDeSalud.get().isEsActivo()) {
            throw new IllegalArgumentException("La institución de salud ya se encuentra dada de baja");
        }

        institucionDeSalud.get().setEsActivo(false);
        institucionDeSaludRepository.save(institucionDeSalud.get());

    }

    public PageResponse<InstitucionDeSaludResponse> buscarInstitucionesDeSalud(int page, int size) {

        Pageable pageable = PageRequest.of(page, size, Sort.by("nombre").ascending());
        Page<InstitucionDeSalud> institucionesDeSalud = institucionDeSaludRepository.findByEsActivoTrue(pageable);
        List<InstitucionDeSaludResponse> institucionesDeSaludResponse = institucionesDeSalud.stream()
                .map(Mapper::toInstitucionDeSaludResponse).toList();
        return new PageResponse<>(
                institucionesDeSaludResponse,
                institucionesDeSalud.getNumber(),
                institucionesDeSalud.getSize(),
                institucionesDeSalud.getTotalElements(),
                institucionesDeSalud.getTotalPages(),
                institucionesDeSalud.isFirst(),
                institucionesDeSalud.isLast());

    }

    public Object buscarUnaInstitucionDeSalud(String nombre) {

        Optional<InstitucionDeSalud> institucionDeSalud = institucionDeSaludRepository.buscarInstitucionDeSalud(nombre);

        if (institucionDeSalud.isEmpty()) {
            throw new NullPointerException("Institución no encontrada");
        }

        InstitucionDeSaludResponse institucionDeSaludResponse = new InstitucionDeSaludResponse();
        institucionDeSaludResponse.setNombre(institucionDeSalud.get().getNombre());
        institucionDeSaludResponse.setDireccion(institucionDeSalud.get().getDireccion());
        institucionDeSaludResponse.setEmailContacto(institucionDeSalud.get().getEmailContacto());
        return institucionDeSaludResponse;

    }

}
