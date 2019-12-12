 package com.project.ProductService.model;

import java.util.Date;
import java.util.List;

public class UserBill {
	
	private int user;
	
	private Date purchaseDate;
	
	private double totalAmount;
	
	private List<ProductDetails> billList;
	
	private int rewardPoints;
	
	private float originalAmount;
	
	private int finalRewardPoints;

	public UserBill() {
		super();
		// TODO Auto-generated constructor stub
	}

	




	public UserBill(int user, Date purchaseDate, double totalAmount, List<ProductDetails> billList, int rewardPoints,
			float originalAmount, int finalRewardPoints) {
		super();
		this.user = user;
		this.purchaseDate = purchaseDate;
		this.totalAmount = totalAmount;
		this.billList = billList;
		this.rewardPoints = rewardPoints;
		this.originalAmount = originalAmount;
		this.finalRewardPoints = finalRewardPoints;
	}






	public int getUser() {
		return user;
	}

	public void setUser(int user) {
		this.user = user;
	}

	public Date getPurchaseDate() {
		return purchaseDate;
	}

	public void setPurchaseDate(Date purchaseDate) {
		this.purchaseDate = purchaseDate;
	}

	public double getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(double totalAmount) {
		this.totalAmount = totalAmount;
	}

	public List<ProductDetails> getBillList() {
		return billList;
	}

	public void setBillList(List<ProductDetails> billList) {
		this.billList = billList;
	}

	public int getRewardPoints() {
		return rewardPoints;
	}

	public void setRewardPoints(int rewardPoints) {
		this.rewardPoints = rewardPoints;
	}



	public int getFinalRewardPoints() {
		return finalRewardPoints;
	}



	public void setFinalRewardPoints(int finalRewardPoints) {
		this.finalRewardPoints = finalRewardPoints;
	}






	public float getOriginalAmount() {
		return originalAmount;
	}






	public void setOriginalAmount(float originalAmount) {
		this.originalAmount = originalAmount;
	}
	
	
}
