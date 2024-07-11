package io.justina.justinaio.controller;

import java.util.ArrayList;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.justina.justinaio.dto.BajaFinanciadorRequest;
import io.justina.justinaio.dto.FinanciadorModificacionRequest;
import io.justina.justinaio.dto.FinanciadorRequest;
import io.justina.justinaio.dto.FinanciadorResponse;
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

    @PutMapping("/modificar-financiador")
    public ResponseEntity<?> modificarMedico(
            @RequestBody FinanciadorModificacionRequest financiadorRequest) {
        financiadorService.modificarFinanciador(financiadorRequest);
        return ResponseEntity.ok("El Financiador " + financiadorRequest.getNombre() + " ha sido modficado con éxito!");
    }

    @PutMapping("/baja-financiador")
    public ResponseEntity<?> bajaFinanciador(
            @RequestBody BajaFinanciadorRequest bajaFinanciadorRequest) {
        financiadorService.bajaFinanciador(bajaFinanciadorRequest);
        return ResponseEntity.ok("La baja se ha realizado con éxito");
    }

    @GetMapping("/ver-financiadores")
    public ArrayList<FinanciadorResponse> buscarFinanciadores(
            @RequestParam(defaultValue = "0") int page) {
        return financiadorService.buscarFinanciadores(page);
    }

    @GetMapping("/ver-financiador")
    public ResponseEntity<?> buscarUnFinanciador(
        @RequestParam String nombre) {
            return ResponseEntity.ok(financiadorService.buscarUnFinanciador(nombre));
        }
    

}
