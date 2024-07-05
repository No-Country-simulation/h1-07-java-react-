package io.justina.justinaio.util;

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

    public static MedicoRequest toMedicoRequest(Medico medico) {
        List<Integer> financiadorIds = medico.getFinanciadores() != null ?
                medico.getFinanciadores().stream().map(Financiador::getIdPrepagaObraSocial).collect(Collectors.toList()) : null;

        return MedicoRequest.builder()
                .nombre(medico.getNombre())
                .apellido(medico.getApellido())
                .telefono(medico.getTelefono())
                .provincia(medico.getProvincia())
                .localidad(medico.getLocalidad())
                .licencia(medico.getLicencia())
                .especialidad(medico.getEspecialidad().getIdEspecialidad())
                .financiadores(financiadorIds)
                .build();
    }
    public static Paciente toPaciente(PacienteRequest pacienteRequest, TipoDocumento tipoDocumento) {
        return Paciente.builder()
                .nombre(pacienteRequest.getNombre())
                .apellido(pacienteRequest.getApellido())
                .tipoDocumento(tipoDocumento)
                .numeroDocumento(pacienteRequest.getNumeroDocumento())
                .fechaNacimiento(pacienteRequest.getFechaNacimiento())
                .genero(Genero.values()[pacienteRequest.getGenero()])
                .factorSanguineo(FactorSanguineo.values()[pacienteRequest.getFactorSanguineo()])
                .build();
    }
}
