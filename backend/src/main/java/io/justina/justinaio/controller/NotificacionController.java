package io.justina.justinaio.controller;

import io.justina.justinaio.dto.HorarioTomaRequest;
import io.justina.justinaio.dto.NotificacionResponse;
import io.justina.justinaio.model.Notificacion;
import io.justina.justinaio.model.Paciente;
import io.justina.justinaio.services.HorarioTomaService;
import io.justina.justinaio.services.NotificacionService;
import io.justina.justinaio.services.PacienteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class NotificacionController {

    private final NotificacionService notificacionService;
    private final PacienteService pacienteService;
    private final HorarioTomaService horarioTomaService;

    @GetMapping("/notificaciones-no-leidas")
    public ResponseEntity<List<NotificacionResponse>> obtenerNotificacionesNoleidas(Authentication token) {
        Paciente paciente = pacienteService.obtenerModeloPacienteConectado(token);
        return ResponseEntity.ok(notificacionService.obtenerNotificacionesNoLeidasPaciente(paciente));
    }
    @GetMapping("/notificaciones-totales")
    public ResponseEntity<List<NotificacionResponse>> obtenerNotificacionesTotales(Authentication token) {
        Paciente paciente = pacienteService.obtenerModeloPacienteConectado(token);
        return ResponseEntity.ok(notificacionService.obtenerTodasNotificacionesPaciente(paciente));
    }

    @PutMapping("/marcar-notificaciones-leidas")
    public ResponseEntity<?> marcarNotificacionesLeidas(Authentication token) {
        notificacionService.marcarNotificacionesLeidas(token);
        return ResponseEntity.ok("Notificaciones marcadas como leidas");
    }

    @PutMapping("/marcar-adherencia-hora-toma")
    public ResponseEntity<?> marcarAdherenciaHoraToma(
            Authentication token,
            HorarioTomaRequest horarioTomaRequest
            ) {
        horarioTomaService.marcarAdherenciaHoraToma(horarioTomaRequest, token);
        return ResponseEntity.ok("Adherencia marcada");
    }
    @PutMapping("/marcar-notificacion-leida-por-id-notificacion")
    public ResponseEntity<?> marcarNotificacionesLeidasPorHorario(
            Authentication token,
            @RequestParam Integer idNotificacion
    ) {
        notificacionService.marcarAdherenciaPorIdNotificacion(idNotificacion);
        return ResponseEntity.ok("Notificacion marcada como leida");
    }
}

