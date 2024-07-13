package io.justina.justinaio.dto;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class MedicoUsuarioRequest {

    @Schema(description = "Email del doctor", example = "pmagnavachi@gmail.com")
    @JsonProperty("email")
    private String email;

    @Schema(description = "Contraseña del doctor", example = "pablomagna")
    @JsonProperty("password")
    private String password;

    @Schema(description = "Nombre del doctor", example = "John")
    @JsonProperty("nombre")
    private String nombre;

    @Schema(description = "Apellido del doctor", example = "Doe")
    @JsonProperty("apellido")
    private String apellido;

    @Schema(description = "Número de teléfono del doctor", example = "+54 11 1234-5678")
    @JsonProperty("telefono")
    private String telefono;

    @Schema(description = "Provincia donde ejerce el doctor", example = "Santa Fe")
    @JsonProperty("provincia")
    private String provincia;

    @Schema(description = "Localidad donde ejerce el doctor", example = "Rosario")
    @JsonProperty("localidad")
    private String localidad;

    @Schema(description = "Número de licencia médica del doctor", example = "123456")
    @JsonProperty("licencia")
    private String licencia;

    @Schema(description = "ID de la especialidad del doctor", example = "1")  // Reemplazar con valores de ID reales
    @JsonProperty("especialidad")
    private Integer especialidadId;

    @Schema(description = "Lista de IDs de financiadores que acepta el doctor", example = "[1, 2, 3]")  // Reemplazar con IDs reales
    @JsonProperty("financiadores")
    private List<Integer> financiadoresIds;
}
