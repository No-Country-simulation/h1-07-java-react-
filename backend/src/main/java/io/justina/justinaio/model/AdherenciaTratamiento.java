package io.justina.justinaio.model;

import io.justina.justinaio.model.enums.EstadoAdherencia;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "adherencia_tratamiento")
public class AdherenciaTratamiento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idAdherencia;
    private String comentarios;

    @ManyToOne
    @JoinColumn(name = "tratamiento_id")
    private Tratamiento tratamiento;

    @ManyToOne
    @JoinColumn(name = "paciente_id")
    private Paciente paciente;

    @ManyToOne
    @JoinColumn(name = "horario_id")
    private HorarioToma horarioToma;

    @Enumerated(EnumType.STRING)
    private EstadoAdherencia estadoAdherencia;

    private Date fechaHora;
}

