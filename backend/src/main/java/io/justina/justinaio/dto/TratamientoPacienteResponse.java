package io.justina.justinaio.dto;

import io.justina.justinaio.model.enums.EstadoTratamiento;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

import java.time.LocalDate;
import java.util.List;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TratamientoPacienteResponse {
        @Schema(description = "ID del tratamiento", example = "1")
        private Integer idTratamiento;

        @Schema(description = "Nombre del Medico", example = "Pablo")
        private String nombreMedico;

        @Schema(description = "Nombre de la patología", example = "Cefalea")
        private String nombrePatologia;

        @Schema(description = "Nombre del medicamento", example = "Ibuprofeno")
        private String nombreMedicamento;

        @Schema(description = "Descripción del tratamiento", example = "Tomar 2 veces al día después de las comidas")
        private String descripcion;

        @Schema(description = "Dosis diaria del tratamiento", example = "2")
        private Integer dosisDiaria;

        @Schema(description = "Fecha de inicio del tratamiento", example = "2023-07-18")
        private LocalDate fechaInicio;

        @Schema(description = "Fecha de fin del tratamiento", example = "2023-08-18")
        private LocalDate fechaFin;

        @Schema(description = "Estado del tratamiento", example = "EN_CURSO")
        private EstadoTratamiento estado;

        @Schema(description = "Tipo de tratamiento (0 = MEDICAMENTO, ETC)", example = "0")
        private Integer tipoTratamientoId;

        @Schema(description = "Lista de horarios de toma asociados al tratamiento")
        private List<HorarioTomaResponse> horarios;

        @Schema(description = "url de la imagen de receta si la hay")
        private String imagen;
}
