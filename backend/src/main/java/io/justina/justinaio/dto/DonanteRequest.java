package io.justina.justinaio.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DonanteRequest { // Puede ser nulo
    @Schema(description = "ID del médico asociado al donante", example = "1")
    private Integer medicoId;

    @Schema(description = "ID del paciente asociado al donante", example = "2")
    private Integer pacienteId;

    @Schema(description = "Descripcion de la donación", example = "Higado")
    private String descripcion;

    @Schema(description = "Nombre del donante", example = "Juan")
    private String nombre;

    @Schema(description = "Apellido del donante", example = "Pérez")
    private String apellido;

    @Schema(description = "Altura del donante en cm", example = "175")
    private String altura;

    @Schema(description = "Peso del donante en kg", example = "70")
    private String peso;

    @Schema(description = "Género del donante (ordinal del enum)", example = "1")
    private Integer genero;

    @Schema(description = "Factor sanguíneo del donante (ordinal del enum)", example = "0")
    private Integer factorSanguineo;

    @Schema(description = "Fecha de nacimiento del donante", example = "1990-01-01")
    private LocalDate fechaNacimiento;

    @Schema(description = "Localidad del donante", example = "Madrid")
    private String localidad;

    @Schema(description = "Provincia del donante", example = "Madrid")
    private String provincia;
}
