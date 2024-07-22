package io.justina.justinaio.controller;

import io.justina.justinaio.dto.CasoClinicoRequest;
import io.justina.justinaio.dto.CasoClinicoResponse;
import io.justina.justinaio.model.CasoClinico;
import io.justina.justinaio.services.HistoriaClinicaService;
import io.justina.justinaio.util.PageResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("historia-clinica")
@RequiredArgsConstructor
@Tag(name = "Historia Clinica")
public class HistoriaClinicaController {
    private final HistoriaClinicaService historiaClinicaService;

    @PostMapping("crear-caso")
    public ResponseEntity<?> CrearCaso(
            Authentication token,
            @RequestBody CasoClinicoRequest request
            ){
        historiaClinicaService.CrearCaso(token, request);
        return ResponseEntity.ok("Caso Clinico Creado");
    }
    @GetMapping("historia-clinica-por-id-paciente")
    public ResponseEntity<PageResponse<CasoClinicoResponse>> ObtenerHistoriaClinicaPorIdPaciente(
            Authentication token,
            @RequestParam Integer idPaciente,
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @RequestParam(name = "size", defaultValue = "10", required = false) int size
    ){
        return ResponseEntity.ok(historiaClinicaService.ObtenerHistoriaClinicaPorIdPaciente(idPaciente,token,page,size));
    }
}
