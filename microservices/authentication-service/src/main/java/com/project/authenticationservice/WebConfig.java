package com.project.authenticationservice;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class WebConfig {
	private static final Logger LOGGER = LoggerFactory.getLogger(WebConfig.class);

	public void addCorsMappings(CorsRegistry registry) {
		LOGGER.info("Start");
		registry.addMapping("/**").allowedMethods("*").allowedOrigins("http://localhost:4200");
		LOGGER.info("End");
	}
}
