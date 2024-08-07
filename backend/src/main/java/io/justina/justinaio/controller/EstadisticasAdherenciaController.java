package io.justina.justinaio.controller;

import io.justina.justinaio.dto.AdherenciaResponse;
import io.justina.justinaio.dto.AdherenciaTotalResponse;
import io.justina.justinaio.model.enums.EstadoHorario;
import io.justina.justinaio.services.EstadisticasAdherenciaService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("adherencia")
@RequiredArgsConstructor
@Tag(name = "Adherencia", description = "Estadísticas de adherencia")
public class EstadisticasAdherenciaController {

    @Autowired
    private EstadisticasAdherenciaService estadisticasAdherenciaService;

    /*@GetMapping("/completado-a-tiempo/{tratamientoId}")
    public ResponseEntity<AdherenciaResponse> obtenerCompletadoATiempo(
            @PathVariable Integer tratamientoId) {
        return ResponseEntity.ok(estadisticasAdherenciaService.obtenerEstadisticasPorTratamiento(tratamientoId, EstadoHorario.COMPLETADO));
    }

    @GetMapping("/completado-tarde/{tratamientoId}")
    public ResponseEntity<AdherenciaResponse> obtenerCompletadoTarde(
            @PathVariable Integer tratamientoId) {
        return ResponseEntity.ok(estadisticasAdherenciaService.obtenerEstadisticasPorTratamiento(tratamientoId, EstadoHorario.ATRASADO));
    }

    @GetMapping("/no-completado/{tratamientoId}")
    public ResponseEntity<AdherenciaResponse> obtenerNoCompletado(
            @PathVariable Integer tratamientoId) {
        return ResponseEntity.ok(estadisticasAdherenciaService.obtenerEstadisticasPorTratamiento(tratamientoId, EstadoHorario.NO_COMPLETADO));
    }

    @GetMapping("/listar-completados-a-tiempo/{idPaciente}")
    public ResponseEntity<List<AdherenciaResponse>> listarCompletadoATiempo(
            @PathVariable Integer idPaciente,
            Authentication token
    ) {
        List<AdherenciaResponse> response = estadisticasAdherenciaService.obtenerEstadisticasPorPacienteYMedico(idPaciente, token, EstadoHorario.COMPLETADO);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/listar-completados-tarde/{idPaciente}")
    public ResponseEntity<List<AdherenciaResponse>> listarCompletadoTarde(
            @PathVariable Integer idPaciente,
            Authentication token
    ) {
        List<AdherenciaResponse> response = estadisticasAdherenciaService.obtenerEstadisticasPorPacienteYMedico(idPaciente, token, EstadoHorario.ATRASADO);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/listar-no-completados/{idPaciente}")
    public ResponseEntity<List<AdherenciaResponse>> obtenerNoCompletado(
            @PathVariable Integer idPaciente,
            Authentication token
    ) {
        List<AdherenciaResponse> response = estadisticasAdherenciaService.obtenerEstadisticasPorPacienteYMedico(idPaciente, token, EstadoHorario.NO_COMPLETADO);
        return ResponseEntity.ok(response);
    }*/

    @GetMapping("listar-adherencias-totales/{idPaciente}")
    public ResponseEntity<List<AdherenciaTotalResponse>> obtenerAdherenciasTotales(
            @PathVariable Integer idPaciente,
            Authentication token
    ) {
        List<AdherenciaTotalResponse> response = estadisticasAdherenciaService.obtenerEstadisticasTotalesPorPacienteYMedico(idPaciente, token);
        return ResponseEntity.ok(response);
    }

    @GetMapping("listar-adherencias-por-tratamiento/{idTratamiento}")
    public ResponseEntity<AdherenciaTotalResponse> obtenerAdherenciasPorTratamiento(
            @PathVariable Integer idTratamiento,
            Authentication token
    ) {
        AdherenciaTotalResponse response = estadisticasAdherenciaService.obtenerEstadisticasTotalesPorTratamiento(idTratamiento);
        return ResponseEntity.ok(response);
    }
}

