package com.project.ProductService.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;

import com.project.ProductService.model.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, Integer>{

	@Query(value="select * from user where us_user_type='U';", nativeQuery=true)
	List<Users> getAllUserList();
	
	@Query(nativeQuery=true, value="select * from user where us_user_id = :name")
	Users findByUserId(String name);
	
	@Query(value="select * from user where us_status='P';", nativeQuery=true)
	List<Users> getAllPendingUserList();
	
	
	
	Users findByContactNumber(long contactNumber);
}
