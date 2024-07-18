package io.justina.justinaio.controller;

import io.justina.justinaio.dto.BajaRequest;
import io.justina.justinaio.dto.MedicoRequest;
import io.justina.justinaio.dto.MedicoResponse;
import io.justina.justinaio.dto.PasswordRequest;
import io.justina.justinaio.services.MedicoService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("medico")
@RequiredArgsConstructor
@Tag(name = "Medico")
public class MedicoController {
    private final MedicoService medicoService;

    @PostMapping("/crear-medico")
    public ResponseEntity<?> crearMedico(
            @RequestBody MedicoRequest medicoRequest,
            Authentication token
    ){
        medicoService.crearMedico(medicoRequest,token);
        return ResponseEntity.ok("El Médico " + medicoRequest.getNombre() + " ha sido creado con éxito!");
    }

    @PutMapping("/modificar-medico")
    public ResponseEntity<?> modificarMedico(
            @RequestBody MedicoRequest medicoRequest,
            Authentication token
    ){
        medicoService.modificarMedico(medicoRequest,token);
        return ResponseEntity.ok("El Médico " + medicoRequest.getNombre() + " ha sido modficado con éxito!");
    }

    @PutMapping("/modificar-contrasenia-medico")
    public ResponseEntity<?> modificarContraseniaMedico(
            @RequestBody PasswordRequest passwordRequest,
            Authentication token
    ){
        medicoService.modificarPassword(passwordRequest,token);
        return ResponseEntity.ok("La contraseña ha sido cambiada con éxito");
    }

    @PutMapping("/baja-medico")
    public ResponseEntity<?> bajaMedico(
            @RequestBody BajaRequest bajaRequest
    ){
        medicoService.bajaMedico(bajaRequest);
        return ResponseEntity.ok("La baja se ha realizado con éxito");
    }

    @GetMapping("/buscar-medico-id-paciente-conectado")
    public ResponseEntity<?> encontrarMedicoPorIdPaciente(
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @RequestParam(name = "size", defaultValue = "10", required = false) int size,
            Authentication token
    ){
        return ResponseEntity.ok(medicoService.encontrarMedicoPorIdPaciente(page, size, token));
    }

    @GetMapping("/buscar-medico-conectado")
    public ResponseEntity<MedicoResponse> buscarMedicoConectado(
            Authentication token
    ){
        return ResponseEntity.ok(medicoService.buscarMedicoConectado(token));
    }

}
