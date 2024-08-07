package io.justina.justinaio.dto;

import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class NotificacionResponse {
    private Integer idNotificacion;
    private Integer horarioTomaId;
    private Integer pacienteId;
    private LocalTime hora;
    private LocalDate fecha;
    private Boolean leido;
    private String mensaje;
}
