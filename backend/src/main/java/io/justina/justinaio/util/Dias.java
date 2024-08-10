package io.justina.justinaio.util;

import java.time.DayOfWeek;
import java.util.Arrays;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class Dias {
    private String[] diasHabiles;
    public boolean comprobar(DayOfWeek diaEnIngles){
        String dia = "";
        switch (diaEnIngles){
            case MONDAY:
                dia = "LUNES";
                break;
            case TUESDAY:
                dia = "MARTES";
                break;
            case WEDNESDAY:
                dia = "MIERCOLES";
                break;
            case THURSDAY:
                dia = "JUEVES";
                break;
            case FRIDAY:
                dia = "VIERNES";
                break;
            case SATURDAY:
                dia = "SABADO";
                break;
            case SUNDAY:
                dia = "DOMINGO";
                break;
        }
        return Arrays.asList(diasHabiles).contains(dia);
    }
}
