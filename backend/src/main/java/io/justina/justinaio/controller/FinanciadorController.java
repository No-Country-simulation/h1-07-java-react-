package io.justina.justinaio.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import io.justina.justinaio.dto.FinanciadorRequest;
import io.justina.justinaio.services.FinanciadorService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("financiador")
@RequiredArgsConstructor
@Tag(name = "Financiador")
public class FinanciadorController {
    private final FinanciadorService financiadorService;

    @PostMapping("/crear-financiador")
    public ResponseEntity<?> crearFinanciador(
            @RequestBody FinanciadorRequest financiadorRequest) {
        financiadorService.crearFinanciador(financiadorRequest);
        return ResponseEntity.ok("El Financiador " + financiadorRequest.getNombre() + " ha sido creado con éxito!");
    }
}
