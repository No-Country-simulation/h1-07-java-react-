package io.justina.justinaio.handler;

import lombok.Getter;
import org.springframework.http.HttpStatus;

import javax.management.loading.MLetContent;

import static org.springframework.http.HttpStatus.BAD_REQUEST;
import static org.springframework.http.HttpStatus.FORBIDDEN;
import static org.springframework.http.HttpStatus.NOT_IMPLEMENTED;

public enum BusinessErrorCodes {
    NO_CODE(0, NOT_IMPLEMENTED, "Sin código"),
    INCORRECT_CURRENT_PASSWORD(300, BAD_REQUEST, "Contraseña incorrecta"),
    NEW_PASSWORD_DOES_NOT_MATCH(301, BAD_REQUEST, "Las contraseñas no coinciden"),
    ACCOUNT_LOCKED(302, FORBIDDEN, "La cuenta está bloqueada"),
    ACCOUNT_DISABLED(303, FORBIDDEN, "La cuenta está deshabilitada"),
    BAD_CREDENTIALS(304, FORBIDDEN, "Login y/o contraseñas requeridos"),
    TOKEN_REQUIRED(403, FORBIDDEN, "Token Requerido"),
    ACCESS_DENIED(403, FORBIDDEN, "Usuario sin autorización"),
    NULL_OBJECT(404, HttpStatus.NOT_FOUND, "Recurso no encontrado")
    ;

    @Getter
    private final int code;
    @Getter
    private final String description;
    @Getter
    private final HttpStatus httpStatus;

    BusinessErrorCodes(int code, HttpStatus status, String description) {
        this.code = code;
        this.description = description;
        this.httpStatus = status;
    }
}
