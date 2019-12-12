package com.project.ProductService.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.ProductService.repository.OfferRepository;
import com.project.ProductService.repository.ProductRepository;
import com.project.ProductService.exception.OfferAlreadyExistsException;
import com.project.ProductService.model.Offer;
import com.project.ProductService.model.Product;

@Service
public class OfferServiceImpl {
	@Autowired
	OfferRepository offerRepository;
	
	@Autowired
	ProductRepository productRepository;
	
	public void addOffer(Offer offer, int id) throws OfferAlreadyExistsException {
		Product product = productRepository.findById(id).get();
		offer.setProductId(product);
		Optional<Offer> offer2 = offerRepository.getOffer(offer.getOfferDate(), product.getProductCode());
		if(!offer2.isPresent()) {
			offerRepository.save(offer);
		} else {
			throw new OfferAlreadyExistsException();
		}
		
	}
	
	public void updateOffer(Offer offer, int id) throws OfferAlreadyExistsException {
		Product product = productRepository.findById(id).get();
		offer.setProductId(product);
		offerRepository.save(offer);
		
	}
	
	public void deleteOffer(int id){
		offerRepository.deleteById(id);	
	}
	
	public List<Offer> getCurrentOffers() {
		return offerRepository.getCurrentOffer();
	}
	
	public List<Offer> getOffers(Date date) {
		return offerRepository.getOfferList(date);
	}
	
	public Offer getOffer(int id) {
		return offerRepository.findById(id).get();
	}
}
