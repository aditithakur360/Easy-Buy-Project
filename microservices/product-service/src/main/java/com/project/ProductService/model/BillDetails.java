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

import com.sun.istack.NotNull;

@Entity
@Table(name = "bill_details")
public class BillDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "bd_id")
	@NotNull
	private int id;

	@Column(name = "bd_bi_id")
	int billId;

	@Column(name = "bd_pr_code")
	@NotNull
	private int productCode;

	@Column(name = "bd_pr_quantity")
	@NotNull
	private int quantity;

	public BillDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BillDetails(int id, int billId, int productCode, int quantity) {
		super();
		this.id = id;
		this.billId = billId;
		this.productCode = productCode;
		this.quantity = quantity;
	}

//	public BillDetails( Bill bill, int productCode, int quantity) {
//		super();
//
//		this.bill = bill;
//		this.productCode = productCode;
//		this.quantity = quantity;
//	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getProductCode() {
		return productCode;
	}

	public void setProductCode(int productCode) {
		this.productCode = productCode;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public int getBillId() {
		return billId;
	}

	public void setBillId(int billId) {
		this.billId = billId;
	}

}
