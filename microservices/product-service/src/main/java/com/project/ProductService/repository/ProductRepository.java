package com.project.ProductService.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.ProductService.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{
	
	@Query(nativeQuery = true, value = "select * from product INNER JOIN bill_Details ON (pr_code = bd_pr_code) group by bd_pr_code Order by sum(bd_pr_quantity) desc;")
	List<Product> getProductArray1();
	
	@Query(nativeQuery = true, value = "SELECT * FROM product where pr_code not in (select pr_code from product INNER JOIN bill_details ON (pr_code = bd_pr_code) group by bd_pr_code Order by sum(bd_pr_quantity) desc);")
	List<Product> getProductArray2();
}
