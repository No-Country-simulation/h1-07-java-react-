package io.justina.justinaio.model;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

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
    private String nombre;

    @ManyToMany(mappedBy = "tratamientos")
    private List<Medicamento> medicamentos;

    @ManyToOne
    @JoinColumn(name = "paciente_id")
    private Paciente paciente;
}
