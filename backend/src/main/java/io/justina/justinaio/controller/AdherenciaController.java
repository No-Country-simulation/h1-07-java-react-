package io.justina.justinaio.controller;

import io.justina.justinaio.services.AdherenciaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/adherencia")
@RequiredArgsConstructor
public class AdherenciaController {
    private final AdherenciaService adherenciaService;

    @PostMapping("/confirmar")
    public ResponseEntity<Void> confirmarAdherencia(@RequestParam Integer idHorario) {
        adherenciaService.confirmarAdherencia(idHorario);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/no-tomar")
    public ResponseEntity<Void> noTomarMedicamento(@RequestParam Integer idHorario) {
        adherenciaService.noTomarMedicamento(idHorario);
        return ResponseEntity.ok().build();
    }
}
