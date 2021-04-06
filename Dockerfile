FROM  adoptopenjdk/openjdk8
COPY ./app/build/libs/app.jar ./
ENTRYPOINT ["java"]
CMD ["-jar", "/app.jar"