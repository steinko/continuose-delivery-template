FROM  adoptopenjdk/openjdk15
COPY ./app/build/libs/app.jar app.jar
RUN chmod +x /app.jar
ENTRYPOINT ["java"]
CMD ["-jar", "/app.jar"