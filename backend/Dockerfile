# Utilizar una imagen base de Maven para construir la aplicación
FROM maven:3.8.5-openjdk-17 AS builder

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el archivo pom.xml y descargar las dependencias
COPY pom.xml .
RUN mvn dependency:go-offline

# Copiar el resto del código fuente
COPY src /app/src

# Construir la aplicación
RUN mvn package -DskipTests

# Utilizar una imagen base más ligera de OpenJDK para ejecutar la aplicación
FROM openjdk:17-alpine

# Copiar el JAR construido desde el contenedor builder
COPY --from=builder /app/target/justinaio-0.0.1-SNAPSHOT.jar /app/app.jar

# Configurar el punto de entrada
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
