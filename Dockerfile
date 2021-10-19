FROM gradle as gradleimage
COPY ./app /home/gradle/source/app
COPY settings.gradle /home/gradle/source/settings.gradle
WORKDIR /home/gradle/source
RUN gradle assemble
EXPOSE 5000
FROM openjdk
COPY --from=gradleimage /home/gradle/source/app/build/libs/app.jar /app/
COPY ./apmplugin/elastic-apm-agent-1.25.0.jar /app/
COPY ./domain.key /app/
COPY ./domain.crt /app/
WORKDIR /app
RUN keytool -import -alias testkey  -file domain.crt -trustcacerts  -keystore domain.p12  
ENTRYPOINT ["java",  "-javaagent:elastic-apm-agent-1.25.0.jar", "-Delastic.apm.service_name=helloworld","-Delastic.apm.server_url=https://i-o-optimized-deployment-912238.es.us-west1.gcp.cloud.es.io:9243", "-Delastic.apm.secret_token=fOBynx2TftqNyJA9Ar" , "-Djavax.net.debug=all" ,"-Delastic.apm.application_packages=org.steinko.helloworld", "-Djavax.net.ssl.keyStore=domain.p12", "-Djavax.net.ssl.keyStoreType=pkcs12", "-jar", "-Djavax.net.ssl.keyStorePassword=abcdef", "app.jar"]
