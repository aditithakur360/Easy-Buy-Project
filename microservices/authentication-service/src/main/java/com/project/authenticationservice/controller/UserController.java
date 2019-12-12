package com.project.authenticationservice.controller;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.authenticationservice.exception.UserAlreadyExistsException;
import com.project.authenticationservice.model.Users;
import com.project.authenticationservice.service.AppUserDetailsService;

@RestController
@CrossOrigin("*")
public class UserController {
	private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

	@Autowired
	PasswordEncoder passwordEncoder;
	@Autowired
	AppUserDetailsService appUserDetailsService;

	@PostMapping("/users")
	public void signup(@RequestBody @Valid Users user) throws UserAlreadyExistsException {
		LOGGER.info("Start");
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		appUserDetailsService.signup(user);
		LOGGER.info("End");
	}
}
