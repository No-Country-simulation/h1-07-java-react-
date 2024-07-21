package io.justina.justinaio.services;

import java.util.Optional;

import io.justina.justinaio.dto.BajaPorNombreRequest;
import io.justina.justinaio.dto.FarmaciaResponse;
import io.justina.justinaio.dto.InstitucionDeSaludModificacionRequest;
import io.justina.justinaio.dto.InstitucionDeSaludRequest;
import io.justina.justinaio.dto.InstitucionDeSaludResponse;
import io.justina.justinaio.model.Farmacia;
import io.justina.justinaio.util.PageResponse;

public class InstitucionDeSaludService {

    public void crearInstitucionDeSalud(InstitucionDeSaludRequest institucionDeSaludRequest) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'crearInstitucionDeSalud'");
    }

    public void modificarInstitucionDeSalud(InstitucionDeSaludModificacionRequest institucionDeSaludRequest) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'modificarInstitucionDeSalud'");
    }

    public void bajaInstitucionDeSalud(BajaPorNombreRequest bajaInstitucionDeSaludRequest) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'bajaInstitucionDeSalud'");
    }

    public PageResponse<InstitucionDeSaludResponse> buscarInstitucionesDeSalud(int page, int size) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'buscarInstitucionesDeSalud'");
    }

    public Object buscarUnaInstitucionDeSalud(String nombre) {

        Optional<InstitucionDeSalud> institucionDeSalud = institucionDeSaludRepository.buscarInstitucionDeSalud(nombre);

        if (institucionDeSalud.isEmpty()) {
            throw new NullPointerException("Institución no encontrada");
        }

        InstitucionDeSaludResponse institucionDeSaludResponse = new InstitucionDeSaludResponse();
        institucionDeSaludResponse.setNombre(institucionDeSalud.get().getNombre());
        institucionDeSaludResponse.setDireccion(institucionDeSalud.get().getDireccion());
        return institucionDeSaludResponse;

    }

}
