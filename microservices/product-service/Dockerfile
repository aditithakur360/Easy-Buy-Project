FROM openjdk:8-jdk-alpine
COPY target/Product-Service-0.0.1-SNAPSHOT.war movie.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom -Djava.net.preferIPv4Stack=true","-jar","/movie.jar"]