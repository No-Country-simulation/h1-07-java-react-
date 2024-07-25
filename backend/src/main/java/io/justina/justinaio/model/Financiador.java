package io.justina.justinaio.model;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "financiador")
@EntityListeners(AuditingEntityListener.class)
public class Financiador {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idPrepagaObraSocial;

    @Column(unique = true)
    private String nombre;

    private String descripcion;
    private boolean esActivo;
}
