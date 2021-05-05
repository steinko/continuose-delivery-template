package org.steinko.helloworld;


import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.availability.ApplicationAvailability;
import org.springframework.boot.availability.LivenessState;
import org.springframework.boot.availability.ReadinessState;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.web.context.WebApplicationContext;

import static io.restassured.module.mockmvc.RestAssuredMockMvc.given;
import static org.springframework.http.HttpStatus.OK;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ApplicationAvailabilityIntegrationTest {
	
	@LocalServerPort
	 private  int localServerPort;
	
	@Autowired
	private WebApplicationContext context;
	
	 @Autowired 
	 private ApplicationAvailability applicationAvailability;

	
	@Test
	public void shoulBeLiving() {
		assertEquals(applicationAvailability.getLivenessState(),LivenessState.CORRECT );
		
	}
	
	@Test
	public void shoulBeRedy() {
	  assertEquals(applicationAvailability.getReadinessState(),ReadinessState.ACCEPTING_TRAFFIC);
	}
	
	@Test 
	public void shouldReurnOk() {
		
		given()
 	      . webAppContextSetup(context)
     .when()
        .put("http://localhost:" + localServerPort + "/actuator/health/liveness")
     .then()
       .statusCode(OK.value()); 
 	   
	}
	
}
