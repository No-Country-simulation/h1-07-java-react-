# Stage 1: Build
FROM maven:3.8.5-openjdk-17-slim AS build
WORKDIR /app
COPY backend/pom.xml backend/src /app/
RUN mvn clean package -DskipTests

# Stage 2: Run
FROM openjdk:17.0.1-jdk-slim
WORKDIR /app
COPY --from=build /app/target/justinaio-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]

