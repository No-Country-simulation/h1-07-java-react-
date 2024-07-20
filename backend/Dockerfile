# Usa una imagen de Maven para construir el proyecto
FROM maven:3.8.6-openjdk-17 AS build

# Configura el directorio de trabajo
WORKDIR /app

# Copia el archivo pom.xml y descarga las dependencias
COPY backend/pom.xml .
RUN mvn dependency:go-offline

# Copia el código fuente
COPY backend/src /app/src

# Compila la aplicación
RUN mvn package

# Usa una imagen de Corretto para ejecutar la aplicación
FROM amazoncorretto:17-alpine-jdk

# Copia el JAR construido desde el contenedor de construcción
COPY --from=build /app/target/ /app.jar

# Comando para ejecutar el JAR
ENTRYPOINT ["java", "-jar", "/app.jar"]
