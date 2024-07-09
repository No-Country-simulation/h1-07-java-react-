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
    
    @Schema(description = "First name of the doctor", example = "John")
    @JsonProperty("nombre")
    private String nombre;

    @Schema(description = "description of the financier", example = "credit")
    @JsonProperty("descripcion")
    private String descripcion;

}
