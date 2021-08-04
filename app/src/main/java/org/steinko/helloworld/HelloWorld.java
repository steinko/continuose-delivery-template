/**
 * Hello World Controller.
 */
package org.steinko.helloworld;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class HelloWorld {
	/**
	 * get message.
	 * @return Hello World
	 */
	@GetMapping("/helloworld")
	public String getMessage() {
		return "Hello World";
	}
}
