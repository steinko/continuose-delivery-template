package org.steinko.helloworld;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertNotNull;
/**
 * Application unit test.
 */
class AppTest {
	/**
	 * Application object should  exist.
	 */
    @Test void shouldExsist() {
        App classUnderTest = new App();
        assertNotNull(classUnderTest);
    }
}
