package io.justina.justinaio.dto;


import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Builder
public class AdherenciaRequest {
    private Integer tratamientoId;
    private Integer horarioId;
    private Integer pacienteId;
    private Date fechaHora;
    private String comentarios;
}

