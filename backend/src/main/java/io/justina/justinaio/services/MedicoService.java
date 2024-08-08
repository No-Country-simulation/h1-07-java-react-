
package io.justina.justinaio.services;

import io.justina.justinaio.dto.*;
import io.justina.justinaio.model.*;
import io.justina.justinaio.repositories.EspecialidadRepository;
import io.justina.justinaio.repositories.FinanciadorRepository;
import io.justina.justinaio.repositories.MedicoRepository;
import io.justina.justinaio.repositories.UsuarioRepository;
import io.justina.justinaio.util.Dias;
import io.justina.justinaio.util.Mapper;
import io.justina.justinaio.util.PageResponse;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MedicoService {
    private final MedicoRepository medicoRepository;

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;
    private final EspecialidadRepository especialidadRepository;
    private final FinanciadorRepository financiadorRepository;

    private final DisponibilidadService disponibilidadService;
    private final ConsultaService consultaService;

    @Transactional
    public void crearMedico(MedicoRequest medicoRequest, Authentication token) {
        if (medicoRequest.getEspecialidad() == null) {
            throw new NullPointerException("Médico sin especialidad asignada");
        }

        if (medicoRequest.getFinanciadores() == null || medicoRequest.getFinanciadores().isEmpty()) {
            throw new NullPointerException("Médico tiene que tener financiadores");
        }

        Optional<Especialidad> especialidadOpt = especialidadRepository.findById(medicoRequest.getEspecialidad());
        if (!especialidadOpt.isPresent()) {
            throw new NullPointerException("Especialidad no encontrada");
        }
        Especialidad especialidad = especialidadOpt.get();

        List<Financiador> financiadores = medicoRequest.getFinanciadores().stream()
                .map(id -> financiadorRepository.findById(id)
                        .orElseThrow(() -> new NullPointerException("Financiador no encontrado con ID: " + id)))
                .collect(Collectors.toList());

        Usuario usuario = (Usuario) token.getPrincipal();

        Medico medico = Mapper.toMedico(medicoRequest, especialidad, financiadores);
        medico.setIdMedico(usuario.getId());
        medicoRepository.save(medico);
    }

    @Transactional
    public void modificarMedico(MedicoRequest medicoRequest, Authentication token) {
        Usuario usuario = (Usuario) token.getPrincipal();
        Medico medico = medicoRepository.findById(usuario.getId()).orElseThrow(
                () -> new NullPointerException("Medico a modificar no encontrado"));

        if (medicoRequest.getEspecialidad() != null) {
            Optional<Especialidad> especialidadOpt = especialidadRepository.findById(medicoRequest.getEspecialidad());
            especialidadOpt.ifPresent(medico::setEspecialidad);
        }

        if (medicoRequest.getFinanciadores() != null && !medicoRequest.getFinanciadores().isEmpty()) {
            List<Financiador> financiadores = medicoRequest.getFinanciadores().stream()
                    .filter(id -> id != null)
                    .map(id -> financiadorRepository.findById(id)
                            .orElseThrow(() -> new NullPointerException("Financiador no encontrado con ID: " + id)))
                    .collect(Collectors.toList());
            medico.setFinanciadores(financiadores);
        }

        if (medicoRequest.getApellido() != null) {
            medico.setApellido(medicoRequest.getApellido());
        }
        if (medicoRequest.getNombre() != null) {
            medico.setNombre(medicoRequest.getNombre());
        }
        if (medicoRequest.getLicencia() != null) {
            medico.setLicencia(medicoRequest.getLicencia());
        }
        if (medicoRequest.getLocalidad() != null) {
            medico.setLocalidad(medicoRequest.getLocalidad());
        }
        if (medicoRequest.getProvincia() != null) {
            medico.setProvincia(medicoRequest.getProvincia());
        }
        if (medicoRequest.getTelefono() != null) {
            medico.setTelefono(medicoRequest.getTelefono());
        }
        medicoRepository.save(medico);
    }

    @Transactional
    public void modificarPassword(PasswordRequest passwordRequest, Authentication token) {
        Usuario usuario = (Usuario) token.getPrincipal();
        if(usuario == null) {
            throw new NullPointerException("Usuario no encontrado");
        }
        usuario.setPassword(passwordEncoder.encode(passwordRequest.getPassword()));
        usuarioRepository.save(usuario);
    }

    public void bajaMedico(BajaRequest bajaRequest) {
        medicoRepository.findById(bajaRequest.getIdUsuario()).orElseThrow(() ->
                new NullPointerException("El ID no corresponde a medico válido"));

        Usuario usuarioMedico = usuarioRepository.findById(bajaRequest.getIdUsuario()).orElseThrow(()
                -> new NullPointerException("Medico no encontrado con ese ID"));

        if(!usuarioMedico.isAccountLocked())
            usuarioMedico.setAccountLocked(true);
        else
            throw new NullPointerException("Medico ya dado de baja");

        usuarioRepository.save(usuarioMedico);
    }

    public PageResponse<MedicoResponse> encontrarMedicoPorIdPaciente(int page, int size, Authentication token) {
        Usuario user = ((Usuario) token.getPrincipal());
        Pageable pageable = PageRequest.of(page, size, Sort.by("apellido").ascending());
        Page<Medico> medicos = medicoRepository.findAllByPacientesIdPaciente(pageable, user.getId());
        List<MedicoResponse> listaResponse = medicos.stream()
                .map(Mapper::toMedicoResponse)
                .toList();
        return new PageResponse<>(
                listaResponse,
                medicos.getNumber(),
                medicos.getSize(),
                medicos.getTotalElements(),
                medicos.getTotalPages(),
                medicos.isFirst(),
                medicos.isLast()
        );
    }

    public MedicoResponse buscarMedicoConectado(Authentication token) {
        Usuario userMedico = (Usuario) token.getPrincipal();

        Medico medico = medicoRepository.findById(userMedico.getId()).orElseThrow(() -> new NullPointerException("Medico no encontrado"));
        return Mapper.toMedicoResponse(medico);
    }

    @Transactional
    public void crearDisponibilidad(DisponibilidadRequest disponibilidadRequest, Authentication token) {
        Usuario usuario = (Usuario) token.getPrincipal();
        Medico medico = medicoRepository.findById(usuario.getId()).orElseThrow(
                () -> new NullPointerException("Medico no encontrado"));

        if(medico.getDisponibilidad() != null){
            throw new NullPointerException("Ya tiene datos de disponibilidad creados");
        }
        if(disponibilidadRequest.getEntrada() < 1 || disponibilidadRequest.getEntrada() > 24){
            throw new NullPointerException("Horario de entrada por fuera de los parámetros.");
        }
        if(disponibilidadRequest.getSalida() < 1 || disponibilidadRequest.getSalida() > 24){
            throw new NullPointerException("Horario de salida por fuera de los parámetros.");
        }
        if(disponibilidadRequest.getInicioDescanso() < 1 || disponibilidadRequest.getInicioDescanso() > 24){
            throw new NullPointerException("Horario de inicio del descanso por fuera de los parámetros.");
        }
        if(disponibilidadRequest.getFinDescanso() < 1 || disponibilidadRequest.getFinDescanso() > 24){
            throw new NullPointerException("Horario de fin del descanso por fuera de los parámetros.");
        }

        medico.setDisponibilidad(disponibilidadService.crearDisponibilidad(disponibilidadRequest, medico));
        medicoRepository.save(medico);
    }

    @Transactional
    public void modificarDisponibilidad(DisponibilidadRequest disponibilidadRequest, Authentication token) {
        Usuario usuario = (Usuario) token.getPrincipal();
        Medico medico = medicoRepository.findById(usuario.getId()).orElseThrow(
                () -> new NullPointerException("Medico no encontrado"));

        if(medico.getDisponibilidad() == null){
            throw new NullPointerException("No tiene datos guardados sobre su disponibilidad");
        }
        if(disponibilidadRequest.getEntrada() < 1 || disponibilidadRequest.getEntrada() > 24){
            throw new NullPointerException("Horario de entrada por fuera de los parámetros.");
        }
        if(disponibilidadRequest.getSalida() < 1 || disponibilidadRequest.getSalida() > 24){
            throw new NullPointerException("Horario de salida por fuera de los parámetros.");
        }
        if(disponibilidadRequest.getInicioDescanso() < 1 || disponibilidadRequest.getInicioDescanso() > 24){
            throw new NullPointerException("Horario de inicio del descanso por fuera de los parámetros.");
        }
        if(disponibilidadRequest.getFinDescanso() < 1 || disponibilidadRequest.getFinDescanso() > 24){
            throw new NullPointerException("Horario de fin del descanso por fuera de los parámetros.");
        }

        medico.setDisponibilidad(disponibilidadService.modificarDisponibilidad(disponibilidadRequest, medico.getDisponibilidad()));
        medicoRepository.save(medico);

    }

    public DisponibilidadResponse buscarDisponibilidad(Authentication token) {
        Usuario usuario = (Usuario) token.getPrincipal();
        Medico medico = medicoRepository.findById(usuario.getId()).orElseThrow(
                () -> new NullPointerException("Medico no encontrado"));

        return disponibilidadService.buscarDisponibilidad(medico.getIdMedico());
    }

    public ArrayList<String> fechaDisponibilidad(Integer idMedico) {

        Medico medico = medicoRepository.findById(idMedico).orElseThrow(
                () -> new NullPointerException("Medico no encontrado"));

        ArrayList<String> listaFechas = new ArrayList<>();
        LocalDate today = LocalDate.now();
        DateTimeFormatter formatter = DateTimeFormatter.ISO_LOCAL_DATE;
        Dias dias = new Dias(medico.getDisponibilidad().getDias());
        for (LocalDate date = today; date.isBefore(today.plusDays(91)); date = date.plusDays(1)) {
            if (dias.comprobar(date.getDayOfWeek())) {
                listaFechas.add(date.format(formatter));
            }
        }
        Long nTurnos = medico.getDisponibilidad().totalDeTurnos();
        List<String> listaQuitarDias = consultaService.listarConsultasDeUnMedico(medico, nTurnos);
        for (String item : listaQuitarDias) {
            listaFechas.remove(item);
        }

        return listaFechas;
    }

    public ArrayList<Integer> horarioDisponibilidad(Integer idMedico, String fecha) {

        Medico medico = medicoRepository.findById(idMedico).orElseThrow(
                () -> new NullPointerException("Medico no encontrado"));

        ArrayList<Integer> listaHorarios = new ArrayList<>();
        Integer entrada = medico.getDisponibilidad().getEntrada();
        Integer inicioDescanso = medico.getDisponibilidad().getInicioDescanso();
        for (int i = entrada; i < inicioDescanso; i++) {
            listaHorarios.add(i);
        }
        Integer finDescanso = medico.getDisponibilidad().getFinDescanso();
        Integer salida = medico.getDisponibilidad().getSalida();
        for (int i = finDescanso; i < salida; i++) {
            listaHorarios.add(i);
        }
        List<Integer> listaQuitarHorarios = consultaService.listarHorariosDeUnMedico(medico, fecha);
        for (Integer item : listaQuitarHorarios) {
            listaHorarios.remove(item);
        }

        return listaHorarios;
    }

}

