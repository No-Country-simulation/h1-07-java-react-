package io.justina.justinaio.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MedicoRequest {

    @Schema(description = "First name of the doctor", example = "John")
    @JsonProperty("nombre")
    private String nombre;

    @Schema(description = "Last name of the doctor", example = "Doe")
    @JsonProperty("apellido")
    private String apellido;

    @Schema(description = "Phone number of the doctor", example = "+54 11 1234-5678")
    @JsonProperty("telefono")
    private String telefono;

    @Schema(description = "Province where the doctor practices", example = "Santa Fe")
    @JsonProperty("provincia")
    private String provincia;

    @Schema(description = "City or town where the doctor practices", example = "Rosario")
    @JsonProperty("localidad")
    private String localidad;

    @Schema(description = "Medical license number of the doctor", example = "123456")
    @JsonProperty("licencia")
    private String licencia;

    @Schema(description = "ID of the doctor's specialty", example = "1")  // Replace with actual ID values
    @JsonProperty("especialidad")
    private Integer especialidad;

    @Schema(description = "List of IDs of insurance providers the doctor accepts", example = "[1]")  // Replace with actual IDs
    @JsonProperty("financiadores")
    private List<Integer> financiadores;
}
