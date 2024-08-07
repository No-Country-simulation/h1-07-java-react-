package io.justina.justinaio.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Builder
public class AdherenciaResponse {
    private Integer cuentaElementoPrincipal;
    private Integer totalTomas;
    private Double porcentaje;
    private List<String> comentarios;
}
