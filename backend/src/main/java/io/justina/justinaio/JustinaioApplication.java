package io.justina.justinaio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableJpaAuditing(auditorAwareRef = "auditorAware")
@EnableAsync
@EnableScheduling
public class JustinaioApplication {

	//solo para ver cambios en ambas

	public static void main(String[] args) {
		SpringApplication.run(JustinaioApplication.class, args);
	}

}
