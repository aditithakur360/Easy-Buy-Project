package com.project.ProductService.model;

public class ProductDetails {
	
	private int productCode;
	private int quantity;
	
	public ProductDetails() {
		super();
	}
	
	
	public int getQuantity() {
		return quantity;
	}
	
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}


	public int getProductCode() {
		return productCode;
	}


	public void setProductCode(int productCode) {
		this.productCode = productCode;
	}
}
