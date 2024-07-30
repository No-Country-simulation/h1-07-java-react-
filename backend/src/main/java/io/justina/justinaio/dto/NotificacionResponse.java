package io.justina.justinaio.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class NotificacionResponse {
    private Integer idNotificacion;
    private Integer horarioTomaId;
    private Integer pacienteId;
    private LocalDateTime fechaNotificacion;
    private Boolean leido;
    private String mensaje;
}
