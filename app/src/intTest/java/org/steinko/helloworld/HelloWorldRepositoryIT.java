package org.steinko.helloworld;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import java.util.Iterator;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;


/**
 * Hello world repository integration test.
 */
@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class HelloWorldRepositoryIT  {
	
	/**
	 * Repository.
	 */	
	@Autowired
	private HelloWorldRepository repository;
	
	/**
	 * Test exist. 
	 */
	@Test 
	public void shouldNotBeNull() { 
		assertNotNull(repository);
	}
	
	/**
	 * Test saving in database.
	 */
	@Test
	public void shouldSave() {
		
		repository.save(new HelloWorld("Stein"));
		assertNotNull(repository.findAll());
	}
	
	/**
	 * Test retriving from database.
	 */
	@Test
	public void shouldFind() {
		
		String message = "Stein";
		repository.save(new HelloWorld(message));
		assertNotNull(repository.findByMessage(message));
		
	}
	
	/**
	 * Test deleting from database.
	 */
	@Test
	public void shouldDelete() {
		
		repository.save(new HelloWorld("Stein"));
		Iterable<HelloWorld> todos = repository.findAll();
		Iterator<HelloWorld> iterator = todos.iterator();
		HelloWorld helloworld = iterator.next();
		repository.delete(helloworld);
		assertEquals(repository.count(), 0L);
	}

}
