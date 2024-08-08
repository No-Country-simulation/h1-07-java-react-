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
@Table(name = "patologia")
@EntityListeners(AuditingEntityListener.class)
public class Patologia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idPatologia;
    private String nombre;
    private String descripcion;
    private Boolean esActivo;

}
