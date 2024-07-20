# Etapa de construcción
FROM maven:3.8.5-openjdk-17-slim AS build

# Configura el directorio de trabajo
WORKDIR /app

# Copia el contenido del directorio `backend` al contenedor
COPY backend/ .

# Construye el proyecto
RUN mvn clean package -DskipTests

# Etapa de ejecución
FROM openjdk:17.0.1-jdk-slim

# Copia el JAR desde la etapa de construcción
COPY --from=build /app/target/justinaio-0.0.1-SNAPSHOT.jar app.jar

# Expone el puerto en el que la aplicación escuchará
EXPOSE 8080

# Define el comando para ejecutar el JAR
ENTRYPOINT ["java", "-jar", "app.jar"]
