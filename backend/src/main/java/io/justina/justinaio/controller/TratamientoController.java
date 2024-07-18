package io.justina.justinaio.controller;

import io.justina.justinaio.dto.ModificarTratamientoRequest;
import io.justina.justinaio.dto.NuevoTratamientoRequest;
import io.justina.justinaio.dto.PacienteRequest;
import io.justina.justinaio.dto.TratamientoMedicoResponse;
import io.justina.justinaio.services.TratamientoService;
import io.justina.justinaio.util.PageResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.mail.MessagingException;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @PutMapping("/modificar-tratamiento")
    public ResponseEntity<?> modificarTratamiento(
            @RequestBody ModificarTratamientoRequest tratamientoRequest,
            Authentication token
    ){
        tratamientoService.modificarTratamiento(tratamientoRequest,token);
        return ResponseEntity.ok("El tratamiento ha sido modificado con válido!");
    }

    @PutMapping("/baja-tratamiento")
    public ResponseEntity<?> bajaTratamiento(
            @RequestParam Integer idTratamiento
    ){
        tratamientoService.bajaTratamiento(idTratamiento);
        return ResponseEntity.ok("El tratamiento n " + idTratamiento + " ha sido dado de baja con ≠!");
    }

    @GetMapping("listar-tratamientos-paciente-medico-conectado")
    public ResponseEntity<PageResponse<TratamientoMedicoResponse>> listarTratamientosPacienteMedicoConectado(
            Authentication token,
            @RequestParam Integer idPaciente,
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @RequestParam(name = "size", defaultValue = "10", required = false) int size
    ){
        return ResponseEntity.ok(tratamientoService.listarTratamientosPacienteMedicoConectado(token, idPaciente, page, size));
    }
}
