package io.justina.justinaio.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FarmaciaRequest {

    @Schema(description = "Nombre de la farmacia", example = "Farmacity")
    @JsonProperty("nombre")
    private String nombre;

    @Schema(description = "Dirección de la farmacia", example = "9 de julio CABA")
    @JsonProperty("direccion")
    private String direccion;
}
