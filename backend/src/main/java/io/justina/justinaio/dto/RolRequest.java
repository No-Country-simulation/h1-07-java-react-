package io.justina.justinaio.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RolRequest {
    @NotEmpty(message = "El rol es obligatorio")
    @NotNull(message = "El rol es obligatorio")
    private String nombre;
}
