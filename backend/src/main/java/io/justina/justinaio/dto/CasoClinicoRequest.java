package io.justina.justinaio.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CasoClinicoRequest {

    @Schema(description = "ID del paciente asociado al caso clínico", example = "1")
    private Integer idPaciente;

    @Schema(description = "Título del caso clínico", example = "Diagnóstico de Diabetes")
    private String titulo;

    @Schema(description = "Descripción detallada del caso clínico", example = "Paciente presenta síntomas de diabetes tipo 2.")
    private String descripcion;
}
