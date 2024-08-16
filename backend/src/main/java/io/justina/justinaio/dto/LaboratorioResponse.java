package io.justina.justinaio.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LaboratorioResponse {

    private Integer idLaboratorio;
    private String nombre;
    private String descripcion;
}
