package org.steinko.helloworld;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;

import static org.springframework.http.HttpStatus.OK;

import static io.restassured.module.mockmvc.RestAssuredMockMvc.given;

/**
 * Hello world test.
 */
public class HelloWorldTest {
	
	/**
	 * Should Exist.
	 */
	@Test
    public void shouldExist() {
	   assertNotNull(new HelloWorld());
    }
	
	/**
	 * Should return hello world.
	 */
	@Test
    public void shouldReturnHelloWorld() {
    	HelloWorld helloWorld = new HelloWorld();
    	assertEquals("Hello World", helloWorld.getMessage());
    }
	
	/**
	 * Should return hello world.
	 */
	@Test
    public void shouldReturnMessage() {
		
	    HelloWorld helloWorld = new HelloWorld();
	
	    given()
           .standaloneSetup(helloWorld)
       .when()
          .get("/helloworld")
       .then()
           .statusCode(OK.value())
           .body(is(equalTo("Hello World")));
	 }


}
