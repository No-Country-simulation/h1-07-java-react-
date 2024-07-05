package io.justina.justinaio.config;

import io.justina.justinaio.model.Especialidad;
import io.justina.justinaio.model.Financiador;
import io.justina.justinaio.model.Rol;
import io.justina.justinaio.model.TipoDocumento;
import io.justina.justinaio.repositories.EspecialidadRepository;
import io.justina.justinaio.repositories.FinanciadorRepository;
import io.justina.justinaio.repositories.RolRepository;
import io.justina.justinaio.repositories.TipoDocumentoRepository;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

@Component
@AllArgsConstructor
public class DataLoader implements CommandLineRunner {

    private final RolRepository roleRepository;
    private final EspecialidadRepository especialidadRepository;
    private final FinanciadorRepository financiadorRepository;
    private final TipoDocumentoRepository tipoDocumentoRepository;

    @Override
    public void run(String... args) throws Exception {
        List<String> roleNames = Arrays.asList("ROLE_PACIENTE", "ROLE_ADMIN", "ROLE_MEDICO", "ROLE_OTRO");

        roleNames.forEach(roleName -> {
            if (!roleRepository.existsByNombre(roleName)) {
                Rol role = Rol.builder()
                        .nombre(roleName)
                        .createdDate(LocalDateTime.now())
                        .lastModifiedDate(LocalDateTime.now())
                        .build();
                roleRepository.save(role);
            }
        });

        List<String> especialidades = Arrays.asList("Cardiología", "Neurología", "Pediatría");

        especialidades.forEach(nombreEspecialidad -> {
            if (!especialidadRepository.existsByNombre(nombreEspecialidad)) {
                Especialidad especialidad = Especialidad.builder()
                        .nombre(nombreEspecialidad)
                        .build();
                especialidadRepository.save(especialidad);
            }
        });

        List<String> financiadores = Arrays.asList("OSDE", "Swiss Medical", "Galeno");

        financiadores.forEach(nombreFinanciador -> {
            if (!financiadorRepository.existsByNombre(nombreFinanciador)) {
                Financiador financiador = Financiador.builder()
                        .nombre(nombreFinanciador)
                        .descripcion("Descripción para " + nombreFinanciador)
                        .build();
                financiadorRepository.save(financiador);
            }
        });

        List<String> documentos = Arrays.asList("DNI", "LC");

        documentos.forEach(descripcion -> {
            if (!tipoDocumentoRepository.existsByDescripcion(descripcion)) {
                TipoDocumento tipoDocumento = TipoDocumento.builder()
                        .descripcion(descripcion)
                        .build();
                tipoDocumentoRepository.save(tipoDocumento);
            }
        });
    }
}
