package io.justina.justinaio.util;

import io.justina.justinaio.dto.BusquedaDonanteRequest;
import io.justina.justinaio.model.Donante;
import org.springframework.data.jpa.domain.Specification;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.Path;
import jakarta.persistence.criteria.Predicate;
import java.time.LocalDate;

public class DonanteSpecification {

    public static Specification<Donante> buildSpecification(BusquedaDonanteRequest request) {
        return (root, query, cb) -> {
            Predicate p = cb.conjunction();

            if (request.getTexto() != null && !request.getTexto().isEmpty()) {
                p = cb.and(p, cb.like(cb.lower(root.get("descripcion")), "%" + request.getTexto().toLowerCase() + "%"));
            }
            if (request.getGeneroOrdinal() != null) {
                p = cb.and(p, cb.equal(root.get("genero"), request.getGeneroOrdinal()));
            }
            if (request.getFactorSanguineoOrdinal() != null) {
                p = cb.and(p, cb.equal(root.get("factorSanguineo"), request.getFactorSanguineoOrdinal()));
            }
            if (request.getEdad() != null && request.getEdadFiltro() != null) {
                LocalDate birthDate = calculateBirthDateFromAge(request.getEdad());
                p = addDateComparisonPredicate(p, cb, root.get("fechaNacimiento"), birthDate, request.getEdadFiltro());
            }
            if (request.getPeso() != null && request.getPesoFiltro() != null) {
                p = addComparisonPredicate(p, cb, root.get("peso"), request.getPeso(), request.getPesoFiltro());
            }
            if (request.getAltura() != null && request.getAlturaFiltro() != null) {
                p = addComparisonPredicate(p, cb, root.get("altura"), request.getAltura(), request.getAlturaFiltro());
            }

            return p;
        };
    }

    private static Predicate addComparisonPredicate(Predicate p, CriteriaBuilder cb, Path<Integer> path, Integer value, String filter) {
        switch (filter.toLowerCase()) {
            case "mayor":
                return cb.and(p, cb.greaterThan(path, value));
            case "menor":
                return cb.and(p, cb.lessThan(path, value));
            case "igual":
                return cb.and(p, cb.equal(path, value));
            default:
                throw new IllegalArgumentException("Filtro no válido: " + filter);
        }
    }

    private static Predicate addDateComparisonPredicate(Predicate p, CriteriaBuilder cb, Path<LocalDate> path, LocalDate date, String filter) {
        switch (filter.toLowerCase()) {
            case "mayor":
                return cb.and(p, cb.lessThan(path, date));
            case "menor":
                return cb.and(p, cb.greaterThan(path, date));
            case "igual":
                return cb.and(p, cb.equal(path, date));
            default:
                throw new IllegalArgumentException("Filtro no válido: " + filter);
        }
    }

    private static LocalDate calculateBirthDateFromAge(Integer age) {
        return LocalDate.now().minusYears(age);
    }
}
