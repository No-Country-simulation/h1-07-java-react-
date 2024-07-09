package io.justina.justinaio.util;

import io.justina.justinaio.dto.MedicoRequest;
import io.justina.justinaio.dto.MedicoResponse;
import io.justina.justinaio.dto.PacienteResponse;
import io.justina.justinaio.model.*;

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
    public static MedicoResponse toMedicoResponse(Medico medico) {
        return MedicoResponse.builder()
                .idMedico(medico.getIdMedico())
                .nombre(medico.getNombre())
                .apellido(medico.getApellido())
                .telefono(medico.getTelefono())
                .provincia(medico.getProvincia())
                .localidad(medico.getLocalidad())
                .licencia(medico.getLicencia())
                .especialidad(medico.getEspecialidad().getNombre())
                .build();
    }

    public static PacienteResponse toPacienteResponse(Paciente paciente) {
        return PacienteResponse.builder()
                .idPaciente(paciente.getIdPaciente())
                .nombre(paciente.getNombre())
                .apellido(paciente.getApellido())
                .tipoDocumento(paciente.getTipoDocumento().getDescripcion())
                .numeroDocumento(paciente.getNumeroDocumento())
                .patologia(paciente.getPatologia().getNombre())
                .financiador(paciente.getFinanciador().getNombre())
                .tratamientos(paciente.getTratamientos().stream().map(Tratamiento::getNombre).collect(Collectors.toList()))
                .medicos(paciente.getMedicos().stream().map(Medico::getFullName).collect(Collectors.toList()))
                .entidades(paciente.getEntidades().stream().map(Entidad::getNombre).collect(Collectors.toList()))
                .build();
    }
}
