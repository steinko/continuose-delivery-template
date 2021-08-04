FROM gradle as gradleimage
COPY ./app /home/gradle/source/app
COPY settings.gradle /home/gradle/source/settings.gradle
WORKDIR /home/gradle/source
RUN gradle assemble

FROM openjdk
COPY --from=gradleimage /home/gradle/source/app/build/libs/app.jar /app/
WORKDIR /app
ENTRYPOINT ["java", "-jar", "app.jar"]