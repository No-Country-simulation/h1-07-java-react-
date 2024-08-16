package io.justina.justinaio.controller;

import io.justina.justinaio.dto.AdherenciaGlobalResponse;
import io.justina.justinaio.dto.AdherenciaResponse;
import io.justina.justinaio.dto.AdherenciaTotalRequest;
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

    @GetMapping("/datos-globales-por-medicamento/{idMedicamento}")
    public ResponseEntity<AdherenciaGlobalResponse> obtenerAdherenciasTotalesPorMedicamento(
            @PathVariable Integer idMedicamento,
            @RequestParam(required = false) Integer genero,
            @RequestParam(required = false) Integer idPatologia,
            @RequestParam(required = false) Integer idFinanciador,
            @RequestParam(required = false) Integer edad,
            @RequestParam(required = false) Boolean mayorEdad
    ) {
        // Construir AdherenciaTotalRequest usando @Builder
        AdherenciaTotalRequest adherenciaTotalRequest = AdherenciaTotalRequest.builder()
                .idMedicamento(idMedicamento)
                .genero(genero)
                .idPatologia(idPatologia)
                .idFinanciador(idFinanciador)
                .edad(edad)
                .mayorEdad(mayorEdad)
                .build();

        // Llamar al servicio con el request construido
        AdherenciaGlobalResponse response = estadisticasAdherenciaService.obtenerEstadisticasGlobalesPorCriterios(adherenciaTotalRequest);
        return ResponseEntity.ok(response);
    }


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

