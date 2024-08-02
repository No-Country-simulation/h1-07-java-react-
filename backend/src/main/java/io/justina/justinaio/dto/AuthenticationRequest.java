package io.justina.justinaio.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class AuthenticationRequest {

    @Email(message = "Tiene que ser un email válido")
    @NotEmpty(message = "El email es obligatorio")
    @NotNull(message = "EEl email es obligatorio")
    @Schema(example = "pmagnavachi@gmail.com", description = "Email del usuario")
    private String email;

    @NotEmpty(message = "La contraseña es obligatoria")
    @NotNull(message = "La contraseña es obligatoria")
    @Size(min = 8, message = "La contraseña debe tener como mínimo 8 carácteres")
    @Schema(example = "pablomagna", description = "Contraseña de usuario")
    private String password;
}