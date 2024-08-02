package io.justina.justinaio.services;

import io.justina.justinaio.dto.BusquedaDonanteRequest;
import io.justina.justinaio.dto.DonanteRequest;
import io.justina.justinaio.dto.DonanteResponse;
import io.justina.justinaio.dto.MedicoDonanteRequest;
import io.justina.justinaio.model.Donante;
import io.justina.justinaio.model.Medico;
import io.justina.justinaio.model.Paciente;
import io.justina.justinaio.model.Usuario;
import io.justina.justinaio.repositories.DonanteRepository;
import io.justina.justinaio.repositories.MedicoRepository;
import io.justina.justinaio.repositories.PacienteRepository;
import io.justina.justinaio.util.DonanteSpecification;
import io.justina.justinaio.util.Mapper;
import io.justina.justinaio.util.PageResponse;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class DonanteService {

    private final DonanteRepository donanteRepository;

    private final MedicoRepository medicoRepository;

    private final PacienteRepository pacienteRepository;

    public void crearDonante(DonanteRequest donanteRequest, Authentication token) {
        Usuario userMedico = (Usuario) token.getPrincipal();
        Medico medico = medicoRepository.findById(userMedico.getId()).orElseThrow(
                () -> new IllegalArgumentException("Medico no encontrado"));

        Paciente paciente = pacienteRepository.findById(donanteRequest.getPacienteId()).orElseThrow(
                () -> new IllegalArgumentException("Paciente no encontrado"));

        Donante donante = Mapper.toDonante(donanteRequest,medico, paciente);
        donanteRepository.save(donante);
    }

    public PageResponse<DonanteResponse> buscarDonantes(int page, int size, BusquedaDonanteRequest busquedaRequest, Authentication token) {
        Usuario userMedico = (Usuario) token.getPrincipal();
        Medico medico = medicoRepository.findById(userMedico.getId()).orElseThrow(
                () -> new IllegalArgumentException("Medico no encontrado, acceso denegado"));

        Pageable pageable = PageRequest.of(page, size);
        Specification<Donante> spec = DonanteSpecification.containsTextInAttributes(busquedaRequest);
        Page<Donante> donantes = donanteRepository.findAll(spec, pageable);
        List<DonanteResponse> donantesResponse = donantes.stream()
                .map(Mapper::toDonanteResponse)
                .toList();
        return new PageResponse<>(
                donantesResponse,
                donantes.getNumber(),
                donantes.getSize(),
                donantes.getTotalElements(),
                donantes.getTotalPages(),
                donantes.isFirst(),
                donantes.isLast()
        );
    }

    public MedicoDonanteRequest buscarDonante(Integer idDonante) {
        Donante donante = donanteRepository.findById(idDonante).orElseThrow(
                () -> new IllegalArgumentException("Donante no encontrado, acceso denegado"));
        return Mapper.toMedicoDonanteRequest(donante.getMedico());
    }
}