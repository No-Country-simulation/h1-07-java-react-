package io.justina.justinaio.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DisponibilidadRequest {

    @Schema(description = "Horario de entrada", example = "9")
    @JsonProperty("entrada")
    private Integer entrada;

    @Schema(description = "Horario de salida", example = "17")
    @JsonProperty("salida")
    private Integer salida;

    @Schema(description = "Horario de inicio del descanso", example = "12")
    @JsonProperty("inicioDescanso")
    private Integer inicioDescanso;

    @Schema(description = "Horario de fin del descanso", example = "13")
    @JsonProperty("finDescanso")
    private Integer finDescanso;

    @Schema(description = "Dias en los que trabaja", example = "[\"LUNES\", \"MARTES\", \"MIERCOLES\"]")
    @JsonProperty("dias")
    private String[] dias;

}
