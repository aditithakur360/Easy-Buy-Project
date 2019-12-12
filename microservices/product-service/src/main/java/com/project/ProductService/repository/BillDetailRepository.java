package com.project.ProductService.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.ProductService.model.BillDetails;

public interface BillDetailRepository extends JpaRepository<BillDetails, Integer> {

}
