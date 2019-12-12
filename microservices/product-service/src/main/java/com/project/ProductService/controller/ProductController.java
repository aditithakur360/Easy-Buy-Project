package com.project.ProductService.controller;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.ProductService.model.Product;
//import com.project.ProductService.repository.ProductRepository;
import com.project.ProductService.service.ProductServiceImpl;

@RestController
@RequestMapping("/easy-buy/products")
@CrossOrigin("*")
public class ProductController {

	@Autowired
	ProductServiceImpl productService;

	private static final Logger LOGGER = LoggerFactory.getLogger(ProductController.class);

	@GetMapping
	public List<Product> getAllProductList() {
		LOGGER.info("Start");
		List<Product> productList = productService.getAllProductList();
		LOGGER.info("End");
		return productList;
	}
	
	@GetMapping("editProduct/{id}")
	public Product getProductItem(@PathVariable("id") int id) {
		LOGGER.info("Start");
		return productService.getProductItem(id);
	}

	@PostMapping("/addNewProduct")
	public void addNewProduct(@RequestBody @Valid Product product) {
		LOGGER.info("Start");
		productService.saveNewProduct(product);
		LOGGER.info("End");
	}
	
	@DeleteMapping("/deleteProduct/{id}")
	public void deleteProduct(@PathVariable("id") int id) {
		LOGGER.info("Start");
		productService.deleteProduct(id);
		LOGGER.info("End");
	}
	
	@PutMapping("/updateProduct")
	public void updateProduct(@RequestBody @Valid Product product) {
		LOGGER.info("Start");
		productService.saveNewProduct(product);
		LOGGER.info("End");
	}
	
	@GetMapping("/sort-by-popularity")
	public List<Product> sortByPopularity() {
		LOGGER.info("Start");
		return productService.getSortByPopularity();
	}
	
}
