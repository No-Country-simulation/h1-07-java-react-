package io.justina.justinaio.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Builder
public class AdherenciaTotalResponse {
    private Integer totalCompletado;
    private Integer totalNoCompletado;
    private Integer totalRetrasados;
    private Integer totalHorarios;
}