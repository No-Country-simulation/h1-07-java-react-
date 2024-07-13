package io.justina.justinaio.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MedicamentoResponse {

    private String nombre;
    private String descripcion;
}
