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
import io.justina.justinaio.dto.MedicamentoModificacionRequest;
import io.justina.justinaio.dto.MedicamentoRequest;
import io.justina.justinaio.dto.MedicamentoResponse;
import io.justina.justinaio.services.MedicamentoService;
import io.justina.justinaio.util.PageResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("medicamento")
@RequiredArgsConstructor
@Tag(name = "Medicamento")
public class MedicamentoController {

    private final MedicamentoService medicamentoService;

    @PostMapping("/crear-medicamento")
    public ResponseEntity<?> crearMedicamento(@RequestBody MedicamentoRequest medicamentoRequest) {

        medicamentoService.crearMedicamento(medicamentoRequest);

        return ResponseEntity.ok("El Medicamento " + medicamentoRequest.getNombre() + " ha sido creado con èxito!");

    }

    @PutMapping("/modificar-medicamento")
    public ResponseEntity<?> modificarMedicamento(
            @RequestBody MedicamentoModificacionRequest medicamentoRequest) {

        medicamentoService.modificarMedicamento(medicamentoRequest);

        return ResponseEntity.ok("El medicamento " + medicamentoRequest.getNombre() + " ha sido modficado con éxito!");

    }

    @PutMapping("/baja-medicamento")
    public ResponseEntity<?> bajaMedicamento(
            @RequestBody BajaPorNombreRequest bajaMedicamentoRequest) {
        medicamentoService.bajaMedicamento(bajaMedicamentoRequest);
        return ResponseEntity.ok("La baja se ha realizado con éxito");
    }

    @GetMapping("/buscar-medicamentos-activos")
    public PageResponse<MedicamentoResponse> buscarMedicamentos(
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @RequestParam(name = "size", defaultValue = "10", required = false) int size) {
        return medicamentoService.buscarMedicamentos(page, size);
    }

    @GetMapping("/buscar-medicamento-por-nombre")
    public ResponseEntity<?> buscarUnMedicamento(
            @RequestParam String nombre) {
        return ResponseEntity.ok(medicamentoService.buscarUnMedicamento(nombre));
    }
}
