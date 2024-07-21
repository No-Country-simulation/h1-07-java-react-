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
@Table(name = "institucion_de_salud")
@EntityListeners(AuditingEntityListener.class)
public class InstitucionDeSalud {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idInstitucion;
    private String nombre;
    private String direccion;
    private String emailContacto;

    @ManyToMany
    @JoinTable(name = "institucion_medico", joinColumns = @JoinColumn(name = "institucion_id"), inverseJoinColumns = @JoinColumn(name = "medico_id"))
    private List<Medico> medicos;
}
