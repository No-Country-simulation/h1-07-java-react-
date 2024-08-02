package io.justina.justinaio.util;

import io.justina.justinaio.dto.BusquedaDonanteRequest;
import io.justina.justinaio.model.Donante;
import io.justina.justinaio.model.enums.FactorSanguineo;
import io.justina.justinaio.model.enums.Genero;
import org.springframework.data.jpa.domain.Specification;

import java.time.LocalDate;
import jakarta.persistence.criteria.Predicate;

public class DonanteSpecification {

    public static Specification<Donante> containsTextInAttributes(BusquedaDonanteRequest busquedaRequest) {
        return (root, query, criteriaBuilder) -> {
            Predicate combinedPredicate = criteriaBuilder.conjunction();

            if (busquedaRequest.getTexto() != null && !busquedaRequest.getTexto().isEmpty()) {
                String pattern = "%" + busquedaRequest.getTexto().toLowerCase() + "%";
                Predicate textPredicate = criteriaBuilder.or(
                        criteriaBuilder.like(criteriaBuilder.lower(root.get("nombre")), pattern),
                        criteriaBuilder.like(criteriaBuilder.lower(root.get("apellido")), pattern),
                        criteriaBuilder.like(criteriaBuilder.lower(root.get("altura").as(String.class)), pattern),
                        criteriaBuilder.like(criteriaBuilder.lower(root.get("peso").as(String.class)), pattern)
                );
                combinedPredicate = criteriaBuilder.and(combinedPredicate, textPredicate);
            }

            if (busquedaRequest.getGeneroOrdinal() != null) {
                Predicate genderPredicate = criteriaBuilder.equal(root.get("genero"), Genero.values()[busquedaRequest.getGeneroOrdinal()]);
                combinedPredicate = criteriaBuilder.and(combinedPredicate, genderPredicate);
            }

            if (busquedaRequest.getFactorSanguineoOrdinal() != null) {
                Predicate factorSanguineoPredicate = criteriaBuilder.equal(root.get("factorSanguineo"),
                        FactorSanguineo.values()[busquedaRequest.getFactorSanguineoOrdinal()]);
                combinedPredicate = criteriaBuilder.and(combinedPredicate, factorSanguineoPredicate);
            }

            if (busquedaRequest.getEdad() != null) {
                LocalDate currentDate = LocalDate.now();
                LocalDate birthDateFrom = currentDate.minusYears(busquedaRequest.getEdad() + 1).plusDays(1);
                LocalDate birthDateTo = currentDate.minusYears(busquedaRequest.getEdad());
                Predicate agePredicate = criteriaBuilder.between(root.get("fechaNacimiento"), birthDateFrom, birthDateTo);
                combinedPredicate = criteriaBuilder.and(combinedPredicate, agePredicate);
            }

            return combinedPredicate;
        };
    }
}
