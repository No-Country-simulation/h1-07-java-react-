package io.justina.justinaio.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FinanciadorResponse {
    private Integer idFinanciador;
    private String nombre;
    private String descripcion;
}
