package io.justina.justinaio.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BajaRequest {

    @Schema(description = "Id del usuario", example = "1")
    @JsonProperty("idUsuario")
    private Integer idUsuario;
}
