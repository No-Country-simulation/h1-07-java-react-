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
@Table(name = "disponibilidad")
@EntityListeners(AuditingEntityListener.class)
public class Disponibilidad {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idDisponibilidad;

    private Integer entrada;

    private Integer salida;

    private Integer inicioDescanso;

    private Integer finDescanso;

    private String[] dias;

    @OneToOne(mappedBy = "disponibilidad")
    private Medico medico;

    public Long totalDeTurnos() {
        int horasTrabajo = salida - entrada;
        int horasDescanso = (inicioDescanso >= entrada && finDescanso <= salida) ? (finDescanso - inicioDescanso) : 0;
        return (long) (horasTrabajo - horasDescanso);
    }
}
