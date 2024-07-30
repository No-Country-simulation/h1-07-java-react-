package io.justina.justinaio.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "notificacion")
public class Notificacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idNotificacion;

    @ManyToOne
    @JoinColumn(name = "horario_toma_id", nullable = false)
    private HorarioToma horarioToma;

    @ManyToOne
    @JoinColumn(name = "paciente_id", nullable = false)
    private Paciente paciente;

    private LocalDateTime fechaNotificacion;
    private Boolean leido;
    private String mensaje;
}
