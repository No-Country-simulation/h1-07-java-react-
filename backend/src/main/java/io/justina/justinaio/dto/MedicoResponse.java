package io.justina.justinaio.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MedicoResponse {

    private Integer idMedico;
    private String nombre;
    private String apellido;
    private String telefono;
    private String provincia;
    private String localidad;
    private String licencia;
    private String especialidad;
}
