package org.steinko.helloworld.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.jdbc.DataSourceBuilder;
import javax.sql.DataSource;

/**
 * Data Source configuration.
 */

@Configuration
public class DataSourceConfig {
	
	/**
	 * Data source.
	 * @return data source
	 */
	
	@Bean
	public DataSource dataSource() {
		
		DataSourceBuilder dataSourceBuilder = 
				DataSourceBuilder.create();
        dataSourceBuilder.driverClassName("org.postgresql.Driver");
        dataSourceBuilder.url("jdbc:postgresql://localhost:5432/postgres");
        dataSourceBuilder.username("postgres");
        dataSourceBuilder.password("root");
        return dataSourceBuilder.build();
	}
	
}

