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
@Table(name = "laboratorio")
@EntityListeners(AuditingEntityListener.class)
public class Laboratorio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idLaboratorio;
    private String nombre;
    private String descripcion;
}
