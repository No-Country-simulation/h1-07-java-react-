package io.justina.justinaio.services;

import io.justina.justinaio.dto.MedicoRequest;
import io.justina.justinaio.dto.PacienteRequest;
import io.justina.justinaio.dto.PasswordRequest;
import io.justina.justinaio.model.*;
import io.justina.justinaio.model.enums.FactorSanguineo;
import io.justina.justinaio.model.enums.Genero;
import io.justina.justinaio.repositories.MedicoRepository;
import io.justina.justinaio.repositories.PacienteRepository;
import io.justina.justinaio.repositories.TipoDocumentoRepository;
import io.justina.justinaio.repositories.UsuarioRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.swing.plaf.basic.BasicBorders;
import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class PacienteService {

    private  final PacienteRepository pacienteRepository;
    private final UsuarioRepository usuarioRepository;
    private final TipoDocumentoRepository tipoDocumentoRepository;
    private final MedicoRepository medicoRepository;

    @Transactional
    public void crearPaciente(PacienteRequest pacienteRequest, Authentication token) {
        if(pacienteRequest.getEmail().isEmpty() || pacienteRequest.getPassword().isEmpty()){
            throw new NullPointerException("Se necesitan mail y password de manera obligatoria");
        }

        List<Rol> roles = new ArrayList<>();
        roles.add(Rol.builder().nombre("ROLE_PACIENTE").build());
        Usuario usuario = Usuario.builder()
                .email(pacienteRequest.getEmail())
                .password(pacienteRequest.getPassword())
                .roles(roles)
                .build();

        usuarioRepository.save(usuario);

        TipoDocumento tipoDocumento = tipoDocumentoRepository.findById(pacienteRequest.getIdTipoDocumento())
                .orElseThrow(() -> new NullPointerException("Tipo de documento no encontrado"));

        Paciente paciente = Paciente.builder()
                .idPaciente(usuario.getId())
                .fechaNacimiento(pacienteRequest.getFechaNacimiento())
                .apellido(pacienteRequest.getApellido())
                .nombre(pacienteRequest.getNombre())
                .numeroDocumento(pacienteRequest.getNumeroDocumento())
                .tipoDocumento(tipoDocumento)
                .genero(Genero.values()[pacienteRequest.getGenero()])
                .factorSanguineo(FactorSanguineo.values()[pacienteRequest.getFactorSanguineo()])
                .build();
        pacienteRepository.save(paciente);

        Usuario userMedico = (Usuario) token.getPrincipal();
        Medico medico = medicoRepository.findById(userMedico.getId())
                .orElseThrow(() -> new NullPointerException("No se encuentra logueado el médico"));

        (medico.getPacientes()).add(paciente);
        medicoRepository.save(medico);

    }

    public void modificarPaciente(PacienteRequest pacienteRequest, Authentication token) {
    }

    public void modificarPassword(PasswordRequest passwordRequest, Authentication token) {
    }
}
