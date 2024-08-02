package io.justina.justinaio.services;

import io.justina.justinaio.dto.DisponibilidadRequest;
import io.justina.justinaio.dto.DisponibilidadResponse;
import io.justina.justinaio.model.Disponibilidad;
import io.justina.justinaio.model.Medico;
import io.justina.justinaio.repositories.DisponibilidadRepository;
import org.springframework.stereotype.Service;

import io.justina.justinaio.util.Mapper;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class DisponibilidadService {

    private final DisponibilidadRepository disponibilidadRepository;

    @Transactional
    public Disponibilidad crearDisponibilidad(DisponibilidadRequest disponibilidadRequest, Medico medico) {

        if (disponibilidadRequest.getEntrada() == null) {
            throw new IllegalArgumentException("Debe haber un horario de entrada.");
        }

        if (disponibilidadRequest.getSalida() == null) {
            throw new IllegalArgumentException("Debe haber un horario de salida.");
        }

        if (disponibilidadRequest.getInicioDescanso() == null) {
            throw new IllegalArgumentException("Debe haber un horario de inicio del descanso.");
        }

        if (disponibilidadRequest.getFinDescanso() == null) {
            throw new IllegalArgumentException("Debe haber un horario de fin del descanso.");
        }

        if (disponibilidadRequest.getDias() == null) {
            throw new IllegalArgumentException("Debe marcar sus días habiles de trabajo.");
        }

        return disponibilidadRepository.save(Mapper.toDisponibilidad(disponibilidadRequest, medico));
    }

    @Transactional
    public Disponibilidad modificarDisponibilidad(DisponibilidadRequest disponibilidadRequest, Disponibilidad disponibilidad) {

        if (disponibilidadRequest.getEntrada() != null) {
            disponibilidad.setEntrada(disponibilidadRequest.getEntrada());
        }

        if (disponibilidadRequest.getSalida() != null) {
            disponibilidad.setSalida(disponibilidadRequest.getSalida());
        }

        if (disponibilidadRequest.getInicioDescanso() != null) {
           disponibilidad.setInicioDescanso(disponibilidadRequest.getInicioDescanso());
        }

        if (disponibilidadRequest.getFinDescanso() != null) {
           disponibilidad.setFinDescanso(disponibilidadRequest.getFinDescanso());
        }

        if (disponibilidadRequest.getDias() != null) {
            disponibilidad.setDias(disponibilidadRequest.getDias());
        }

        return disponibilidadRepository.save(disponibilidad);
    }

    public DisponibilidadResponse buscarDisponibilidad(Integer idMedico) {
        Disponibilidad disponibilidad = disponibilidadRepository.findDisponibilidadByMedicoId(idMedico);
        return Mapper.toDisponibilidadResponse(disponibilidad);
    }
}
