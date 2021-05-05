package org.steinko.helloworld.config;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class ProjectConfigTest {
	@Autowired
	ProjectConfig projectConfig;
	
	
	@Test 
	public void shoulExist() { 
		assertNotNull (projectConfig);
		
	}
	
	@Test 
	public void shoulReturnAUserDetailService() { 
		assertNotNull (projectConfig.userDetailService());
		
	}
	
	@Test 
	public void shoulReturnAUser() { 
		UserDetailsService userDetailsService = projectConfig.userDetailService();
		String userName = "steinko";
		UserDetails user =userDetailsService.loadUserByUsername(userName);
		assertEquals(user.getUsername(),userName);
		
	}
	
	@Test
	public void shouldExistAnEncoder() {
		
		assertNotNull (projectConfig.passwordEncoder());
		
	}
	
}
