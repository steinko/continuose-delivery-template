/**
 * Hello World Controller.
 */
package org.steinko.helloworld;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
public class HelloWorldController {
	/**
	 * Logs class.
	 */
	private static final Logger logger = 
			LoggerFactory.getLogger(HelloWorldController.class);
	/**
	 * get message.
	 * @return Hello World
	 */
	@GetMapping("/helloworld")
	public String getMessage() {
		logger.info(" get message Hello World");
		return "Hello World";
	}
}
