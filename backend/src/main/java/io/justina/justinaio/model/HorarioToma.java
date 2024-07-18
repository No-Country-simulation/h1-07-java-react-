package io.justina.justinaio.model;
import io.justina.justinaio.model.enums.EstadoHorario;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "horario_toma")
public class HorarioToma {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idHorario;

    @ManyToOne
    @JoinColumn(name = "tratamiento_id", nullable = false)
    private Tratamiento tratamiento;

    private String cometario;

    private LocalTime hora;
    @Temporal(TemporalType.DATE)
    private LocalDate fecha;
    @Enumerated(EnumType.ORDINAL)
    private EstadoHorario estadoHorario;
}

