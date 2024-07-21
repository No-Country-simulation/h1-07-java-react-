package io.justina.justinaio.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InstitucionDeSaludRequest {

    @Schema(description = "Nombre de la institución de salud", example = "Hospital Álvarez")
    @JsonProperty("nombre")
    private String nombre;

    @Schema(description = "Dirección de la institución de salud", example = "Aranguren 2071")
    @JsonProperty("direccion")
    private String direccion;

    @Schema(description = "Email de la institución de salud", example = "HsplAlz@gmail.com")
    @JsonProperty("email")
    private String email;
}
