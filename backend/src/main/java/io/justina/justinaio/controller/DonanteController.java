package io.justina.justinaio.controller;

import io.justina.justinaio.dto.BusquedaDonanteRequest;
import io.justina.justinaio.dto.DonanteRequest;
import io.justina.justinaio.dto.DonanteResponse;
import io.justina.justinaio.dto.MedicoDonanteRequest;
import io.justina.justinaio.services.DonanteService;
import io.justina.justinaio.util.PageResponse;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.media.Schema;
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
        return ResponseEntity.ok("Donante Creado con éxito");
    }

    /*@GetMapping("/buscar-donantes")
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
    }*/

    @GetMapping("/buscar-donantes")
    public ResponseEntity<PageResponse<DonanteResponse>> buscarDonantes(
            Authentication token,
            @Parameter(
                    in = ParameterIn.QUERY,
                    description = "Texto descripción donacion",
                    example = "higado"
            )
            @RequestParam(name = "textoBusqueda", required = false) String textoBusqueda,
            @Parameter(
                    in = ParameterIn.QUERY,
                    description = "Género del donante (0: masculino, 1: femenino, 2: otro)"
            )
            @RequestParam(name = "generoOrdinal", required = false) Integer generoOrdinal,
            @Parameter(
                    in = ParameterIn.QUERY,
                    description = "Factor sanguíneo del donante (0: O+, 1: O-, 2: A+, 3: A-, 4: B+, 5: B-, 6: AB+, 7: AB-)"
            )
            @RequestParam(name = "factorSanguineoOrdinal", required = false) Integer factorSanguineoOrdinal,
            @Parameter(
                    in = ParameterIn.QUERY,
                    description = "Edad del donante en años",
                    schema = @Schema(minimum = "0")
            )
            @RequestParam(name = "edad", required = false) Integer edad,
            @Parameter(
                    in = ParameterIn.QUERY,
                    description = "Filtro de edad (mayor, menor, igual)"
            )
            @RequestParam(name = "edadFiltro", required = false) String edadFiltro,
            @Parameter(
                    in = ParameterIn.QUERY,
                    description = "Peso del donante en kilogramos",
                    schema = @Schema(minimum = "0")
            )
            @RequestParam(name = "peso", required = false) Integer peso,
            @Parameter(
                    in = ParameterIn.QUERY,
                    description = "Filtro de peso (mayor, menor, igual)"
            )
            @RequestParam(name = "pesoFiltro", required = false) String pesoFiltro,
            @Parameter(
                    in = ParameterIn.QUERY,
                    description = "Altura del donante en centímetros",
                    schema = @Schema(minimum = "0")
            )
            @RequestParam(name = "altura", required = false) Integer altura,
            @Parameter(
                    in = ParameterIn.QUERY,
                    description = "Filtro de altura (mayor, menor, igual)"
            )
            @RequestParam(name = "alturaFiltro", required = false) String alturaFiltro,
            @Parameter(
                    in = ParameterIn.QUERY,
                    description = "Número de página para la paginación",
                    schema = @Schema(defaultValue = "0")
            )
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @Parameter(
                    in = ParameterIn.QUERY,
                    description = "Tamaño de página para la paginación",
                    schema = @Schema(defaultValue = "10")
            )
            @RequestParam(name = "size", defaultValue = "10", required = false) int size
    ) {
        BusquedaDonanteRequest busqueda = BusquedaDonanteRequest.builder()
                .texto(textoBusqueda)
                .generoOrdinal(generoOrdinal)
                .factorSanguineoOrdinal(factorSanguineoOrdinal)
                .edad(edad)
                .edadFiltro(edadFiltro)
                .peso(peso)
                .pesoFiltro(pesoFiltro)
                .altura(altura)
                .alturaFiltro(alturaFiltro)
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
