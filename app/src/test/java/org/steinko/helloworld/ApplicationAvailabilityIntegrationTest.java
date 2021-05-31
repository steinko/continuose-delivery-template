package org.steinko.helloworld;


import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Disabled;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.web.context.WebApplicationContext;

import static io.restassured.module.mockmvc.RestAssuredMockMvc.given;
import static org.springframework.http.HttpStatus.OK;

/**
 * Application availability integration test.
 *
 */
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ApplicationAvailabilityIntegrationTest {
	 /**
	  * Local Service port.
	  */
	@LocalServerPort
	 private  int localServerPort;
	
	/**
	 * Web application context.
	 */
	@Autowired
	private WebApplicationContext context;
	
	 
	/**
	 * Should return ok.
	 */
	@Disabled
	@Test 
	public void shouldReurnOk() {
		given()
 	      .webAppContextSetup(context)
     .when()
        .put("http://localhost:" + localServerPort + "/actuator/health")
     .then()
       .statusCode(OK.value());    
	}	
}
