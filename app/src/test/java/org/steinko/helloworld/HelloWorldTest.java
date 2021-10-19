package org.steinko.helloworld;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import org.junit.jupiter.api.Test;
/**
 * Hello World Test.
 */

public class HelloWorldTest {
	
	/**
	 * Should Exist.
	 */
	@Test
    public void shouldExist() {
	   assertNotNull(new HelloWorld("Stein"));
    }

}
