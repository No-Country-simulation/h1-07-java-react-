package io.justina.justinaio.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BajaPorNombreRequest {

    @Schema(description = "nombre de la entidad", example = "John")
    @JsonProperty("nombre")
    private String nombre;
}
