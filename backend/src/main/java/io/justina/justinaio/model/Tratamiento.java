package io.justina.justinaio.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import io.justina.justinaio.model.enums.EstadoTratamiento;
import io.justina.justinaio.model.enums.TipoTratamiento;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDate;
import java.util.ArrayList;
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
    private Integer dosisDiaria;

    @OneToMany(mappedBy = "tratamiento", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<HorarioToma> horarios = new ArrayList<>();

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

    @OneToOne
    @JoinColumn(name = "imagen_id")
    private Imagen imagen;

    private Boolean esActivo;
}
