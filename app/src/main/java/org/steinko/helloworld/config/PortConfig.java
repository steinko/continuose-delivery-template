package org.steinko.helloworld.config;

import org.springframework.boot.web.server.ConfigurableWebServerFactory;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.stereotype.Component;

/**
* Port configuraion.
*/


@Component
public class PortConfig 
       implements WebServerFactoryCustomizer<ConfigurableWebServerFactory> {
	/**
	 * Configuarate the port for the application.
	 * @param factory factory.
	 */
	@Override
	    public void customize(ConfigurableWebServerFactory factory) {
	        factory.setPort(80);
	    }

}

