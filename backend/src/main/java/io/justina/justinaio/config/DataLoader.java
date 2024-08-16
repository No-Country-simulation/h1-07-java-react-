package io.justina.justinaio.config;

import io.justina.justinaio.model.*;
import io.justina.justinaio.repositories.MedicamentoRepository;
import io.justina.justinaio.repositories.*;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Component
@AllArgsConstructor
public class DataLoader implements CommandLineRunner {

    private final RolRepository roleRepository;
    private final EspecialidadRepository especialidadRepository;
    private final FinanciadorRepository financiadorRepository;
    private final TipoDocumentoRepository tipoDocumentoRepository;
    private final PatologiaRepository patologiaRepository;
    private final EntidadRepository entidadRepository;
    private final MedicamentoRepository medicamentoRepository;
    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        // Cargar roles
        loadRoles();

        // Cargar especialidades
        loadEspecialidades();

        // Cargar financiadores
        loadFinanciadores();

        // Cargar tipos de documento
        loadTiposDocumento();

        // Cargar patologías
        loadPatologias();

        // Cargar entidades
        loadEntidades();

        // Cargar medicamentos
        loadMedicamentos();

       //createAdminUser();
    }
    // se usa una unica vez por db.
    /*private void createAdminUser() {
        // Verificar si ya existe un usuario admin
        if (usuarioRepository.findByEmail("admin@admin.com").isEmpty()) {
            // Buscar el rol ROLE_ADMIN
            Optional<Rol> adminRole = roleRepository.findByNombre("ROLE_ADMIN");

            if (adminRole.isPresent()) {
                Usuario adminUser = Usuario.builder()
                        .email("admin@admin.com")
                        .password(passwordEncoder.encode("admin@admin.com"))
                        .roles(List.of(adminRole.get()))
                        .enabled(true)
                        .accountLocked(false)
                        .createdDate(LocalDateTime.now())
                        .lastModifiedDate(LocalDateTime.now())
                        .build();

                usuarioRepository.save(adminUser);
            }
        }
    }*/

    private void loadRoles() {
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
    }

    private void loadEspecialidades() {
        List<String> especialidades = Arrays.asList("Cardiología", "Neurología", "Pediatría");

        especialidades.forEach(nombreEspecialidad -> {
            if (!especialidadRepository.existsByNombre(nombreEspecialidad)) {
                Especialidad especialidad = Especialidad.builder()
                        .nombre(nombreEspecialidad)
                        .build();
                especialidadRepository.save(especialidad);
            }
        });
    }

    private void loadFinanciadores() {
        List<Financiador> financiadores = Arrays.asList(
                Financiador.builder().nombre("OSDE").descripcion("Descripción para OSDE").esActivo(true).build(),
                Financiador.builder().nombre("Swiss Medical").descripcion("Descripción para Swiss Medical").esActivo(true).build(),
                Financiador.builder().nombre("Galeno").descripcion("Descripción para Galeno").build()
        );

        financiadores.forEach(financiador -> {
            if (!financiadorRepository.existsByNombre(financiador.getNombre())) {
                financiadorRepository.save(financiador);
            }
        });
    }

    private void loadTiposDocumento() {
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

    private void loadPatologias() {
        List<Patologia> patologias = Arrays.asList(
                Patologia.builder().nombre("Cáncer").descripcion("Descripción para Cáncer").build(),
                Patologia.builder().nombre("Epilepsia").descripcion("Descripción para Epilepsia").build(),
                Patologia.builder().nombre("Asma").descripcion("Descripción para Asma").build()
        );

        patologias.forEach(patologia -> {
            if (!patologiaRepository.existsByNombre(patologia.getNombre())) {
                patologiaRepository.save(patologia);
            }
        });
    }

    private void loadEntidades() {
        List<Entidad> entidades = Arrays.asList(
                Entidad.builder().nombre("Hospital X").descripcion("Descripción para Hospital X").build(),
                Entidad.builder().nombre("Clínica Y").descripcion("Descripción para Clínica Y").build(),
                Entidad.builder().nombre("Centro Médico Z").descripcion("Descripción para Centro Médico Z").build()
        );

        entidades.forEach(entidad -> {
            if (!entidadRepository.existsByNombre(entidad.getNombre())) {
                entidadRepository.save(entidad);
            }
        });
    }

    private void loadMedicamentos() {
        List<Medicamento> medicamentos = Arrays.asList(
                Medicamento.builder().nombre("Medicamento A").descripcion("Descripción para Medicamento A").build(),
                Medicamento.builder().nombre("Medicamento B").descripcion("Descripción para Medicamento B").build(),
                Medicamento.builder().nombre("Medicamento C").descripcion("Descripción para Medicamento C").build()
        );

        medicamentos.forEach(medicamento -> {
            if (!medicamentoRepository.existsByNombre(medicamento.getNombre())) {
                medicamentoRepository.save(medicamento);
            }
        });
    }
}

