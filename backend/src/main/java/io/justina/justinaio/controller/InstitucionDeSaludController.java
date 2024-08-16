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
import io.justina.justinaio.dto.InstitucionDeSaludModificacionRequest;
import io.justina.justinaio.dto.InstitucionDeSaludRequest;
import io.justina.justinaio.dto.InstitucionDeSaludResponse;
import io.justina.justinaio.services.InstitucionDeSaludService;
import io.justina.justinaio.util.PageResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("institucion-de-salud")
@RequiredArgsConstructor
@Tag(name = "Institucion de salud")
public class InstitucionDeSaludController {

    private final InstitucionDeSaludService institucionDeSaludService;

    @PostMapping("/crear-institucion-de-salud")
    public ResponseEntity<?> crearInstitucionDeSalud(@RequestBody InstitucionDeSaludRequest institucionDeSaludRequest) {

        institucionDeSaludService.crearInstitucionDeSalud(institucionDeSaludRequest);

        return ResponseEntity
                .ok("La institución de salud " + institucionDeSaludRequest.getNombre() + " ha sido creada con éxito!");

    }

    @PutMapping("/modificar-institucion-de-salud")
    public ResponseEntity<?> modificarInstitucionDeSalud(
            @RequestBody InstitucionDeSaludModificacionRequest institucionDeSaludRequest) {

        institucionDeSaludService.modificarInstitucionDeSalud(institucionDeSaludRequest);

        return ResponseEntity.ok(
                "La institución de salud " + institucionDeSaludRequest.getNombre() + " ha sido modificada con éxito!");

    }

    @PutMapping("/baja-institucion-de-salud")
    public ResponseEntity<?> bajaInstitucionDeSalud(@RequestBody BajaPorNombreRequest bajaInstitucionDeSaludRequest) {
        institucionDeSaludService.bajaInstitucionDeSalud(bajaInstitucionDeSaludRequest);
        return ResponseEntity.ok("La institución de salud " + bajaInstitucionDeSaludRequest.getNombre()
                + " ha sido dada de baja con éxito!");
    }

    @PutMapping("/baja-institucion-de-salud-por-id")
    public ResponseEntity<?> bajaInstitucionDeSaludPorId(@RequestParam Integer idInstitucionDeSalud) {
        institucionDeSaludService.bajaInstitucionDeSaludPorId(idInstitucionDeSalud);
        return ResponseEntity.ok("La institución de salud con id:  " + idInstitucionDeSalud
                + " ha sido dada de baja con éxito!");
    }

    @GetMapping("/buscar-instituciones-de-salud-activas")
    public PageResponse<InstitucionDeSaludResponse> buscarInstitucionesDeSalud(
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @RequestParam(name = "size", defaultValue = "10", required = false) int size) {
        return institucionDeSaludService.buscarInstitucionesDeSalud(page, size);
    }

    @GetMapping("/buscar-institucion-de-salud-por-nombre")
    public ResponseEntity<?> buscarUnaInstitucionDeSalud(
            @RequestParam String nombre) {
        return ResponseEntity.ok(institucionDeSaludService.buscarUnaInstitucionDeSalud(nombre));
    }
}
