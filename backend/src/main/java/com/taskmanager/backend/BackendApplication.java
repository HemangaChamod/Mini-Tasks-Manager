package com.taskmanager.backend;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {

		// Load .env file
		Dotenv dotenv = Dotenv.configure()
				.ignoreIfMissing()
				.load();

		// Set environment variables for Spring Boot
		System.setProperty("DB_URL", dotenv.get("DB_URL"));
		System.setProperty("DB_USERNAME", dotenv.get("DB_USERNAME"));
		System.setProperty("DB_PASSWORD", dotenv.get("DB_PASSWORD"));
		System.setProperty("JWT_SECRET", dotenv.get("JWT_SECRET"));
		System.setProperty("FRONTEND_URL", dotenv.get("FRONTEND_URL"));

		SpringApplication.run(BackendApplication.class, args);
	}
}