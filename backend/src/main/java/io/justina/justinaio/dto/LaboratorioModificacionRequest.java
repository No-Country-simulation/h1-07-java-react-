package io.justina.justinaio.dto;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LaboratorioModificacionRequest {

    @Schema(description = "Nombre del laboratorio", example = "Biotenk")
    @JsonProperty("nombre")
    private String nombre;

    @Schema(description = "Nombre a cambiar del financiador", example = "Insud")
    @JsonProperty("nombreCambio")
    private String nombreCambio;

    @Schema(description = "Descripción del financiador", example = "Invertimos en investigación y desarrollo para potenciar el conocimiento científico.")
    @JsonProperty("descripcion")
    private String descripcion;
}