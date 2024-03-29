package com.project.ProductService.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "offer")
public class Offer {
	
	@Id
	@Column(name = "of_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "of_date")
	private Date offerDate;
	
	@Column(name = "of_discount_percentage")
	private int offerPercentage;
	
	@Column(name = "of_offer")
	private String offerDetails;
	
	@ManyToOne
	@JoinColumn(name = "of_pr_code")
	private Product product;

	public Offer() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getOfferDate() {
		return offerDate;
	}

	public void setOfferDate(Date offerDate) {
		this.offerDate = offerDate;
	}

	public int getOfferPercentage() {
		return offerPercentage;
	}

	public void setOfferPercentage(int offerPercentage) {
		this.offerPercentage = offerPercentage;
	}

	public String getOfferDetails() {
		return offerDetails;
	}

	public void setOfferDetails(String offerDetails) {
		this.offerDetails = offerDetails;
	}

	public Product getProductId() {
		return product;
	}

	public void setProductId(Product product) {
		this.product = product;
	}

}

