package org.steinko.helloworld;


import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Hello World Repository.
 */

public interface HelloWorldRepository extends JpaRepository<HelloWorld, Long> { 
	/**
	 * Find the HelloWorld objects containing message.
	 * @param message message
	 * @return list of HelloWorld object with message 
	 */
	List<HelloWorld> findByMessage(String message);
	
}
