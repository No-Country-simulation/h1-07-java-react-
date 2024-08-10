package io.justina.justinaio.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.justina.justinaio.model.enums.EstadoHorario;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class HorarioTomaRequest {

    @Schema(description = "Id relacionado a la notificacion", example = "1")
    @JsonProperty("horarioId")
    private Integer horarioId;

    @Schema(description = "Comentaro opcional de por que no tomo o que paso", example = "No tomado por dolores estomacales.")
    private String comentario;

    /*COMPLETADO,
    NO_COMPLETADO,
    ATRASADO
    */
    @Schema(description = "2 - COMPLETADO, 3 - NO_COMPLETADO, 4 - ATRASADO", example = "2")
    @JsonProperty("estado")
    private Integer estado;
}
