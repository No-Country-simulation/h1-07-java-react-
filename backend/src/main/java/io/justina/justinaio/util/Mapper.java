package io.justina.justinaio.util;

import io.justina.justinaio.dto.FinanciadorRequest;
import io.justina.justinaio.dto.MedicoRequest;
import io.justina.justinaio.dto.PacienteRequest;
import io.justina.justinaio.model.*;
import io.justina.justinaio.model.enums.FactorSanguineo;
import io.justina.justinaio.model.enums.Genero;

import java.util.List;
import java.util.stream.Collectors;

public class Mapper {

    public static Medico toMedico(MedicoRequest medicoRequest, Especialidad especialidad, List<Financiador> financiadores) {
        return Medico.builder()
                .nombre(medicoRequest.getNombre())
                .apellido(medicoRequest.getApellido())
                .telefono(medicoRequest.getTelefono())
                .provincia(medicoRequest.getProvincia())
                .localidad(medicoRequest.getLocalidad())
                .licencia(medicoRequest.getLicencia())
                .especialidad(especialidad)
                .financiadores(financiadores)
                .build();
    }

    public static Financiador toFinanciador(FinanciadorRequest financiadorRequest) {
        return Financiador.builder()
                .nombre(financiadorRequest.getNombre())
                .descripcion(financiadorRequest.getDescripcion())
                .esActivo(true)
                .build();
    }
}
