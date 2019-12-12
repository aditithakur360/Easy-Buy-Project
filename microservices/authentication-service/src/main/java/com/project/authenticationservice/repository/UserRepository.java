package com.project.authenticationservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.project.authenticationservice.model.Users;

public interface UserRepository extends JpaRepository<Users, Integer> {

	Users findByUserId(String name) throws UsernameNotFoundException;
}
