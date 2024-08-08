package io.justina.justinaio.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import io.justina.justinaio.model.enums.EstadoHorario;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "horario_toma")
@EntityListeners(AuditingEntityListener.class)
public class HorarioToma {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idHorario;

    @ManyToOne
    @JoinColumn(name = "tratamiento_id", nullable = false)
    @JsonBackReference
    private Tratamiento tratamiento;

    private String cometario;
    private LocalTime hora;
    @Temporal(TemporalType.DATE)
    private LocalDate fecha;

    @Enumerated(EnumType.ORDINAL)
    private EstadoHorario estadoHorario;

    private Boolean esActivo;
}
