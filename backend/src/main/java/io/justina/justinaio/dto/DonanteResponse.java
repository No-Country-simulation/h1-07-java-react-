package io.justina.justinaio.dto;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DonanteResponse {

    private Integer idDonante;
    private Integer idMedico;
    private String altura;
    private String descripcion;
    private String peso;
    private Integer genero;
    private Integer factorSanguineo;
    private LocalDate fechaNacimiento;
    private String Localidad;
    private String provincia;
}
