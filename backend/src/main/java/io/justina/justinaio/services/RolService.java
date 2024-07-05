package io.justina.justinaio.services;

import io.justina.justinaio.dto.RolRequest;
import io.justina.justinaio.handler.OperationNotPermittedException;
import io.justina.justinaio.model.Rol;
import io.justina.justinaio.repositories.RolRepository;
import jakarta.validation.constraints.Null;
import lombok.AllArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RolService {
    private final RolRepository repository;


    public void crearRol(RolRequest rolRequest) {
        if(rolRequest == null){
            throw new NullPointerException("Rol no puede ser nulo");
        }
        Rol rol = Rol.builder()
                .nombre("ROLE_" + rolRequest.getNombre().toUpperCase())
                .build();

        try {
            repository.save(rol);
        } catch (DataIntegrityViolationException ex) {
            throw new OperationNotPermittedException("Ya existe un rol con el nombre '" + rolRequest.getNombre() + "'");
        }
    }

    public void modificarRol(RolRequest rolRequest, Integer idRol) {
        if(rolRequest == null){
            throw new NullPointerException("Rol no puede ser nulo");
        }
        Rol rol = repository.findById(idRol)
                .orElseThrow(() -> new NullPointerException("No se encontró un rol con el ID proporcionado"));

        rol.setNombre("ROLE_" + rolRequest.getNombre().toUpperCase());

        try {
            repository.save(rol);
        } catch (DataIntegrityViolationException ex) {
            throw new OperationNotPermittedException("Ya existe un rol con el nombre '" + rolRequest.getNombre() + "'");
        }
    }
}
