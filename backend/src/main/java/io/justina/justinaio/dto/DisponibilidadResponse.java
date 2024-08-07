package io.justina.justinaio.dto;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DisponibilidadResponse {

    private Integer entrada;

    private Integer salida;

    private Integer inicioDescanso;

    private Integer finDescanso;

    private String[] dias;

}
