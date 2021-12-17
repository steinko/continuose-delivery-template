FROM  adoptopenjdk/openjdk15
COPY  ./build/libs/backend.jar ./
ENTRYPOINT ["java"]
CMD ["-jar", "./backend.jar"]
EXPOSE 80