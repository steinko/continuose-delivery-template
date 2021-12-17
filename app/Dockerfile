FROM  adoptopenjdk/openjdk15
COPY ./build/libs/app.jar ./
ENTRYPOINT ["java"]
CMD ["-jar", "/app.jar"]
EXPOSE 80