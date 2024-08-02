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
@Table(name = "farmacia")
@EntityListeners(AuditingEntityListener.class)
public class Farmacia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idFarmacia;
    private String nombre;
    private String direccion;
    private boolean esActivo;

    @ManyToMany
    @JoinTable(name = "farmacia_medicamento", joinColumns = @JoinColumn(name = "farmacia_id"), inverseJoinColumns = @JoinColumn(name = "medicamento_id"))
    private List<Medicamento> medicamentos;

    @ManyToMany
    @JoinTable(name = "farmacia_laboratorio", joinColumns = @JoinColumn(name = "farmacia_id"), inverseJoinColumns = @JoinColumn(name = "laboratorio_id"))
    private List<Laboratorio> laboratorios;
}
