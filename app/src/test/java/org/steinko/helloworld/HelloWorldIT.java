package org.steinko.helloworld;

import org.springframework.boot.test.context.SpringBootTest;
import org.junit.jupiter.api.Test;
import static io.restassured.module.mockmvc.RestAssuredMockMvc.given;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;

import static org.springframework.http.HttpStatus.OK;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.server.LocalServerPort;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)

public class HelloWorldIT {
	
	@Autowired
    private WebApplicationContext webApplicationContext;
	
	@LocalServerPort
	 private  int localServerPort;
	
	
	@Test
	public void shoudGetMessage()  { 
		
	
		given()
		.webAppContextSetup(webApplicationContext).
		when()
		  .get("http://localhost:" + localServerPort + "/helloworld").
		then()
		  .statusCode(OK.value())
	      .body(is(equalTo("Hello World")));
		
     }
	     
}
