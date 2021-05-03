package org.steinko.helloworld;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;


@RestController
public class HelloWorld {
  
	 @RequestMapping(method= RequestMethod.GET,path="/helloworld")
	public String getMessage() {
		return "Hello World";
	}

}
