package com.project.ProductService.testing;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.test.context.SpringBootTest;

import com.project.ProductService.model.Users;
import com.project.ProductService.repository.UserRepository;
import com.project.ProductService.service.UserServiceImpl;

@RunWith(MockitoJUnitRunner.class)
@SpringBootTest
public class UserServiceMockTest {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(UserServiceMockTest.class);
	UserRepository repository = Mockito.mock(UserRepository.class);
	UserServiceImpl service = new UserServiceImpl(repository);
	
	@Test
	public void MockTestgetAllPendingList() {
		when(repository.getAllPendingUserList()).thenReturn(CreateUser1());
//		return repository.getAllPendingAdminList();
		List<Users> userList = service.getAllPendingList();
		boolean flag = false;
		for(Users item:userList) {
			Users user = item;
			String expected ="P";
			assertEquals(expected, user.getStatus());
			
		}
		
	}
	public List<Users> CreateUser2() {
		List<Users> userList =new ArrayList<Users>();
		Users user3 =new Users(2,"qq","qq",12,"Male",12,"aa","$2a$10$9rfUaMsp.djdOZh24N..sO93K.8raL3I9U6mD9j95snFVahpg7mpS","A","U","what is your Nick name","12","what is your favorite color","12","what is your favorite holiday spot","aa",0);
		userList.add(user3);
		return userList ;
		

	}
	public List<Users> CreateUser1() { 
		List<Users> userList =new ArrayList<Users>();
		Users user1 = new Users(5,"zz","zz",12,"Female",12,"zz","$2a$10$yl1ShD9Z8CzTjnywdC1NwefgDK7XnproGf51pENkEovwzyvho2Gna","P","A","what is your Nick name","zz","what is your favorite color","zz","what is your favorite holiday spot","zz",0);
		userList.add(user1);

		return userList;
		

	}
	
	public Users CreateUser() {
		Users user2 = new Users(2,"admin","admin",21,"Male",735,"admin","$2a$10$IoqonpxYeSWir9ir16Pb6.8sCa444mtsH6R6oH.ioWnHkpODsBsPS","A","A","what is your Nick name","aa","what is your favorite food","aa","what is your favorite holiday spot","aa",0);	
		return user2;
	}
	
	@Test
	public void MockTestsaveStatus() {
//		when(repository.getAllPendingAdminList()).thenReturn(CreateUser1());
//		ret urn repository.getAllPendingAdminList();
//		Users user = service.modifyApproval(CreateUser());
		
//			String expected ="A";
//			assertEquals(expected, user.getStatus());
			
			
			when(repository.findByUserId("admin")).thenReturn(null);
			
			service.saveStatus(CreateUser());
		}
	
//	
	@Test
	public void MockTestgetAllUserList() {
		when(repository.getAllUserList()).thenReturn(CreateUser2());
	List<Users> userList = service.getAllUserList();
	for(Users item:userList) {
		Users user = item;
		String expected ="U";
		assertEquals(expected, user.getUserType());
	}
	}

}
