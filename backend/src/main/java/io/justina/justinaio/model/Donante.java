package io.justina.justinaio.model;

import io.justina.justinaio.model.enums.FactorSanguineo;
import io.justina.justinaio.model.enums.Genero;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDate;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "donante")
@EntityListeners(AuditingEntityListener.class)
public class Donante {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_donante")
    private Integer idDonante;

    @OneToOne
    @JoinColumn(name = "id_paciente")
    private Paciente paciente;

    @ManyToOne
    @JoinColumn(name = "id_medico")
    private Medico medico;
    private String descripcion;

    private String nombre;
    private String apellido;
    private String altura;
    private String peso;
    @Enumerated(EnumType.ORDINAL)
    private Genero genero;

    @Enumerated(EnumType.ORDINAL)
    private FactorSanguineo factorSanguineo;

    private LocalDate fechaNacimiento;

    private String Localidad;
    private String provincia;
}
