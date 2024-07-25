package io.justina.justinaio.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FinanciadorRequest {

    @Schema(description = "Nombre del financiador", example = "John")
    @JsonProperty("nombre")
    private String nombre;

    @Schema(description = "Descripción del financiador", example = "credito")
    @JsonProperty("descripcion")
    private String descripcion;

}
