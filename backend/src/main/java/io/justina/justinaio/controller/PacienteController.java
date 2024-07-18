package io.justina.justinaio.controller;

import io.justina.justinaio.dto.*;
import io.justina.justinaio.repositories.PacienteRepository;
import io.justina.justinaio.services.PacienteService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("paciente")
@RequiredArgsConstructor
@Tag(name = "Paciente")
public class PacienteController {
    private final PacienteService pacienteService;

    @PostMapping("/crear-paciente")
    public ResponseEntity<?> crearPaciente(
            @RequestBody PacienteRequest pacienteRequest,
            Authentication token
    ) throws MessagingException {
        pacienteService.crearPaciente(pacienteRequest,token);
        return ResponseEntity.ok("El paciente " + pacienteRequest.getNombre() + " ha sido creado con éxito!");
    }

    @PutMapping("/modificar-paciente")
    public ResponseEntity<?> modificarPaciente(
            @RequestBody PacienteRequest pacienteRequest,
            Authentication token
    ){
        pacienteService.modificarPaciente(pacienteRequest,token);
        return ResponseEntity.ok("El Paciente " + pacienteRequest.getNombre() + " ha sido modficado con éxito!");
    }

    @PutMapping("/modificar-contrasenia-paciente")
    public ResponseEntity<?> modificarContrasenia(
            @RequestBody PasswordPacienteRequest passwordRequest,
            Authentication token
    ){
        pacienteService.modificarPassword(passwordRequest,token);
        return ResponseEntity.ok("La contraseña ha sido cambiada con éxito");
    }

    @PutMapping("/baja-paciente")
    public ResponseEntity<?> bajaPaciente(
            @RequestBody BajaRequest bajaRequest
    ){
        pacienteService.bajaPaciente(bajaRequest);
        return ResponseEntity.ok("La baja se ha realizado con éxito");
    }

    @GetMapping("/buscar-pacientes-id-medico-conectado")
    public ResponseEntity<?> encontrarPacientesDeMedico(
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @RequestParam(name = "size", defaultValue = "10", required = false) int size,
            Authentication token
    ){
        return ResponseEntity.ok(pacienteService.encontrarPacientesDeMedico(page, size, token));
    }
    @GetMapping("/buscar-paciente-conectado")
    public ResponseEntity<PacienteResponse> buscarPacienteConectado(
            Authentication token
    ){
        return ResponseEntity.ok(pacienteService.buscarPacienteConectado(token));
    }
}
