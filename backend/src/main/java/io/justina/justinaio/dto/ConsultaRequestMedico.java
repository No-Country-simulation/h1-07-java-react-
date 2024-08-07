package io.justina.justinaio.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConsultaRequestMedico {

    @Schema(description = "Fecha", example = "2024-08-05")
    @JsonProperty("fecha")
    private String fecha;

    @Schema(description = "Horario", example = "10")
    @JsonProperty("horario")
    private Integer horario;

    @Schema(description = "Paciente", example = "1")
    @JsonProperty("paciente")
    private Integer idPaciente;
}
