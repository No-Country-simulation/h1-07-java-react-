package io.justina.justinaio.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.justina.justinaio.dto.BajaPorNombreRequest;
import io.justina.justinaio.dto.FarmaciaModificacionRequest;
import io.justina.justinaio.dto.FarmaciaRequest;
import io.justina.justinaio.dto.FarmaciaResponse;
import io.justina.justinaio.services.FarmaciaService;
import io.justina.justinaio.util.PageResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("farmacia")
@RequiredArgsConstructor
@Tag(name = "Farmacia")
public class FarmaciaController {

    private final FarmaciaService farmaciaService;

    @PostMapping("/crear-farmacia")
    public ResponseEntity<?> crearFarmacia(@RequestBody FarmaciaRequest farmaciaRequest) {

        farmaciaService.crearFarmacia(farmaciaRequest);

        return ResponseEntity.ok("La farmacia " + farmaciaRequest.getNombre() + " ha sido creada con éxito!");

    }

    @PutMapping("/modificar-farmacia")
    public ResponseEntity<?> modificarFarmacia(
            @RequestBody FarmaciaModificacionRequest farmaciaRequest) {

        farmaciaService.modificarFarmacia(farmaciaRequest);

        return ResponseEntity.ok("La farmacia " + farmaciaRequest.getNombre() + " ha sido modificada con éxito!");

    }

    @PutMapping("/baja-farmacia")
    public ResponseEntity<?> bajaFarmacia(@RequestBody BajaPorNombreRequest bajaFarmaciaRequest) {
        farmaciaService.bajaFarmacia(bajaFarmaciaRequest);
        return ResponseEntity.ok("La farmacia " + bajaFarmaciaRequest.getNombre() + " ha sido dada de baja con éxito!");
    }

    @GetMapping("/buscar-farmacias-activas")
    public PageResponse<FarmaciaResponse> buscarFarmacias(
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @RequestParam(name = "size", defaultValue = "10", required = false) int size) {
        return farmaciaService.buscarFarmacias(page, size);
    }

    @GetMapping("/buscar-farmacia-por-nombre")
    public ResponseEntity<?> buscarUnaFarmacia(
            @RequestParam String nombre) {
        return ResponseEntity.ok(farmaciaService.buscarUnaFarmacia(nombre));
    }

}
