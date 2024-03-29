package com.project.ProductService.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.sun.istack.NotNull;

@Entity
@Table(name = "product")
public class Product {

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name = "pr_code")
		@NotNull
		private int productCode;

		@Column(name = "pr_name")
		@NotNull
		private String productName;

		@Column(name = "pr_type")
		@NotNull
		private int productType;
		
		@Column(name = "pr_brand")
		@NotNull
		private String brand;
		
		@Column(name = "pr_quatity_type")
		@NotNull
		private long quatityType;
		
		@Column(name = "pr_rate", columnDefinition = "DECIMAL")
		@NotNull
		private double rate;
		
		@Column(name = "pr_stock_count")
		@NotNull
		private int stockCount;
		
		@Column(name = "pr_add_date")
		@NotNull
		private Date addDate;
		
		@Column(name = "pr_aisle")
		@NotNull
		private String aisle;
		
		@Column(name = "pr_shelf")
		@NotNull
		private String shelf;
		
		@Column(name = "pr_date_of_manufacture")
		@NotNull
		private Date dateOfManufacture;
		
		@Column(name = "pr_date_of_expiry")
		@NotNull
		private Date dateOfExpiry;
		
		@Column(name = "pr_image")
		@NotNull
		private String image;
		
//		@ManyToMany(mappedBy = "productList")
//		private List<Users> productList;


		public Product() {
			super();
			// TODO Auto-generated constructor stub
		}

public Product(int productCode, String productName, int productType, String brand, long quatityType, double rate,
		int stockCount, Date addDate, String aisle, String shelf, Date dateOfManufacture, Date dateOfExpiry,
		String image) {
	super();
	this.productCode = productCode;
	this.productName = productName;
	this.productType = productType;
	this.brand = brand;
	this.quatityType = quatityType;
	this.rate = rate;
	this.stockCount = stockCount;
	this.addDate = addDate;
	this.aisle = aisle;
	this.shelf = shelf;
	this.dateOfManufacture = dateOfManufacture;
	this.dateOfExpiry = dateOfExpiry;
	this.image = image;
}

public int getProductCode() {
	return productCode;
}

public void setProductCode(int productCode) {
	this.productCode = productCode;
}

public String getProductName() {
	return productName;
}

public void setProductName(String productName) {
	this.productName = productName;
}

public int getProductType() {
	return productType;
}

public void setProductType(int productType) {
	this.productType = productType;
}

public String getBrand() {
	return brand;
}

public void setBrand(String brand) {
	this.brand = brand;
}

public long getQuatityType() {
	return quatityType;
}

public void setQuatityType(long quatityType) {
	this.quatityType = quatityType;
}

public double getRate() {
	return rate;
}

public void setRate(double rate) {
	this.rate = rate;
}

public int getStockCount() {
	return stockCount;
}

public void setStockCount(int stockCount) {
	this.stockCount = stockCount;
}

public Date getAddDate() {
	return addDate;
}

public void setAddDate(Date addDate) {
	this.addDate = addDate;
}

public String getAisle() {
	return aisle;
}

public void setAisle(String aisle) {
	this.aisle = aisle;
}

public String getShelf() {
	return shelf;
}

public void setShelf(String shelf) {
	this.shelf = shelf;
}

public Date getDateOfManufacture() {
	return dateOfManufacture;
}

public void setDateOfManufacture(Date dateOfManufacture) {
	this.dateOfManufacture = dateOfManufacture;
}

public Date getDateOfExpiry() {
	return dateOfExpiry;
}

public void setDateOfExpiry(Date dateOfExpiry) {
	this.dateOfExpiry = dateOfExpiry;
}

public String getImage() {
	return image;
}

public void setImage(String image) {
	this.image = image;
}


}
