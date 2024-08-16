package io.justina.justinaio.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PatologiaRequest {

    @Schema(description = "Nombre de la patología", example = "Diabetes Tipo 2")
    private String nombre;

    @Schema(description = "Descripción detallada de la patología", example = "Enfermedad crónica que afecta la forma en que el cuerpo procesa el azúcar en sangre.")
    private String descripcion;
}
