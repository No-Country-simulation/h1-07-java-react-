package io.justina.justinaio.dto;

import io.justina.justinaio.model.TipoDocumento;
import io.justina.justinaio.model.enums.FactorSanguineo;
import io.justina.justinaio.model.enums.Genero;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PacienteRequest {
    private String email;
    private String password;

    private Integer idPaciente;
    private String nombre;
    private String apellido;
    private Integer idTipoDocumento;
    private Integer numeroDocumento;
    private LocalDate fechaNacimiento;
    private Integer genero;
    private Integer factorSanguineo;
}
