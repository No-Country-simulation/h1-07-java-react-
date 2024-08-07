package io.justina.justinaio.dto;

import io.justina.justinaio.model.enums.EstadoHorario;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class HorarioTomaResponse {
    private LocalDate fecha;
    private LocalTime hora;
    private EstadoHorario estado;
    private String comentario;
}
