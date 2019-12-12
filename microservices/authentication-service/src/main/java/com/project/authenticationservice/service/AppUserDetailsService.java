package com.project.authenticationservice.service;


import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.project.authenticationservice.exception.UserAlreadyExistsException;
import com.project.authenticationservice.model.Users;
import com.project.authenticationservice.repository.UserRepository;
import com.project.authenticationservice.security.AppUser;

@Service
public class AppUserDetailsService implements UserDetailsService {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(AppUserDetailsService.class);
	@Autowired
	UserRepository userRepository;

	public AppUserDetailsService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}
	
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		LOGGER.info("Start");
		System.out.println(username);
		Users user = userRepository.findByUserId(username);
		if (user.getUserId() == null) { 
			LOGGER.info("End");
			throw new UsernameNotFoundException(username);
		} else {
			LOGGER.info("End");
			return new AppUser(user);
			}
	}
	
	@Transactional
	public void signup(Users user) throws UserAlreadyExistsException {
		LOGGER.info("Start");
		if (userRepository.findByUserId(user.getUserId()) != null) { 
			LOGGER.info("End");
			throw new UserAlreadyExistsException();
		} else {
			userRepository.save(user);
			LOGGER.info("End");
		}
	}
}
