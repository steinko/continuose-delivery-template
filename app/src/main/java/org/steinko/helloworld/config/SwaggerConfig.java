package org.steinko.helloworld.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
import springfox.documentation.builders.PathSelectors;

/**
 * Configuration of Swagger.
 *
 */
@Configuration
@EnableSwagger2
public class SwaggerConfig {

	/**
	 * Configurate Swagger.
	 * @return docket
	 */
    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
        		.select()                                  
                .apis(RequestHandlerSelectors.any())              
                .paths(PathSelectors.any())                          
                .build();                                           
          }
}