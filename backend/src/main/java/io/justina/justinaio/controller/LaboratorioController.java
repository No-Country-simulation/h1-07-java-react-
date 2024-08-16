package io.justina.justinaio.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.justina.justinaio.dto.LaboratorioRequest;
import io.justina.justinaio.dto.LaboratorioResponse;
import io.justina.justinaio.services.LaboratorioService;
import io.justina.justinaio.dto.BajaPorNombreRequest;
import io.justina.justinaio.dto.LaboratorioModificacionRequest;
import io.justina.justinaio.util.PageResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("laboratorio")
@RequiredArgsConstructor
@Tag(name = "Laboratorio")
public class LaboratorioController {

    private final LaboratorioService laboratorioService;

    @PostMapping("/crear-laboratorio")
    public ResponseEntity<?> crearLaboratorio(@RequestBody LaboratorioRequest laboratorioRequest) {

        laboratorioService.crearLaboratorio(laboratorioRequest);

        return ResponseEntity.ok("El laboratorio " + laboratorioRequest.getNombre() + " ha sido creado con éxito!");

    }

    @PutMapping("/modificar-laboratorio")
    public ResponseEntity<?> modificarLaboratorio(
            @RequestBody LaboratorioModificacionRequest laboratorioRequest) {

        laboratorioService.modificarLaboratorio(laboratorioRequest);

        return ResponseEntity.ok("El laboratorio " + laboratorioRequest.getNombre() + " ha sido modificado con éxito!");

    }

    @PutMapping("/baja-laboratorio")
    public ResponseEntity<?> bajaLaboratorio(
            @RequestBody BajaPorNombreRequest bajaLaboratorioRequest) {
        laboratorioService.bajaLaboratorio(bajaLaboratorioRequest);
        return ResponseEntity.ok("La baja se ha realizado con éxito!");
    }

    @PutMapping("/baja-laboratorio-por-id")
    public ResponseEntity<?> bajaLaboratorioPorId(
            @RequestParam Integer idLaboratorio) {
        laboratorioService.bajaLaboratorioPorId(idLaboratorio);
        return ResponseEntity.ok("La baja se ha realizado con éxito!");
    }

    @GetMapping("/buscar-laboratorios-activos")
    public PageResponse<LaboratorioResponse> buscarLaboratorios(
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @RequestParam(name = "size", defaultValue = "10", required = false) int size) {
        return laboratorioService.buscarLaboratorios(page, size);
    }

    @GetMapping("/buscar-laboratorio-por-nombre")
    public ResponseEntity<?> buscarUnLaboratorio(
            @RequestParam String nombre) {
        return ResponseEntity.ok(laboratorioService.buscarUnLaboratorio(nombre));
    }
}