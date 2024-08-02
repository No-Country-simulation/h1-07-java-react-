package io.justina.justinaio.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class PasswordRequest {
    @NotEmpty(message = "El password es obligatorio")
    @NotNull(message = "El password es obligatorio")
    private String password;
}
