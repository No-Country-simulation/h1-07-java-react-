package io.justina.justinaio.dto;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CasoClinicoResponse {

    private LocalDate fecha;
    private String titulo;
    private String descripcion;
}
