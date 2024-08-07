package io.justina.justinaio.services;

import io.justina.justinaio.dto.ConsultaRequestMedico;
import io.justina.justinaio.dto.ConsultaRequestPaciente;
import io.justina.justinaio.dto.ConsultaResponse;
import io.justina.justinaio.dto.MedicoResponse;
import io.justina.justinaio.model.Consulta;
import io.justina.justinaio.model.Medico;
import io.justina.justinaio.model.Paciente;
import io.justina.justinaio.model.Usuario;
import io.justina.justinaio.repositories.ConsultaRepository;
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
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class ConsultaService {

    private final ConsultaRepository consultaRepository;
    private final PacienteRepository pacienteRepository;
    private final MedicoRepository medicoRepository;

    public List<String> listarConsultasDeUnMedico(Medico medico, Long nTurnos) {
        return consultaRepository.listarConsultasDeUnMedico(medico, nTurnos);
    }

    public List<Integer> listarHorariosDeUnMedico(Medico medico, String fecha) {
        return consultaRepository.listarHorariosDeUnMedico(medico, fecha);
    }

    @Transactional
    public void crearConsultaComoMedico(ConsultaRequestMedico consultaRequestMedico, Authentication token) {

        if (consultaRequestMedico.getFecha() == null || consultaRequestMedico.getFecha().isEmpty()) {
            throw new NullPointerException("La fecha de la consulta no puede ser nula o estar vacia.");
        }
        if (consultaRequestMedico.getHorario() == null) {
            throw new NullPointerException("El horario de la consulta no puede ser nulo");
        }

        Paciente paciente = pacienteRepository.findById(consultaRequestMedico.getIdPaciente()).orElseThrow(
                () -> new NullPointerException("Paciente no encontrado"));

        Usuario usuario = (Usuario) token.getPrincipal();
        Medico medico = medicoRepository.findById(usuario.getId()).orElseThrow(
                () -> new NullPointerException("Medico no encontrado"));

        Consulta consulta = Mapper.toConsultaMedico(consultaRequestMedico, medico, paciente);

        if (paciente.getConsultas() == null) {
            paciente.setConsultas(new ArrayList<>());
        }
        if (medico.getConsultas() == null) {
            medico.setConsultas(new ArrayList<>());
        }

        paciente.getConsultas().add(consulta);
        medico.getConsultas().add(consulta);

        consultaRepository.save(consulta);
        pacienteRepository.save(paciente);
        medicoRepository.save(medico);
    }

    public PageResponse<ConsultaResponse> buscarConsultasDeUnMedico(int page, int size, Authentication token) {
        Usuario user = ((Usuario) token.getPrincipal());
        Pageable pageable = PageRequest.of(page, size, Sort.by("fecha").ascending());
        Page<Consulta> consultas = consultaRepository.findAllByMedicoId(pageable, user.getId());
        List<ConsultaResponse> listaResponse = consultas.stream()
                .map(Mapper::toConsultaResponse)
                .toList();
        return new PageResponse<>(
                listaResponse,
                consultas.getNumber(),
                consultas.getSize(),
                consultas.getTotalElements(),
                consultas.getTotalPages(),
                consultas.isFirst(),
                consultas.isLast()
        );
    }

    public PageResponse<ConsultaResponse> buscarConsultasDeUnMedicoPaciente(int page, int size, Authentication token, Integer idPaciente) {
        Usuario user = ((Usuario) token.getPrincipal());
        Pageable pageable = PageRequest.of(page, size, Sort.by("fecha").ascending());
        Page<Consulta> consultas = consultaRepository.findAllByMedicoIdAndPacienteId(pageable, user.getId(), idPaciente);
        List<ConsultaResponse> listaResponse = consultas.stream()
                .map(Mapper::toConsultaResponse)
                .toList();
        return new PageResponse<>(
                listaResponse,
                consultas.getNumber(),
                consultas.getSize(),
                consultas.getTotalElements(),
                consultas.getTotalPages(),
                consultas.isFirst(),
                consultas.isLast()
        );
    }

    public void crearConsultaComoPaciente(ConsultaRequestPaciente consultaRequestPaciente, Authentication token) {
        if (consultaRequestPaciente.getFecha() == null || consultaRequestPaciente.getFecha().isEmpty()) {
            throw new NullPointerException("La fecha de la consulta no puede ser nula o estar vacia.");
        }
        if (consultaRequestPaciente.getHorario() == null) {
            throw new NullPointerException("El horario de la consulta no puede ser nulo");
        }

        Medico medico = medicoRepository.findById(consultaRequestPaciente.getIdMedico()).orElseThrow(
                () -> new NullPointerException("Medico no encontrado"));

        Usuario usuario = (Usuario) token.getPrincipal();
        Paciente paciente = pacienteRepository.findById(usuario.getId()).orElseThrow(
                () -> new NullPointerException("Paciente no encontrado"));

        Consulta consulta = Mapper.toConsultaPaciente(consultaRequestPaciente, medico, paciente);

        if (paciente.getConsultas() == null) {
            paciente.setConsultas(new ArrayList<>());
        }
        if (medico.getConsultas() == null) {
            medico.setConsultas(new ArrayList<>());
        }

        paciente.getConsultas().add(consulta);
        medico.getConsultas().add(consulta);

        consultaRepository.save(consulta);
        pacienteRepository.save(paciente);
        medicoRepository.save(medico);
    }


    public PageResponse<ConsultaResponse> buscarConsultasDeUnPaciente(int page, int size, Authentication token) {
        Usuario user = ((Usuario) token.getPrincipal());
        Pageable pageable = PageRequest.of(page, size, Sort.by("fecha").ascending());
        Page<Consulta> consultas = consultaRepository.findAllByPacienteId(pageable, user.getId());
        List<ConsultaResponse> listaResponse = consultas.stream()
                .map(Mapper::toConsultaResponse)
                .toList();
        return new PageResponse<>(
                listaResponse,
                consultas.getNumber(),
                consultas.getSize(),
                consultas.getTotalElements(),
                consultas.getTotalPages(),
                consultas.isFirst(),
                consultas.isLast()
        );
    }

    public PageResponse<ConsultaResponse> buscarConsultasDeUnPacienteMedico(int page, int size, Authentication token, Integer idMedico) {
        Usuario user = ((Usuario) token.getPrincipal());
        Pageable pageable = PageRequest.of(page, size, Sort.by("fecha").ascending());
        Page<Consulta> consultas = consultaRepository.findAllByMedicoIdAndPacienteId(pageable, idMedico , user.getId());
        List<ConsultaResponse> listaResponse = consultas.stream()
                .map(Mapper::toConsultaResponse)
                .toList();
        return new PageResponse<>(
                listaResponse,
                consultas.getNumber(),
                consultas.getSize(),
                consultas.getTotalElements(),
                consultas.getTotalPages(),
                consultas.isFirst(),
                consultas.isLast()
        );
    }

    public String eliminarConsulta(Integer idConsulta) {
        Consulta consulta = consultaRepository.findById(idConsulta).orElseThrow(
                () -> new NullPointerException("Consulta no encontrada"));;

            consultaRepository.delete(consulta);

            return ("Consulta eliminada con éxito!");
    }

}
