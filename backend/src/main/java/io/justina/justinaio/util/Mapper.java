package io.justina.justinaio.util;

import io.justina.justinaio.dto.*;
import io.justina.justinaio.model.*;
import io.justina.justinaio.model.enums.FactorSanguineo;
import io.justina.justinaio.model.enums.Genero;

import java.util.List;
import java.util.stream.Collectors;

public class Mapper {

    public static Medico toMedico(MedicoRequest medicoRequest, Especialidad especialidad,
            List<Financiador> financiadores) {
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

    public static Financiador toFinanciador(FinanciadorRequest financiadorRequest) {
        return Financiador.builder()
                .nombre(financiadorRequest.getNombre())
                .descripcion(financiadorRequest.getDescripcion())
                .esActivo(true)
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
                .tratamientos(
                        paciente.getTratamientos().stream().map(Tratamiento::getIdTratamiento).collect(Collectors.toList()))
                .medicos(paciente.getMedicos().stream().map(Medico::getFullName).collect(Collectors.toList()))
                .entidades(paciente.getEntidades().stream().map(Entidad::getNombre).collect(Collectors.toList()))
                .build();
    }

    public static FinanciadorResponse toFinanciadorResponse(Financiador financiador) {
        return FinanciadorResponse.builder()
                .nombre(financiador.getNombre())
                .descripcion(financiador.getDescripcion())
                .build();
    }

    public static Medicamento toMedicamento(MedicamentoRequest medicamentoRequest) {
        return Medicamento.builder()
                .nombre(medicamentoRequest.getNombre())
                .esActivo(true)
                .build();
    }

    public static MedicamentoResponse toMedicamentoResponse(Medicamento medicamento) {
        return MedicamentoResponse.builder()
                .nombre(medicamento.getNombre())
                .descripcion(medicamento.getDescripcion())
                .build();
    }

    public static Laboratorio toLaboratorio(LaboratorioRequest laboratorioRequest) {
        return Laboratorio.builder()
                .nombre(laboratorioRequest.getNombre())
                .descripcion(laboratorioRequest.getDescripcion())
                .esActivo(true)
                .build();
    }

    public static LaboratorioResponse toLaboratorioResponse(Laboratorio laboratorio) {
        return LaboratorioResponse.builder()
                .nombre(laboratorio.getNombre())
                .descripcion(laboratorio.getDescripcion())
                .build();
    }

    public static TratamientoMedicoResponse toTratamientoMedicoResponse(Tratamiento tratamiento) {
        return TratamientoMedicoResponse.builder()
                .idTratamiento(tratamiento.getIdTratamiento())
                .nombrePatologia(tratamiento.getPatologia() != null ? tratamiento.getPatologia().getNombre() : null)
                .nombreMedicamento(tratamiento.getMedicamento() != null ? tratamiento.getMedicamento().getNombre() : null)
                .descripcion(tratamiento.getDescripcion())
                .dosisDiaria(tratamiento.getDosisDiaria())
                .fechaInicio(tratamiento.getFechaInicio())
                .fechaFin(tratamiento.getFechaFin())
                .estado(tratamiento.getEstado())
                .tipoTratamientoId(tratamiento.getTipoTratamiento().ordinal())
                .horarios(tratamiento.getHorarios().stream()
                        .map(Mapper::toHorarioTomaResponse)
                        .collect(Collectors.toList()))
                .build();
    }

    public static TratamientoPacienteResponse toTratamientoPacienteResponse(Tratamiento tratamiento) {
        return TratamientoPacienteResponse.builder()
                .idTratamiento(tratamiento.getIdTratamiento())
                .nombreMedico(tratamiento.getMedico() != null ? tratamiento.getMedico().getFullName() : null)
                .nombrePatologia(tratamiento.getPatologia() != null ? tratamiento.getPatologia().getNombre() : null)
                .nombreMedicamento(tratamiento.getMedicamento() != null ? tratamiento.getMedicamento().getNombre() : null)
                .descripcion(tratamiento.getDescripcion())
                .dosisDiaria(tratamiento.getDosisDiaria())
                .fechaInicio(tratamiento.getFechaInicio())
                .fechaFin(tratamiento.getFechaFin())
                .estado(tratamiento.getEstado())
                .tipoTratamientoId(tratamiento.getTipoTratamiento().ordinal())
                .horarios(tratamiento.getHorarios().stream()
                        .map(Mapper::toHorarioTomaResponse)
                        .collect(Collectors.toList()))
                .build();
    }
    public static TratamientoResponse toTratamientoResponse(Tratamiento tratamiento) {
        return TratamientoResponse.builder()
                .idTratamiento(tratamiento.getIdTratamiento())
                .nombrePaciente(tratamiento.getPaciente() != null ? tratamiento.getPaciente().getFullName() : null)
                .nombreMedico(tratamiento.getMedico() != null ? tratamiento.getMedico().getFullName() : null)
                .nombrePatologia(tratamiento.getPatologia() != null ? tratamiento.getPatologia().getNombre() : null)
                .nombreMedicamento(tratamiento.getMedicamento() != null ? tratamiento.getMedicamento().getNombre() : null)
                .descripcion(tratamiento.getDescripcion())
                .dosisDiaria(tratamiento.getDosisDiaria())
                .fechaInicio(tratamiento.getFechaInicio())
                .fechaFin(tratamiento.getFechaFin())
                .estado(tratamiento.getEstado())
                .tipoTratamientoId(tratamiento.getTipoTratamiento().ordinal())
                .horarios(tratamiento.getHorarios().stream()
                        .map(Mapper::toHorarioTomaResponse)
                        .collect(Collectors.toList()))
                .build();
    }

    public static HorarioTomaResponse toHorarioTomaResponse(HorarioToma horarioToma) {
        return HorarioTomaResponse.builder()
                .fecha(horarioToma.getFecha())
                .hora(horarioToma.getHora())
                .estado(horarioToma.getEstadoHorario())
                .build();
    }

    public static Farmacia toFarmacia(FarmaciaRequest farmaciaRequest) {
        return Farmacia.builder()
                .nombre(farmaciaRequest.getNombre())
                .direccion(farmaciaRequest.getDireccion())
                .esActivo(true)
                .build();
    }

    public static FarmaciaResponse toFarmaciaResponse(Farmacia farmacia) {
        return FarmaciaResponse.builder()
                .nombre(farmacia.getNombre())
                .direccion(farmacia.getDireccion())
                .build();
    }

    public static CasoClinicoResponse toCasoClinicoResponse(CasoClinico casoClinico) {
        return CasoClinicoResponse.builder()
                .fecha(casoClinico.getFecha())
                .titulo(casoClinico.getTitulo())
                .descripcion(casoClinico.getDescripcion())
                .build();
    }

    public static Donante toDonante(DonanteRequest donanteRequest, Medico medico, Paciente paciente) {
        return Donante.builder()
                .paciente(paciente)
                .medico(medico)
                .nombre(donanteRequest.getNombre())
                .apellido(donanteRequest.getApellido())
                .altura(donanteRequest.getAltura())
                .peso(donanteRequest.getPeso())
                .genero(Genero.values()[donanteRequest.getGenero()])
                .factorSanguineo(FactorSanguineo.values()[ donanteRequest.getFactorSanguineo()])
                .fechaNacimiento(donanteRequest.getFechaNacimiento())
                .Localidad(donanteRequest.getLocalidad())
                .provincia(donanteRequest.getProvincia())
                .build();
    }

    public static DonanteResponse toDonanteResponse(Donante donante) {
        return DonanteResponse.builder()
                .idMedico(donante.getMedico().getIdMedico())
                .altura(donante.getAltura())
                .peso(donante.getPeso())
                .genero(donante.getGenero().ordinal())
                .factorSanguineo(donante.getFactorSanguineo().ordinal())
                .fechaNacimiento(donante.getFechaNacimiento())
                .Localidad(donante.getLocalidad())
                .provincia(donante.getProvincia())
                .build();
    }

    public static MedicoDonanteRequest toMedicoDonanteRequest(Medico medico) {
        return MedicoDonanteRequest.builder()
                .apellido(medico.getApellido())
                .licencia(medico.getLicencia())
                .localidad(medico.getLocalidad())
                .nombre(medico.getNombre())
                .provincia(medico.getProvincia())
                .telefono(medico.getTelefono())
                .build();
    }
}
