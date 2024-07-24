package io.justina.justinaio.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InstitucionDeSaludModificacionRequest {

    @Schema(description = "Nombre de la institución de salud", example = "Hospital Álvarez")
    @JsonProperty("nombre")
    private String nombre;

    @Schema(description = "Nombre a cambiar de la institución de salud", example = "Hospital Argerich")
    @JsonProperty("nombreCambio")
    private String nombreCambio;

    @Schema(description = "Dirección de la institución de salud", example = "Almirante Brown 240")
    @JsonProperty("direccion")
    private String direccion;

    @Schema(description = "Email de contacto de la institución de salud", example = "HspAgh@gmail.com")
    @JsonProperty("emailContacto")
    private String emailContacto;
}
