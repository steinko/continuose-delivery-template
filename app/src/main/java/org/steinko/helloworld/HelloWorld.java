package org.steinko.helloworld;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;


/**
 * Hello World Entity.
 */
@Entity
public class HelloWorld {
	
	/**
	 * Id for hello world.
	 */
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	/**
	 * Creation of HelloWorld.
	 * @param message message.
	 */
	public HelloWorld(String message) { 
		
	}
	
}
