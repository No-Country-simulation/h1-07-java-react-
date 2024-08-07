package io.justina.justinaio.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BusquedaDonanteRequest {

    @Schema(description = "Texto descripción donacion", example = "higado")
    private String texto;

    @Schema(description = "Género del donante (0: masculino, 1: femenino, 2: otro)")
    private Integer generoOrdinal;

    @Schema(description = "Factor sanguíneo del donante (0: O+, 1: O-, 2: A+, 3: A-, 4: B+, 5: B-, 6: AB+, 7: AB-)")
    private Integer factorSanguineoOrdinal;

    @Schema(description = "Edad del donante en años", minimum = "0")
    private Integer edad;

    @Schema(description = "Filtro de edad (mayor, menor, igual)")
    private String edadFiltro;

    @Schema(description = "Peso del donante en kilogramos", minimum = "0")
    private Integer peso;

    @Schema(description = "Filtro de peso (mayor, menor, igual)")
    private String pesoFiltro;

    @Schema(description = "Altura del donante en centímetros", minimum = "0")
    private Integer altura;

    @Schema(description = "Filtro de altura (mayor, menor, igual)")
    private String alturaFiltro;
}


