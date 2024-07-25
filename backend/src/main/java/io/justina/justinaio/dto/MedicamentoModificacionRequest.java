package io.justina.justinaio.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MedicamentoModificacionRequest {

    @Schema(description = "Nombre del medicamento", example = "John")
    @JsonProperty("nombre")
    private String nombre;

    @Schema(description = "Nombre a cambiar del medicamento", example = "Juan")
    @JsonProperty("nombreCambio")
    private String nombreCambio;

    @Schema(description = "Descripción del medicamento", example = "credito")
    @JsonProperty("descripcion")
    private String descripcion;

}
