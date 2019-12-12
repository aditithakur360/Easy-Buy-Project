package com.project.ProductService.service;

import java.util.List;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.ProductService.model.Users;
import com.project.ProductService.repository.UserRepository;

@Service
public class UserServiceImpl {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);
	@Autowired
	UserRepository userRepository;
	
	
	public UserServiceImpl(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	@Transactional
	public List<Users> getAllPendingList(){
		LOGGER.info("Start");
		return userRepository.getAllPendingUserList();
	}
	
	@Transactional
	public List<Users> getAllUserList(){
		LOGGER.info("Start");
		return userRepository.getAllUserList();
	}
	
	@Transactional
	public void saveStatus(Users user) {
		LOGGER.info("Start");
		userRepository.save(user);
	}
	
	@Transactional
	public Users getUserById(int id) {
		return userRepository.findById(id).get();
	}
	
	@Transactional
	public Users getUserItemById(@Valid int id) {
		LOGGER.info("Start");
		LOGGER.info("End");
		return userRepository.findById(id).get();
	}
	@Transactional
	public Users getUserByContactNumber(long contactNumber) {
		// TODO Auto-generated method stub
		return userRepository.findByContactNumber(contactNumber);
	}
	@Transactional
	public void updateUser(@Valid Users user) {
		// TODO Auto-generated method stub
		userRepository.save(user);
	}
	
	@Transactional
	public Users getUserByUserID(String userID) {
		return userRepository.findByUserId(userID);
	}
}
