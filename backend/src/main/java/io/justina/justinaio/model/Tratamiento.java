package io.justina.justinaio.model;

import io.justina.justinaio.model.enums.EstadoTratamiento;
import io.justina.justinaio.model.enums.TipoTratamiento;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.cglib.core.Local;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tratamiento")
@EntityListeners(AuditingEntityListener.class)
public class Tratamiento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idTratamiento;

    @ManyToOne
    @JoinColumn(name = "patologia_id")
    private Patologia patologia;

    @ManyToOne
    @JoinColumn(name = "medicamento_id")
    private Medicamento medicamento;

    @Enumerated(EnumType.ORDINAL)
    private TipoTratamiento tipoTratamiento;

    private String descripcion;
    private Integer dosisDiaria; // ver si queda en descripcion

    @OneToMany(mappedBy = "tratamiento", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<HorarioToma> horarios;

    private LocalDate fechaInicio;
    private LocalDate fechaFin;

    @ManyToOne
    @JoinColumn(name = "paciente_id")
    private Paciente paciente;

    @ManyToOne
    @JoinColumn(name = "medico_id")
    private Medico medico;

    @Enumerated(EnumType.ORDINAL)
    private EstadoTratamiento estado;

    private Boolean esActivo;
}
