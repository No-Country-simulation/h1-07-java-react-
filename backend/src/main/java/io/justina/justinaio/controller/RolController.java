package io.justina.justinaio.controller;

import io.justina.justinaio.dto.RolRequest;
import io.justina.justinaio.services.RolService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("rol")
@RequiredArgsConstructor
@Tag(name = "Rol")
public class RolController {

    private  final RolService rolService;

    @PostMapping("/crear-rol")
    public ResponseEntity<?> crearRol(
        @RequestBody RolRequest rolRequest
    ){
        rolService.crearRol(rolRequest);
        return ResponseEntity.ok("El rol " + rolRequest.getNombre() + " ha sido creado con éxito!");
    }

    @PutMapping("/modificar-rol")
    public ResponseEntity<?> modificarRol(
            @RequestBody RolRequest rolRequest,
            @RequestParam("idRol") Integer idRol) {
        rolService.modificarRol(rolRequest, idRol);
        return ResponseEntity.ok("El rol " + rolRequest.getNombre() + " ha sido modificado con éxito!");
    }

}
