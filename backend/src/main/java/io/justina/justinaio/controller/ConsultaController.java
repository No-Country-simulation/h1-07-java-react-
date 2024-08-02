package io.justina.justinaio.controller;

import io.justina.justinaio.dto.ConsultaRequestMedico;
import io.justina.justinaio.dto.ConsultaRequestPaciente;
import io.justina.justinaio.services.ConsultaService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("consulta")
@RequiredArgsConstructor
@Tag(name = "Consulta")
public class ConsultaController {

    private final ConsultaService consultaService;

    @PostMapping("/crear-consulta-como-medico")
    public ResponseEntity<?> crearConsultaComoMedico(
            Authentication token,
            @RequestBody ConsultaRequestMedico consultaRequestMedico
    ){
        consultaService.crearConsultaComoMedico(consultaRequestMedico, token);
        return ResponseEntity.ok("La consulta con el paciente ha sido creada con exito!");
    }

    @GetMapping("/ver-consultas-de-un-medico")
    public ResponseEntity<?> verConsultasDeUnMedico(
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @RequestParam(name = "size", defaultValue = "10", required = false) int size,
            Authentication token
    ){
        return ResponseEntity.ok(consultaService.buscarConsultasDeUnMedico(page, size, token));
    }

    @GetMapping("/ver-consultas-de-un-medico-paciente")
    public ResponseEntity<?> verConsultasDeUnMedicoPaciente(
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @RequestParam(name = "size", defaultValue = "10", required = false) int size,
            Authentication token,
            Integer idPaciente
    ){
        return ResponseEntity.ok(consultaService.buscarConsultasDeUnMedicoPaciente(page, size, token, idPaciente));
    }

    @PostMapping("/crear-consulta-como-paciente")
    public ResponseEntity<?> crerConsultaComoPaciente (
            Authentication token,
            @RequestBody ConsultaRequestPaciente consultaRequestPaciente
    ){
        consultaService.crearConsultaComoPaciente(consultaRequestPaciente, token);
        return ResponseEntity.ok("La consulta con el paciente ha sido creada con exito!");
    }

    @GetMapping("/ver-consultas-de-un-paciente")
    public ResponseEntity<?> verConsultasDeUnPaciente(
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @RequestParam(name = "size", defaultValue = "10", required = false) int size,
            Authentication token
    ){
        return ResponseEntity.ok(consultaService.buscarConsultasDeUnPaciente(page, size, token));
    }

    @GetMapping("/ver-consultas-de-un-paciente-medico")
    public ResponseEntity<?> verConsultasDeUnPacienteMedico(
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @RequestParam(name = "size", defaultValue = "10", required = false) int size,
            Authentication token,
            Integer idMedico
    ){
        return ResponseEntity.ok(consultaService.buscarConsultasDeUnPacienteMedico(page, size, token, idMedico));
    }

    @DeleteMapping("/eliminar-consulta")
    public ResponseEntity<?> eliminarConsulta(
            @RequestParam Integer idConsulta
    ){
        return ResponseEntity.ok(consultaService.eliminarConsulta(idConsulta));
    }
}
