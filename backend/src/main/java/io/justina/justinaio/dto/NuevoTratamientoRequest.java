package io.justina.justinaio.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class NuevoTratamientoRequest {
    @Schema(description = "Identificador del paciente", example = "2")
    private Integer pacienteId;

    @Schema(description = "Identificador de la patología", example = "1")
    private Integer patologiaId;

    @Schema(description = "Identificador del medicamento", example = "1")
    private Integer medicamentoId;

    @Schema(description = "Tipo de tratamiento (0: Medicamento, 1: Procedimiento, etc.)", example = "")
    private Integer tipoTratamiento;

    @Schema(description = "Descripción del tratamiento", example = "Tratamiento con medicamento X para la patología Y")
    private String descripcion;

    @Schema(description = "Dosis diaria del medicamento (si corresponde)", example = "3")
    private Integer dosisDiaria;

    @Schema(description = "Hora de inicio del tratamiento en formato HH:mm", example = "08:00")
    @DateTimeFormat(pattern = "HH:mm")
    private LocalTime horaInicio;

    @Schema(description = "Días totales de duración del tratamiento", example = "5")
    private Integer diasTotales;

    @Schema(description = "Fecha de inicio del tratamiento", example = "2024-07-16")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate fechaInicio;
}
