package io.justina.justinaio.dto;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MedicoDonanteRequest {
    private String nombre;
    private String apellido;
    private String telefono;
    private String provincia;
    private String localidad;
    private String licencia;
}
