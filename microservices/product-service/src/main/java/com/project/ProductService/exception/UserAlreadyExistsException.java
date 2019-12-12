 package com.project.ProductService.exception;

@SuppressWarnings("serial")
public class UserAlreadyExistsException extends Exception{

	@Override
	public String getMessage() {
		return super.getMessage();
	}

	public UserAlreadyExistsException() {
		super("User already exists");
	}

}
