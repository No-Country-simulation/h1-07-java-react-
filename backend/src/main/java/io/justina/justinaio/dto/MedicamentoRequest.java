package io.justina.justinaio.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MedicamentoRequest {

    @Schema(description = "Nombre del medicamento", example = "Diclofenac")
    @JsonProperty("nombre")
    private String nombre;

    @Schema(description = "Descripción del medicamento", example = "Su función puede cumplir muchos propositos, el principal es el dolor general")
    @JsonProperty("descripcion")
    private String descripcion;
}
