package com.project.ProductService.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.ProductService.model.Bill;
import com.project.ProductService.model.UserBill;
import com.project.ProductService.service.BillServiceImpl;

@RestController
@RequestMapping("/easy-buy/products")
@CrossOrigin("*")
public class BillController {

	@Autowired
	BillServiceImpl billServiceImpl;
	
	private static final Logger LOGGER = LoggerFactory.getLogger(BillController.class);

	@GetMapping("/bills/{userId}")
	List<Bill> getAllBills(@PathVariable("userId") String userId){
		return billServiceImpl.getAllBills(userId);
	}
	
	@PostMapping("/bills")
	void postBills(@RequestBody UserBill bill) {
		System.out.println(bill.getTotalAmount());
		System.out.println(bill.getBillList());
		 billServiceImpl.userBills(bill);
	}
}
