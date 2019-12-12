import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { DatePipe } from '@angular/common';
import { OfferService } from 'src/app/service/offer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from '../../Offer';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Products } from '../../Products';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  offer: Offer;
  offerForm: FormGroup;
  productList: Products[];
  errorMessage: string;
  errorFlag:boolean;
  constructor(private router: Router, private route: ActivatedRoute, private offerService: OfferService, private datePipe: DatePipe, private productService: ProductService) { }

  ngOnInit() {
    this.errorFlag = false;
    this.offerForm = new FormGroup({
      'offerPercentage': new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      'offerDetails': new FormControl('', [Validators.required])
    });
    this.route.paramMap.subscribe(params => {
      this.offerService.getOfferById(params.get('id')).subscribe((response) => {
        this.offer = response;
        let offerDate = this.datePipe.transform(this.offer.offerDate , 'dd/MM/yyyy');
        this.productService.getAllProducts().subscribe(response =>{
          this.productList = response;
        });
        this.offerForm = new FormGroup({
          'offerPercentage': new FormControl(this.offer.offerPercentage, [Validators.required, Validators.pattern('[0-9]+')]),
          'offerDetails': new FormControl(this.offer.offerDetails, [Validators.required])
        });
      });
      });
  }

  update(offerForm){
    this.offer.offerDetails = offerForm.value.offerDetails;
    this.offer.offerPercentage = offerForm.value.offerPercentage;
    this.offerService.updateOffer(this.offer, this.offer.productId.productCode).subscribe(response=>{
      this.router.navigate(['/updateOfferpage']);
    }, error =>{
      this.errorMessage = error.error.message;
      this.errorFlag = true;
    });
  }
}
