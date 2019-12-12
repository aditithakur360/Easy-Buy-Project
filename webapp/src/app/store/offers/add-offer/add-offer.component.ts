import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Products } from '../../Products';
import { DatePipe } from '@angular/common';
import { ProductService } from 'src/app/service/product.service';
import { OfferService } from 'src/app/service/offer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {

  addOfferForm: FormGroup;
  productList: Products[];
  product: Products;
  errorMessage: string;
  errorFlag: boolean;
  

  constructor(private router: Router, private datePipe: DatePipe, private productService: ProductService, private offerService: OfferService) { }

  ngOnInit() {
    this.errorFlag = false;
    
    this.productService.getAllProducts().subscribe(response =>{
      this.productList = response;
    });

    let addDate = this.datePipe.transform(new Date , 'dd/MM/yyyy');
    this.addOfferForm = new FormGroup({
      offerDate: new FormControl(addDate, [Validators.required, Validators.pattern("^(3[01]|[12][0-9]|0[1-9])/(1[0-2]|0[1-9])/[0-9]{4}$")]),
      offerPercentage: new FormControl('', [Validators.required]),
      offerDetails: new FormControl('', [Validators.required]),
      product: new FormControl('', [Validators.required]),
    });
  }

  addOffer(addOfferForm){
    console.log(addOfferForm.value);
    var dateParts = addOfferForm.value.offerDate.split("/");
    var addDateObject = new Date(+dateParts[2], dateParts[1] -1 , +dateParts[0] ); 
    addOfferForm.value.offerDate = addDateObject;
    
      this.offerService.addOffer(addOfferForm.value).subscribe(response =>{
        this.router.navigate(['/producthome']);
      }, error =>{
        // this.errorMessage = error.error.message;
        this.errorFlag = true;
      }
      );
  
  }


}
