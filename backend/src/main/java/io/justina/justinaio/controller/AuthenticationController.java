package io.justina.justinaio.controller;

import io.justina.justinaio.dto.AuthenticationRequest;
import io.justina.justinaio.dto.AuthenticationResponse;
import io.justina.justinaio.dto.RegistrationRequest;
import io.justina.justinaio.services.AuthenticationService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.mail.MessagingException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("auth")
@RequiredArgsConstructor
@Tag(name = "Authentication")
public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping("/registrar")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public ResponseEntity<?> registrar(
            @RequestBody @Valid RegistrationRequest request
    ) throws MessagingException {
        service.register(request);
        return ResponseEntity.accepted().build();
    }

    @PostMapping("/autenticar")
    public ResponseEntity<AuthenticationResponse> autenticar(
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(service.authenticate(request));
    }
    @GetMapping("/activar-cuenta")
    public void confirmarMail(
            @RequestParam String token
    ) throws MessagingException {
        service.activateAccount(token);
    }
}
