package io.justina.justinaio.dto;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BusquedaDonanteRequest {
    private String texto;
    private Integer generoOrdinal;
    private Integer factorSanguineoOrdinal;
    private Integer edad;
}
