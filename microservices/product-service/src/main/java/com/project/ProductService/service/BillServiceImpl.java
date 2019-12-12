package com.project.ProductService.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.ProductService.model.Bill;
import com.project.ProductService.model.BillDetails;
import com.project.ProductService.model.Product;
import com.project.ProductService.model.ProductDetails;
import com.project.ProductService.model.UserBill;
import com.project.ProductService.model.Users;
import com.project.ProductService.repository.BillDetailRepository;
import com.project.ProductService.repository.BillRepository;
import com.project.ProductService.repository.ProductRepository;
import com.project.ProductService.repository.UserRepository;

@Service
public class BillServiceImpl {

	@Autowired
	BillRepository billRepository;
	
	@Autowired
	ProductRepository productRepository;
	
	@Autowired
	UserRepository userRepository;
	
	@Transactional
	public void userBills(UserBill userBill) {
		System.out.println(userBill.getUser());
		Bill bill = new Bill();
		
		Users userDetails = userRepository.findById(userBill.getUser()).get();
		userDetails.setfinalRewardPoints(userBill.getFinalRewardPoints());
		userRepository.save(userDetails);
		System.out.println(userDetails.getfinalRewardPoints());
		bill.setFinalRewardPoints(userBill.getFinalRewardPoints());
		bill.setPurchaseDate(userBill.getPurchaseDate());
		bill.setRewardPoints(userBill.getRewardPoints());
		bill.setTotalAmount(userBill.getTotalAmount());
		bill.setOriginalAmount(userBill.getOriginalAmount());
		bill.setUser(userDetails);
		billRepository.save(bill);
		int billId = billRepository.findMaximunBillId();

		System.out.println(billId);
		List<BillDetails> billDetailsList = new ArrayList<BillDetails>();
	System.out.println(userBill.getBillList());
		for(int i=0; i<userBill.getBillList().size() ;i++) {	
				ProductDetails pd = userBill.getBillList().get(i);
				Product product = productRepository.findById(pd.getProductCode()).get();

				int quantity = pd.getQuantity();
				product.setStockCount(product.getStockCount() - quantity);
			
				billDetailsList.add( new BillDetails(0, billId, pd.getProductCode(), pd.getQuantity()));


		}
		bill.setBillList(billDetailsList);
		billRepository.save(bill);
	}
	
	@Transactional
	public List<Bill> getAllBills(String userId){
		System.out.println(billRepository.getAllBills(userId));
		return billRepository.getAllBills(userId);
	}
	
}
