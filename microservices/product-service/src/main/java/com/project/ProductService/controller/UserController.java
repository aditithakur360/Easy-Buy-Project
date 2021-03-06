package com.project.ProductService.controller;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.ProductService.model.Users;
import com.project.ProductService.repository.UserRepository;
import com.project.ProductService.service.AppUserDetailsService;
import com.project.ProductService.service.UserServiceImpl;

@RestController
@RequestMapping("/easy-buy")
@CrossOrigin("*")
public class UserController {
	private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

	@Autowired
	PasswordEncoder passwordEncoder;
	@Autowired
	AppUserDetailsService appUserDetailsService;
	@Autowired
	UserServiceImpl userServiceImpl;

	@GetMapping("/owner")
	public List<Users> getAllPendingList() {
		LOGGER.debug("Start");
		return userServiceImpl.getAllPendingList();
	} 
	
	@GetMapping("/user")
	public List<Users> getAllUserList() {
		LOGGER.debug("Start");
//		return userServiceImpl.getAllPendingList();
		return userServiceImpl.getAllUserList();
	}

	@PutMapping("/owner")
	public void save(@RequestBody @Valid Users user) {
		LOGGER.info("Start");
		userServiceImpl.saveStatus(user);
		LOGGER.info("End");
	}
	
	@GetMapping("/owner/{id}")
	public Users checkUserId(@PathVariable("id") int id) {
		
		return userServiceImpl.getUserById(id);
//		System.out.println("user exixts");
	}
	
	@GetMapping("/user/{userName}")
	public Users getUserByUserID(@PathVariable String userName) {
		return userServiceImpl.getUserByUserID(userName);
	}
	
	@GetMapping("/contact-number/{contactNumber}")
	public Users getUserByContactNumber(@PathVariable long contactNumber) {
		System.out.println(contactNumber);
		return userServiceImpl.getUserByContactNumber(contactNumber);
	}
	@PutMapping("/new-password")
	public void updatePassword(@RequestBody @Valid Users user)  {
		LOGGER.info("Start");
		String password = user.getPassword();
		user.setPassword(passwordEncoder.encode(password));
		userServiceImpl.updateUser(user);
		LOGGER.info("End");
	}
}
