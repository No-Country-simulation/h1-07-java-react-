package io.justina.justinaio.model;
import io.justina.justinaio.model.enums.FactorSanguineo;
import io.justina.justinaio.model.enums.Genero;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "paciente")
@EntityListeners(AuditingEntityListener.class)
public class Paciente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idPaciente;
    private String nombre;
    private String apellido;

    @ManyToOne
    @JoinColumn(name = "tipo_documento_id", nullable = false)
    private TipoDocumento tipoDocumento;

    private Integer numeroDocumento;
    private LocalDate fechaNacimiento;

    @Enumerated(EnumType.ORDINAL)
    private Genero genero;

    @Enumerated(EnumType.ORDINAL)
    private FactorSanguineo factorSanguineo;

    @ManyToOne
    @JoinColumn(name = "patologia_id")
    private Patologia patologia;

    @ManyToMany
    @JoinTable(
            name = "paciente_medico",
            joinColumns = @JoinColumn(name = "paciente_id"),
            inverseJoinColumns = @JoinColumn(name = "medico_id")
    )
    private List<Medico> medicos;

    @ManyToMany
    @JoinTable(
            name = "paciente_entidad",
            joinColumns = @JoinColumn(name = "paciente_id"),
            inverseJoinColumns = @JoinColumn(name = "entidad_id")
    )
    private List<Entidad> entidades;

    @ManyToOne
    @JoinColumn(name = "financiador_id")
    private Financiador financiador;

    public String fullName() {
        return getNombre() + " " + getApellido();
    }

    public String getFullName() {
        return getNombre() + " " + getApellido();
    }
}