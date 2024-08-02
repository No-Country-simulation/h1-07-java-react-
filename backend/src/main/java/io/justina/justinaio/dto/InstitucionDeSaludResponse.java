package io.justina.justinaio.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class InstitucionDeSaludResponse {

    private String nombre;
    private String direccion;
    private String emailContacto;
}
