package io.justina.justinaio.dto;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdherenciaTotalRequest {
    private Integer idMedicamento; // Nuevo criterio de búsqueda principal
    private Integer genero; // Integer que representa el ordinal del enum Genero
    private Integer idPatologia;
    private Integer idFinanciador;
    private Integer edad;
    private Boolean mayorEdad; // true si se busca por mayor de edad, false si por menor de edad
}
