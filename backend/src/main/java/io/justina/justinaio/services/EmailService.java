package io.justina.justinaio.services;

import io.justina.justinaio.model.HorarioToma;
import io.justina.justinaio.model.Usuario;
import io.justina.justinaio.model.enums.EmailTemplateName;
import io.justina.justinaio.repositories.UsuarioRepository;
import io.justina.justinaio.security.Token;
import io.justina.justinaio.security.TokenRepository;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring6.SpringTemplateEngine;

import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

import static java.nio.charset.StandardCharsets.UTF_8;
import static org.springframework.mail.javamail.MimeMessageHelper.MULTIPART_MODE_MIXED;

@Service
@Slf4j
@RequiredArgsConstructor
public class EmailService {
    private final JavaMailSender mailSender;
    private final SpringTemplateEngine templateEngine;
    private final TokenRepository tokenRepository;
    private final UsuarioRepository usuarioRepository;

    @Value("${application.mailing.frontend.activation-url}")
    private String activationUrl;

    @Async
    public void sendEmail(
            String to,
            String username,
            EmailTemplateName emailTemplate,
            String confirmationUrl,
            String activationCode,
            String subject
    ) throws MessagingException {
        String templateName = (emailTemplate == null) ? "confirm-email" : emailTemplate.name();

        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, MULTIPART_MODE_MIXED, UTF_8.name());

        Map<String, Object> properties = new HashMap<>();
        properties.put("username", username);
        properties.put("confirmationUrl", confirmationUrl);
        properties.put("activation_code", activationCode);

        Context context = new Context();
        context.setVariables(properties);

        helper.setFrom("PetNetNoResponder@gmail.com"); // Actualiza la dirección de correo de origen aquí
        helper.setTo(to);
        helper.setSubject(subject);

        String template = templateEngine.process(templateName, context);
        helper.setText(template, true);

        mailSender.send(mimeMessage);
    }

    private String generateAndSaveActivationToken(Usuario user) {
        String generatedToken = generateActivationCode(6);
        var token = Token.builder()
                .token(generatedToken)
                .createdAt(LocalDateTime.now())
                .expiresAt(LocalDateTime.now().plusMinutes(15))
                .user(user)
                .build();
        tokenRepository.save(token);
        return generatedToken;
    }

    public void sendValidationEmail(Usuario user) throws MessagingException {
        var newToken = generateAndSaveActivationToken(user);
        sendEmail(user.getEmail(), user.getName(), EmailTemplateName.ACTIVATE_ACCOUNT, activationUrl, newToken, "Account activation");
    }

    private String generateActivationCode(int length) {
        String characters = "0123456789";
        StringBuilder codeBuilder = new StringBuilder();
        SecureRandom secureRandom = new SecureRandom();
        for (int i = 0; i < length; i++) {
            int randomIndex = secureRandom.nextInt(characters.length());
            codeBuilder.append(characters.charAt(randomIndex));
        }
        return codeBuilder.toString();
    }

    @Async
    public void sendReminderEmail(HorarioToma horarioToma) {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper;

        Usuario usuarioPaciente = usuarioRepository.findById(horarioToma.getTratamiento().getPaciente().getIdPaciente())
                .orElseThrow(() -> new NullPointerException("Paciente no encontrado con ese ID"));

        try {
            helper = new MimeMessageHelper(mimeMessage, true);
            helper.setFrom("PetNetNoResponder@gmail.com");
            helper.setTo(usuarioPaciente.getEmail());
            helper.setSubject("Recordatorio de Toma de Medicamento");

            Map<String, Object> properties = new HashMap<>();
            properties.put("hora", horarioToma.getHora());
            properties.put("tratamiento", horarioToma.getTratamiento().getDescripcion());
            properties.put("idHorario", horarioToma.getIdHorario());

            Context context = new Context();
            context.setVariables(properties);

            String template = templateEngine.process("reminder-email", context);
            helper.setText(template, true);

            mailSender.send(mimeMessage);
        } catch (MessagingException e) {
            log.error("Error sending reminder email", e);
        }
    }
}
