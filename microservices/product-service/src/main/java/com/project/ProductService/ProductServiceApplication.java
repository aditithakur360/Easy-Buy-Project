package com.project.ProductService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class ProductServiceApplication {

	private static final Logger LOGGER = LoggerFactory.getLogger(ProductServiceApplication.class);

	public static void main(String[] args) {
		LOGGER.info("Start");
		SpringApplication.run(ProductServiceApplication.class, args);
		LOGGER.info("End");
	}

}
