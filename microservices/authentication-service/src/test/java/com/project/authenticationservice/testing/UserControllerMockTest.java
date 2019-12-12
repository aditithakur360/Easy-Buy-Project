package com.project.authenticationservice.testing;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.authenticationservice.controller.UserController;
import com.project.authenticationservice.model.Users;

@AutoConfigureMockMvc
@ContextConfiguration(classes = {UserController.class})
@WebMvcTest
public class UserControllerMockTest {
	@Autowired
	private MockMvc mvc;
	@Autowired
	PasswordEncoder passwordEncoder;
	Users createUser(){
		String password = passwordEncoder.encode("pwd");
		Users user = new Users(3,"qq","qq",12,"Female",1,"qw",password,"A","A","what is your Nick name","qq","what is your favorite food","qq","what is your pet name","qq",0);
	return user;
	}
	
	@Test
	public void signupAPI() throws Exception {
//		LOGGER.info("Start");
		mvc.perform(MockMvcRequestBuilders.post("/users")
				.content(asJsonString(createUser()))
				.contentType(MediaType.APPLICATION_JSON)
			      .accept(MediaType.APPLICATION_JSON))
			      .andExpect(status().isCreated())
			      .andExpect(MockMvcResultMatchers.jsonPath("$.employeeId").exists());
//		LOGGER.info("End");
	}
	
	public static String asJsonString(final Object obj) {
	    try {
	        return new ObjectMapper().writeValueAsString(obj);
	    } catch (Exception e) {
	        throw new RuntimeException(e);
	    }
	}
}
