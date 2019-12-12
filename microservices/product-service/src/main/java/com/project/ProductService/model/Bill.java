package com.project.ProductService.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.sun.istack.NotNull;

@Entity
@Table(name = "bill")
public class Bill {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "bi_id")
	@NotNull
	private int id;

	@Column(name = "bi_purchase_date")
	@NotNull
	private Date purchaseDate;

	@Column(name = "bi_total_amount", columnDefinition = "DECIMAL")
	@NotNull
	private double totalAmount;

	@Column(name = "bi_reward_points")
	@NotNull
	private int rewardPoints;

	@Column(name = "bi_original_amount", columnDefinition = "DECIMAL(8,2)")
	float originalAmount;
	@Column(name = "bi_final_reward_points")
	int finalRewardPoints;

	@ManyToOne()
	@JoinColumn(name = "bi_us_id")
	private Users user;

	@OneToMany(cascade = { CascadeType.ALL })
	@JoinColumn(name = "bd_bi_id")
	private List<BillDetails> billList;

//	@ManyToMany(fetch = FetchType.EAGER)
//	@JoinTable(name = "bill_details", joinColumns = @JoinColumn(name = "bd_bi_id"), inverseJoinColumns = @JoinColumn(name = "bd_pr_code"))
//	List<Product> productList;

	public Bill() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public Bill(int id, Date purchaseDate, double totalAmount, int rewardPoints, float originalAmount,
		int finalRewardPoints, Users user) {
	super();
	this.id = id;
	this.purchaseDate = purchaseDate;
	this.totalAmount = totalAmount;
	this.rewardPoints = rewardPoints;
	this.originalAmount = originalAmount;
	this.finalRewardPoints = finalRewardPoints;
	this.user = user;
}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	public int getRewardPoints() {
		return rewardPoints;
	}

	public void setRewardPoints(int rewardPoints) {
		this.rewardPoints = rewardPoints;
	}

	public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}

//
	public List<BillDetails> getBillList() {
		return billList;
	}

	public void setBillList(List<BillDetails> billList) {
		this.billList = billList;
	}

	public float getOriginalAmount() {
		return originalAmount;
	}

	public void setOriginalAmount(float originalAmount) {
		this.originalAmount = originalAmount;
	}

	public int getFinalRewardPoints() {
		return finalRewardPoints;
	}

	public void setFinalRewardPoints(int finalRewardPoints) {
		this.finalRewardPoints = finalRewardPoints;
	}

}
