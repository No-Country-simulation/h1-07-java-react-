# Etapa de construcción
FROM maven:3.8.5-openjdk-17-slim AS build

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar solo el contenido relevante del proyecto al contenedor
COPY backend/pom.xml .
COPY backend/src ./src

# Ejecutar Maven para construir el proyecto
RUN mvn clean package -DskipTests

# Etapa de ejecución
FROM openjdk:17.0.1-jdk-slim

# Copiar el JAR construido desde la etapa de construcción
COPY --from=build /app/target/justinaio-0.0.1-SNAPSHOT.jar app.jar

# Exponer el puerto que la aplicación utilizará
EXPOSE 8080

# Comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "app.jar"]

