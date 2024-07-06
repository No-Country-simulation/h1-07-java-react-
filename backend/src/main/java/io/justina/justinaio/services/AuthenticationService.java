package io.justina.justinaio.services;

import io.justina.justinaio.dto.AuthenticationRequest;
import io.justina.justinaio.dto.AuthenticationResponse;
import io.justina.justinaio.dto.RegistrationRequest;
import io.justina.justinaio.model.Usuario;
import io.justina.justinaio.model.enums.EmailTemplateName;
import io.justina.justinaio.repositories.RolRepository;
import io.justina.justinaio.repositories.UsuarioRepository;
import io.justina.justinaio.security.JwtService;
import io.justina.justinaio.security.Token;
import io.justina.justinaio.security.TokenRepository;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
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

    public void register(RegistrationRequest request) throws MessagingException {
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
        userRepository.save(user);
        emailService.sendValidationEmail(user);
    }

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

}
