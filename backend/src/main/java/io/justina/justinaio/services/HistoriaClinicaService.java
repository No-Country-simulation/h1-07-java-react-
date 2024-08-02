package io.justina.justinaio.services;

import io.justina.justinaio.dto.CasoClinicoRequest;
import io.justina.justinaio.dto.CasoClinicoResponse;
import io.justina.justinaio.model.CasoClinico;
import io.justina.justinaio.model.Medico;
import io.justina.justinaio.model.Paciente;
import io.justina.justinaio.model.Usuario;
import io.justina.justinaio.repositories.HistoriaClinicaRepository;
import io.justina.justinaio.repositories.MedicoRepository;
import io.justina.justinaio.repositories.PacienteRepository;
import io.justina.justinaio.util.Mapper;
import io.justina.justinaio.util.PageResponse;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

@Service
@AllArgsConstructor
public class HistoriaClinicaService {

    private final HistoriaClinicaRepository historiaClinicaRepository;
    private final MedicoRepository medicoRepository;
    private final PacienteRepository pacienteRepository;

    public void CrearCaso(Authentication token, CasoClinicoRequest request) {
        Usuario userMedico = (Usuario) token.getPrincipal();
        CasoClinico casoClinico = CasoClinico.builder()
                .paciente(obtenerPacientePorId(request.getIdPaciente()))
                .medico(obtenerMedicoPorId(userMedico.getId()))
                .fecha(LocalDate.now())
                .titulo(request.getTitulo())
                .descripcion(request.getDescripcion())
                .esActivo(true)
                .build();
        historiaClinicaRepository.save(casoClinico);
    }

    public PageResponse<CasoClinicoResponse> ObtenerHistoriaClinicaPorIdPaciente(
            Integer idPaciente, Authentication token, int page, int size) {
        Usuario user = (Usuario) token.getPrincipal();
        Paciente paciente = obtenerPacientePorId(idPaciente);

        if (!esPacienteOEsMedicoDelPaciente(user, paciente)) {
            throw new SecurityException("Acceso denegado");
        }

        Pageable pageable = PageRequest.of(page, size, Sort.by("fecha").descending());
        Page <CasoClinico> historia = historiaClinicaRepository.findByPacienteIdPaciente(idPaciente, pageable);

        List<CasoClinicoResponse> historiaResponse = historia.stream().map(Mapper::toCasoClinicoResponse).toList();

        return new PageResponse<>(
                historiaResponse,
                historia.getNumber(),
                historia.getSize(),
                historia.getTotalElements(),
                historia.getTotalPages(),
                historia.isFirst(),
                historia.isLast()
        );
    }

    private Medico obtenerMedicoPorId(Integer id) {
        return medicoRepository.findById(id)
                .orElseThrow(() -> new NullPointerException("No se encuentra logueado el médico"));
    }

    private Paciente obtenerPacientePorId(Integer id) {
        return pacienteRepository.findById(id)
                .orElseThrow(() -> new NullPointerException("No se encuentra el paciente en la DB con ese ID"));
    }

    private boolean esPacienteOEsMedicoDelPaciente(Usuario user, Paciente paciente) {
        if (Objects.equals(user.getId(), paciente.getIdPaciente())) {
            return true;
        }

        return paciente.getMedicos().stream()
                .anyMatch(medico -> Objects.equals(medico.getIdMedico(), user.getId()));
    }

    public CasoClinicoResponse ObtenerCasoClinicoPorId(Integer idCaso, Authentication token) {
        Usuario user = (Usuario) token.getPrincipal();
        CasoClinico caso = historiaClinicaRepository.findById(idCaso)
                .orElseThrow(() -> new NullPointerException("No se encuentra el caso en la DB con ese ID"));
        if (esPacienteOEsMedicoDelPaciente(user, caso.getPaciente())) {
            throw new SecurityException("Acceso denegado");
        }
        return Mapper.toCasoClinicoResponse(caso);
    }
}
