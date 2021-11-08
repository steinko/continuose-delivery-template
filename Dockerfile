FROM  adoptopenjdk/openjdk15
COPY ./app/build/libs/app.jar ./
ENTRYPOINT ["java"]
CMD ["-jar", "/app.jar"]
EXPOSE 6000