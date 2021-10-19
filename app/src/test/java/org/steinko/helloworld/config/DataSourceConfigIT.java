package org.steinko.helloworld.config;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

/**
 * Data Source Configuration Integration Tests.
 */

public class DataSourceConfigIT {
	/**
	 * ApplicationContext.
	 */
	private ApplicationContext context = 
			new AnnotationConfigApplicationContext(
					DataSourceConfig.class
			    );
	
	/**
	 * Data Source Configuration should exist.
	 */
	@Test
	public void shouldExist() {
	    assertNotNull(
	       context.getBean("dataSourceConfig", DataSourceConfig.class)
	    );
	}
	
	/**
	 * Data Source should exist.
	 */
	@Test
	public void dataSourceshouldExist() {
	   
	     DataSourceConfig dataSourceConfig = 
	       context.getBean("dataSourceConfig", DataSourceConfig.class);
	    assertNotNull(dataSourceConfig.dataSource());
	}

}
