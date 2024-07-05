package io.justina.justinaio.dto;

import io.justina.justinaio.model.*;
import io.justina.justinaio.model.enums.FactorSanguineo;
import io.justina.justinaio.model.enums.Genero;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PacienteRequest {
    @Schema(example = "paciente@paciente.com")
    private String email;

    @Schema(example = "paciente123")
    private String password;

    @Schema(example = "1")
    private Integer idPaciente;

    @Schema(example = "Juan")
    private String nombre;

    @Schema(example = "Pérez")
    private String apellido;

    @Schema(example = "1")
    private Integer tipoDocumentoId;

    @Schema(example = "12345678")
    private Integer numeroDocumento;

    @Schema(example = "2000-01-01")
    private LocalDate fechaNacimiento;

    @Schema(example = "1")
    private Integer genero;

    @Schema(example = "1")
    private Integer factorSanguineo;

    @Schema(example = "1")
    private Integer patologiaId;

    @Schema(example = "[1]")
    private List<Integer> medicosId;

    @Schema(example = "[1]")
    private List<Integer> tratamientosId;

    @Schema(example = "[1]")
    private List<Integer> entidadesId;

    @Schema(example = "1")
    private Integer financiadorId;
}

