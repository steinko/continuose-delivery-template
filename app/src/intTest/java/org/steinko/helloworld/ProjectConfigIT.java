package org.steinko.helloworld;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.steinko.helloworld.config.ProjectConfig;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class ProjectConfigIT {
	/**
	 * Project configuration.
	 */
	@Autowired
	private ProjectConfig projectConfig;
	
	
	/**
	 * Project config.
	 * @return project config
	 */
	public ProjectConfig getProjectConfig() {
		return projectConfig;
	}

	/**
	 * Should exist.
	 */
	@Test 
	public void shoulExist() { 
		assertNotNull(projectConfig);
	}
	
	/**
	 * Should return a user detail service.
	 */
	@Test 
	public void shoulReturnAUserDetailService() { 
		assertNotNull(projectConfig.userDetailService());	
	}
	
	/**
	 * Should return a user.
	 */
	@Test 
	public void shoulReturnAUser() { 
		UserDetailsService userDetailsService = 
				projectConfig.userDetailService();
		String userName = "steinko";
		UserDetails user =
		   userDetailsService.loadUserByUsername(userName);
		assertEquals(user.getUsername(), userName);	
	}
	
	/**
	 * It should exist an encoder.
	 */
	@Test
	public void shouldExistAnEncoder() {
		assertNotNull(projectConfig.passwordEncoder());	
	}
}
