package io.justina.justinaio.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PatologiaResponse {
        @Schema(description = "ID único de la patología", example = "1")
        private Integer idPatologia;

        @Schema(description = "Nombre de la patología", example = "Diabetes Tipo 2")
        private String nombre;

        @Schema(description = "Descripción detallada de la patología", example = "Enfermedad crónica que afecta la forma en que el cuerpo procesa el azúcar en sangre.")
        private String descripcion;

}
