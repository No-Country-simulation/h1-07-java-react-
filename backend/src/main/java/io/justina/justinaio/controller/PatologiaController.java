package io.justina.justinaio.controller;

import io.justina.justinaio.dto.PatologiaRequest;
import io.justina.justinaio.dto.PatologiaResponse;
import io.justina.justinaio.services.PatologiaService;
import io.justina.justinaio.util.PageResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("patologias")
@RequiredArgsConstructor
@Tag(name = "Patologias")
public class PatologiaController {
    private final PatologiaService patologiaService;

    @PostMapping("crear-patologia")
    public ResponseEntity<?> crearPatologia(
            PatologiaRequest patologiaRequest
    ) {
        patologiaService.crearPatologia(patologiaRequest);
        return ResponseEntity.ok("Patologias Creadas");
    }

    @GetMapping("listar-patologias")
    public ResponseEntity<PageResponse<PatologiaResponse>> listarPatologias(
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @RequestParam(name = "size", defaultValue = "10", required = false) int size
    ) {
        return ResponseEntity.ok(patologiaService.listarPatologias(page, size));
    }

    @GetMapping("buscar-patologia-por-id")
    public ResponseEntity<PatologiaResponse> encontrarPatologiaPorId(
            @RequestParam Integer idPatologia
    ) {
        return ResponseEntity.ok(patologiaService.encontrarPatologiaPorId(idPatologia));
    }
    @PutMapping("modificar-patologia")
    public ResponseEntity<?> modificarPatologia(
            @RequestBody PatologiaRequest patologiaRequest,
            @RequestParam Integer idPatologia
    ) {
        patologiaService.modificarPatologia(patologiaRequest, idPatologia);
        return ResponseEntity.ok("Patologias Modificadas");
    }

    @PutMapping("baja-patologia")
    public ResponseEntity<?> bajaPatologia(
            @RequestParam Integer idPatologia
    ) {
        patologiaService.bajaPatologia(idPatologia);
        return ResponseEntity.ok("Patologias Dadas de baja");
    }
}
