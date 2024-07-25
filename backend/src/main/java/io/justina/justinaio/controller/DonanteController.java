package io.justina.justinaio.controller;

import io.justina.justinaio.dto.BusquedaDonanteRequest;
import io.justina.justinaio.dto.DonanteRequest;
import io.justina.justinaio.dto.DonanteResponse;
import io.justina.justinaio.dto.MedicoDonanteRequest;
import io.justina.justinaio.services.DonanteService;
import io.justina.justinaio.util.PageResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("donante")
@RequiredArgsConstructor
@Tag(name = "Donante")
public class DonanteController {
    private final DonanteService donanteService;

    @PostMapping("/crear-donante")
    public ResponseEntity<?> crearDonante(
            Authentication token,
            @RequestBody DonanteRequest donanteRequest
    ) {
        donanteService.crearDonante(donanteRequest,token);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/buscar-donantes")
    public ResponseEntity<PageResponse<DonanteResponse>> buscarDonantes(
            Authentication token,
            @RequestParam(name = "textoBusqueda", required = false) String textoBusqueda,
            @RequestParam(name = "generoOrdinal",  required = false) Integer generoOrdinal,
            @RequestParam(name = "factorSanguineoOrdinal", required = false) Integer factorSanguineoOrdinal,
            @RequestParam(name = "edad", required = false) Integer edad,
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @RequestParam(name = "size", defaultValue = "10", required = false) int size
    ) {
        BusquedaDonanteRequest busqueda = BusquedaDonanteRequest.builder()
                .texto(textoBusqueda)
                .generoOrdinal(generoOrdinal)
                .factorSanguineoOrdinal(factorSanguineoOrdinal)
                .edad(edad)
                .build();
        return ResponseEntity.ok(donanteService.buscarDonantes(page, size, busqueda, token));
    }

    @GetMapping("/buscar-medico-por-donante")
    public ResponseEntity<MedicoDonanteRequest> buscarDonante(
            @RequestParam(name = "idDonante") Integer idDonante
    ) {
        return ResponseEntity.ok(donanteService.buscarDonante(idDonante));
    }
}
