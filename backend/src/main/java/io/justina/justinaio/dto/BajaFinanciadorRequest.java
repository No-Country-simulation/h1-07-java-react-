package io.justina.justinaio.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BajaFinanciadorRequest {

    @Schema(description = "nombre del financiador", example = "John")
    @JsonProperty("nombreFinanciador")
    private String nombreFinanciador;
}
