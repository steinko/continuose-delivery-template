package org.steinko.helloworld.config;

import org.springframework.security.core.userdetails.User;
import static org.springframework.security.core.userdetails.User.withUsername;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;

@Configuration
public class ProjectConfig extends WebSecurityConfigurerAdapter{

	public UserDetailsService userDetailService() {
		var userDetailsService = new InMemoryUserDetailsManager();
		var user = User.withUsername("steinko")
				       .password("1234")
				       .authorities("read")
				       .build();
		
		userDetailsService.createUser(user);
		
		return userDetailsService;
	}

	public PasswordEncoder passwordEncoder() {
		
		return new BCryptPasswordEncoder() ;
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.httpBasic();
		http.authorizeRequests()
		.anyRequest()
		.permitAll();
	}
	

}
