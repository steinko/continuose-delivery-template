package org.steinko.helloworld;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.java.PendingException;

import io.restassured.RestAssured;
import static io.restassured.RestAssured.given;

public class HelloWorldSteps {

	@Given("Application is started")
	public void application_is_started() {
	   
	}

	@When("Always")
	public void always() {
	    
	}

	@Then("{string} is displayed")
	public void is_displayed(String string) {
		
        String uri="http://" + IpAdressFile.getIpAdress();
		RestAssured.baseURI = uri;	
		 given().
	      when().
	         get("/helloworld").
	      then().
	         statusCode(200);
	}



}