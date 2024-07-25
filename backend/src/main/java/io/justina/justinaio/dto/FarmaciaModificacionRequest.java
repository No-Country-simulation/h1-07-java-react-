package io.justina.justinaio.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FarmaciaModificacionRequest {

    @Schema(description = "Nombre de la farmacia", example = "Farmacity")
    @JsonProperty("nombre")
    private String nombre;

    @Schema(description = "Nombre a cambiar de la farmacia", example = "Farmaplus")
    @JsonProperty("nombreCambio")
    private String nombreCambio;

    @Schema(description = "Dirección de la farmacia", example = "Araoz 932")
    @JsonProperty("direccion")
    private String direccion;
}
