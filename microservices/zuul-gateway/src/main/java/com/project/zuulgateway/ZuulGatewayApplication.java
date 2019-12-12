package com.project.zuulgateway;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

@SpringBootApplication
@EnableZuulProxy
public class ZuulGatewayApplication {

	private static final Logger LOGGER = LoggerFactory.getLogger(ZuulGatewayApplication.class);

	public static void main(String[] args) {
		LOGGER.info("Start");
		SpringApplication.run(ZuulGatewayApplication.class, args);
		LOGGER.info("End");
	}

}
