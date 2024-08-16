package io.justina.justinaio.controller;

import io.justina.justinaio.dto.*;
import io.justina.justinaio.services.TratamientoService;
import io.justina.justinaio.util.PageResponse;
import org.springframework.http.MediaType;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.mail.MessagingException;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("tratamiento")
@RequiredArgsConstructor
@Tag(name = "Tratamiento", description = "Crud de tratamientos")
public class TratamientoController {

    private final TratamientoService tratamientoService;
    @PostMapping("/crear-tratamiento-retorna-id-tratamiento")
    public ResponseEntity<?> crearTratamientoRetornaIdTratamiento(
            @RequestBody NuevoTratamientoRequest tratamientoRequest,
            Authentication token
    ) {
        return ResponseEntity.ok(tratamientoService.crearTratamiento(tratamientoRequest,token));
    }


    @PutMapping("/cargar-imagen-a-tratamiento-por-id")
    public ResponseEntity<?> cargarImagenATratamientoPorId(
            @RequestParam Integer idTratamiento,
            @RequestParam Integer idImagen
    ){
        tratamientoService.cargarImagenATratamientoPorId(idTratamiento, idImagen);
        return ResponseEntity.ok("La imagen ha sido cargada con ≠!");
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

    @GetMapping("listar-tratamientos-paciente-conectado")
    public ResponseEntity<PageResponse<TratamientoPacienteResponse>> listarTratamientosPacienteConectado(
            Authentication token,
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @RequestParam(name = "size", defaultValue = "10", required = false) int size
    ){
        return ResponseEntity.ok(tratamientoService.listarTratamientosPacienteConectado(token,page, size));
    }

   @GetMapping("buscar-tratamiento-id")
   public ResponseEntity<TratamientoResponse> buscarTratamientoPorId(
           Authentication token,
           @RequestParam Integer idTratamiento
   ){
       return ResponseEntity.ok(tratamientoService.buscarTratamientoPorId(token,idTratamiento));
   }


}
