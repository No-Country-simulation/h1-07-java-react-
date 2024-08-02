package io.justina.justinaio.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LaboratorioRequest {

    @Schema(description = "Nombre del laboratorio", example = "Biotenk")
    @JsonProperty("nombre")
    private String nombre;

    @Schema(description = "Descripción del laboratorio", example = "Investigación y desarrollo. Especialistas en salud femenina.")
    @JsonProperty("descripcion")
    private String descripcion;
}