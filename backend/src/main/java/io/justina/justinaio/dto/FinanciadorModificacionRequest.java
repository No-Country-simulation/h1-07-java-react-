package io.justina.justinaio.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FinanciadorModificacionRequest {
    
    @Schema(description = "Nombre del financiador", example = "John")
    @JsonProperty("nombre")
    private String nombre;

    @Schema(description = "Nombre a cambiar del financiador", example = "Juan")
    @JsonProperty("nombreCambio")
    private String nombreCambio;

    @Schema(description = "Descripción del financiador", example = "credito")
    @JsonProperty("descripcion")
    private String descripcion;
}
