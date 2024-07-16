package io.justina.justinaio.controller;

import io.justina.justinaio.dto.NuevoTratamientoRequest;
import io.justina.justinaio.dto.PacienteRequest;
import io.justina.justinaio.services.TratamientoService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("tratamiento")
@RequiredArgsConstructor
@Tag(name = "Tratamiento", description = "Crud de tratamientos")
public class TratamientoController {

    private final TratamientoService tratamientoService;
    @PostMapping("/crear-tratamiento")
    public ResponseEntity<?> crearTratamiento(
            @RequestBody NuevoTratamientoRequest tratamientoRequest,
            Authentication token
    ) {
        tratamientoService.crearTratamiento(tratamientoRequest,token);
        return ResponseEntity.ok("El tratamiento ha sido creado con éxito!");
    }
}
