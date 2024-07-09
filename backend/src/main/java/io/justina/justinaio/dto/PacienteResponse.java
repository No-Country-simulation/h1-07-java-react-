package io.justina.justinaio.dto;

import lombok.*;

import java.util.List;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PacienteResponse {
    private Integer idPaciente;
    private String nombre;
    private String apellido;
    private String tipoDocumento;
    private Integer numeroDocumento;
    private String patologia;
    private String financiador;
    private List<String> tratamientos;
    private List<String> medicos;
    private List<String> entidades;
}
