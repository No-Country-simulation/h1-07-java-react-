package io.justina.justinaio.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ConsultaResponse {

    private Integer idConsulta;
    private Integer idmedico;
    private String nombreMedico;
    private String apellidoMedico;
    private String especialidadMedico;
    private Integer idPaciente;
    private String nombrePaciente;
    private String apellidoPaciente;
    private String fecha;
    private Integer horario;
}
