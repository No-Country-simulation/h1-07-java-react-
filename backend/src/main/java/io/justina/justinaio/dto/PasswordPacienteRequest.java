package io.justina.justinaio.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class PasswordPacienteRequest {
    private Integer idPaciente;
    private String password;
}
