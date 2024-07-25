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
@Table(name = "medico")
@EntityListeners(AuditingEntityListener.class)
public class Medico {
    @Id
    private Integer idMedico;
    private String nombre;
    private String apellido;
    private String telefono;
    private String provincia;
    private String localidad;
    private String licencia;

    @ManyToOne
    @JoinColumn(name = "especialidad_id", referencedColumnName = "idEspecialidad")
    private Especialidad especialidad;

    @ManyToMany
    @JoinTable(
            name = "medico_financiador",
            joinColumns = @JoinColumn(name = "medico_id"),
            inverseJoinColumns = @JoinColumn(name = "financiador_id")
    )
    private List<Financiador> financiadores;

    @ManyToMany(mappedBy = "medicos")
    private List<Paciente> pacientes;

    public String fullName() {
        return getNombre() + " " + getApellido();
    }

    public String getFullName() {
        return getNombre() + " " + getApellido();
    }
}
