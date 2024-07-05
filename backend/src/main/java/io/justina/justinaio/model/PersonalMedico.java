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
@Table(name = "personal_medico")
@EntityListeners(AuditingEntityListener.class)
public class PersonalMedico {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idPersonalMedico;
    private String Descripcion;
}
