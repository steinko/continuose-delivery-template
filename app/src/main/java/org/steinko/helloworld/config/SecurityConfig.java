package org.steinko.helloworld.config;

import org.springframework.security.core.userdetails.User;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
/**
 * Security configuration for the application.
 */
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    /**
     * User Detail Service.
     * @return user detail service.
     */
	public UserDetailsService userDetailService() {
		
			BCryptPasswordEncoder encoder =
					new BCryptPasswordEncoder();
			UserDetails user = User.withUsername("steinko")
					       .passwordEncoder(encoder::encode)
					       .password("1234")
					       .authorities("read")
					       .build();
			
			return  new InMemoryUserDetailsManager(user);
		
	}	
	
	/**
	 * Password Encoder.
	 * @return password encoder.
	 */
	public PasswordEncoder passwordEncoder() {		
		return new BCryptPasswordEncoder();
	}
	
	/**
	 * Configure Security.
	 * @param http security adress.
	 * @throws Exception exception.
	 */
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.httpBasic();
		http.authorizeRequests()
		.anyRequest()
		.permitAll();
	}
}
