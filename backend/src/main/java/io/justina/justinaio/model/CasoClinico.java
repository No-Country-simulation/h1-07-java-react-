package io.justina.justinaio.model;

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
@Table(name = "caso_clinico")
@EntityListeners(AuditingEntityListener.class)
public class CasoClinico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_caso_clinico")
    private Integer idCasoClinico;

    @ManyToOne
    @JoinColumn(name = "id_medico", nullable = true)  // Permite que el valor sea nulo
    private Medico medico;

    @ManyToOne
    @JoinColumn(name = "id_paciente", nullable = true)  // Permite que el valor sea nulo
    private Paciente paciente;

    @Column(name = "fecha")
    private LocalDate fecha;

    @Column(name = "titulo")
    private String titulo;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "es_activo")
    private Boolean esActivo;

}
