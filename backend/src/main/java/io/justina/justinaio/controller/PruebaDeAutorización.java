package io.justina.justinaio.controller;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("prueba")
@RequiredArgsConstructor
@Tag(name = "Prueba")
public class PruebaDeAutorización {

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/usuario")
    public String probarRolUsuario(){
        return "Exito";
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping("/admin")
    public ResponseEntity<String> probarRolAdmin() {
        return ResponseEntity.ok("Acceso de Admin concedido");
    }
}

