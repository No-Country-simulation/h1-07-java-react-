package io.justina.justinaio.services;

import io.justina.justinaio.dto.MedicoRequest;
import io.justina.justinaio.dto.PacienteRequest;
import io.justina.justinaio.dto.PasswordRequest;
import io.justina.justinaio.model.*;
import io.justina.justinaio.model.enums.FactorSanguineo;
import io.justina.justinaio.model.enums.Genero;
import io.justina.justinaio.repositories.*;
import lombok.AllArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.swing.plaf.basic.BasicBorders;
import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class PacienteService {

    private  final PacienteRepository pacienteRepository;

    private final PasswordEncoder passwordEncoder;
    private final UsuarioRepository usuarioRepository;

    private final MedicoRepository medicoRepository;
    private PatologiaRepository patologiaRepository;

    private  TipoDocumentoRepository tipoDocumentoRepository;

    private final EntidadRepository entidadRepository;
    private final FinanciadorRepository financiadorRepository;
    private final TratamientoRepository tratamientoRepository;

    @Transactional
    public void crearPaciente(PacienteRequest pacienteRequest, Authentication token) {
        if(pacienteRequest.getEmail().isEmpty() || pacienteRequest.getPassword().isEmpty()){
            throw new NullPointerException("Se necesitan mail y password de manera obligatoria");
        }

        //Crea el usuario del paciente con mail y password.

        List<Rol> roles = new ArrayList<>();
        roles.add(Rol.builder().id(1).build());
        Usuario usuario = Usuario.builder()
                .email(pacienteRequest.getEmail())
                .password(passwordEncoder.encode(pacienteRequest.getPassword()))
                .roles(roles)
                .build();

        Usuario savedUsuario = usuarioRepository.save(usuario);

        // Agrega al medico que registra a la lista de medicos.
        Usuario userMedico = (Usuario) token.getPrincipal();
        Medico medico = medicoRepository.findById(userMedico.getId())
                .orElseThrow(() -> new NullPointerException("No se encuentra logueado el médico"));
        if (pacienteRequest.getMedicosId() == null) {
            pacienteRequest.setMedicosId(new ArrayList<>());
        }
        pacienteRequest.getMedicosId().add(userMedico.getId());

        Paciente paciente = Paciente.builder()
                .idPaciente(savedUsuario.getId())
                .nombre(pacienteRequest.getNombre())
                .apellido(pacienteRequest.getApellido())
                .tipoDocumento(getTipoDocumentoById(pacienteRequest.getTipoDocumentoId()))
                .numeroDocumento(pacienteRequest.getNumeroDocumento())
                .fechaNacimiento(pacienteRequest.getFechaNacimiento())
                .genero(Genero.values()[pacienteRequest.getGenero()])
                .factorSanguineo(FactorSanguineo.values()[pacienteRequest.getFactorSanguineo()])
                .patologia(getPatologiaById(pacienteRequest.getPatologiaId()))
                .medicos(getMedicosByIds(pacienteRequest.getMedicosId()))
                .tratamientos(getTratamientosByIds(pacienteRequest.getTratamientosId()))
                .entidades(getEntidadesByIds(pacienteRequest.getEntidadesId()))
                .financiador(getFinanciadorById(pacienteRequest.getFinanciadorId()))
                .build();

        pacienteRepository.save(paciente);

    }

    public void modificarPaciente(PacienteRequest pacienteRequest, Authentication token) {
    }

    public void modificarPassword(PasswordRequest passwordRequest, Authentication token) {
    }




    // Funciones con validaciones
    public TipoDocumento getTipoDocumentoById(Integer id) {
        return tipoDocumentoRepository.findById(id).orElseThrow(() ->
                new NullPointerException("Tipo de documento no encontrado"));
    }

    public Patologia getPatologiaById(Integer id) {
        return patologiaRepository.findById(id).orElseThrow(() ->
                new NullPointerException("Debe especificarse la patologia del paciente"));
    }

    public List<Medico> getMedicosByIds(List<Integer> ids) {
        return medicoRepository.findAllById(ids);
    }

    public List<Tratamiento> getTratamientosByIds(List<Integer> ids) {
        return tratamientoRepository.findAllById(ids);
    }

    public List<Entidad> getEntidadesByIds(List<Integer> ids) {
        return entidadRepository.findAllById(ids);
    }

    public Financiador getFinanciadorById(Integer id) {
        return financiadorRepository.findById(id).orElseThrow(() ->
                new NullPointerException("Falta el prestador"));
    }
}

