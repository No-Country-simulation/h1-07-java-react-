package io.justina.justinaio.services;

import io.justina.justinaio.dto.AuthenticationRequest;
import io.justina.justinaio.dto.AuthenticationResponse;
import io.justina.justinaio.dto.MedicoUsuarioRequest;
import io.justina.justinaio.dto.RegistrationRequest;
import io.justina.justinaio.handler.OperationNotPermittedException;
import io.justina.justinaio.model.Medico;
import io.justina.justinaio.model.Usuario;
import io.justina.justinaio.model.enums.EmailTemplateName;
import io.justina.justinaio.repositories.*;
import io.justina.justinaio.security.JwtService;
import io.justina.justinaio.security.Token;
import io.justina.justinaio.security.TokenRepository;
import jakarta.mail.MessagingException;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UsuarioRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final RolRepository roleRepository;
    private final EmailService emailService;
    private final TokenRepository tokenRepository;
    private final EspecialidadRepository especialidadRepository;
    private final FinanciadorRepository financiadorRepository;
    private final MedicoRepository medicoRepository;

    /*public void register(RegistrationRequest request) throws MessagingException {
        var userRole = roleRepository.findByNombre("ROLE_MEDICO")
                // todo - better exception handling
                .orElseThrow(() -> new IllegalStateException("ROLE MEDICO no fue inicializado"));
        var user = Usuario.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .accountLocked(false)
                .enabled(false)
                .roles(List.of(userRole))
                .build();
        try {
            userRepository.save(user);
        } catch (DataIntegrityViolationException e) {
            throw new OperationNotPermittedException("El email ya ha sido registrado.");
        }
        emailService.sendValidationEmail(user);
    }*/

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        var auth = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        var claims = new HashMap<String, Object>();
        var user = ((Usuario) auth.getPrincipal());
        claims.put("fullName", user.getName());

        var jwtToken = jwtService.generateToken(claims, (Usuario) auth.getPrincipal());
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    @Transactional
    public void activateAccount(String token) throws MessagingException {
        Token savedToken = tokenRepository.findByToken(token)
                // todo exception has to be defined
                .orElseThrow(() -> new RuntimeException("Token invalido"));
        if (LocalDateTime.now().isAfter(savedToken.getExpiresAt())) {
            emailService.sendValidationEmail(savedToken.getUser());
            throw new RuntimeException("Token expirado, se envió uno nuevo al correo.");
        }

        var user = userRepository.findById(savedToken.getUser().getId())
                .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado"));
        user.setEnabled(true);
        userRepository.save(user);

        savedToken.setValidatedAt(LocalDateTime.now());
        tokenRepository.save(savedToken);
    }

    @Transactional
    public void registrarMedico(MedicoUsuarioRequest request) throws MessagingException {
        var userRole = roleRepository.findByNombre("ROLE_MEDICO")
                .orElseThrow(() -> new IllegalStateException("ROLE MEDICO no fue inicializado"));

        var user = Usuario.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .accountLocked(false)
                .enabled(false)
                .roles(List.of(userRole))
                .build();

        try {
            userRepository.save(user);
        } catch (DataIntegrityViolationException e) {
            throw new OperationNotPermittedException("El email ya ha sido registrado.");
        }

        var especialidad = especialidadRepository.findById(request.getEspecialidadId())
                .orElseThrow(() -> new EntityNotFoundException("Especialidad no encontrada"));

        var financiadores = financiadorRepository.findAllById(request.getFinanciadoresIds());
        if (financiadores.size() != request.getFinanciadoresIds().size()) {
            throw new EntityNotFoundException("Uno o más financiadores no encontrados");
        }

        var medico = Medico.builder()
                .idMedico(user.getId())
                .nombre(request.getNombre())
                .apellido(request.getApellido())
                .telefono(request.getTelefono())
                .provincia(request.getProvincia())
                .localidad(request.getLocalidad())
                .licencia(request.getLicencia())
                .especialidad(especialidad)
                .financiadores(financiadores)
                .build();


        medicoRepository.save(medico);
        emailService.sendValidationEmail(user);
    }
}
