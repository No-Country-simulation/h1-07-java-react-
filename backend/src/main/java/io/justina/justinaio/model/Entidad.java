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
@Table(name = "entidad")
@EntityListeners(AuditingEntityListener.class)
public class Entidad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Integer idEntidad;
    private String nombre;
    private String descripcion;
    private boolean esActivo;
}
