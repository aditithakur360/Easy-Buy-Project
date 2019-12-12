package com.project.ProductService.service;

import java.util.List;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.ProductService.model.Product;
import com.project.ProductService.repository.ProductRepository;

@Service
public class ProductServiceImpl {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(ProductServiceImpl.class);
	@Autowired
	ProductRepository productRepository;

	@Transactional
	public List<Product> getAllProductList() {
		LOGGER.info("Start");
		return productRepository.findAll();
	}
	
	@Transactional
	public Product getProductItem(int id) {
		return productRepository.findById(id).get();
	}

	@Transactional
	public void saveNewProduct(Product product) {
		LOGGER.info("Start");
		productRepository.save(product);
	}
	
	@Transactional
	public void deleteProduct(int id) {
		LOGGER.info("Start");
		Product product = productRepository.findById(id).get();
		productRepository.delete(product);		
		LOGGER.info("End");
	}
	
	@Transactional
	public List<Product> getSortByPopularity() {
		List<Product> productArray = productRepository.getProductArray1();
		productArray.addAll(productRepository.getProductArray2());
		System.out.println(productArray);
		return productArray;
	}
}
