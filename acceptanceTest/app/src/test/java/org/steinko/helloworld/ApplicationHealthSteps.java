package org.steinko.helloworld;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.java.PendingException;

import io.restassured.RestAssured;
import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.equalTo;

public class ApplicationHealthSteps {

	@When("Checking Application Health")
	public void checking_application_health() {
	    
	}

	@Then("status {string} is displayed")
	public void status_is_displayed(String string) {
		String uri="http://35.228.16.102";
		RestAssured.baseURI = uri;	
		 given().
	      when().
	         get("/actuator/health").
	      then().
	         statusCode(200).
	         body("status", equalTo("UP"));
	}
	
}
