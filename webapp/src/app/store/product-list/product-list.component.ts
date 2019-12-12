
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { ProductService } from 'src/app/service/product.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OfferService } from 'src/app/service/offer.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() list: any;
  @Output() productEmitter: any;
  @Output() deleteEmitter: any;
  role: string;
  id: any;
  offerList: any;
  constructor(private router: Router,private offerService: OfferService, private authService: AuthenticationService) {
    this.deleteEmitter = new EventEmitter();
   }

  ngOnInit() {
    // console.log("auth service "+this.authService.getRole());
    this.role = this.authService.getRole();
    this.productEmitter = new EventEmitter();

    this.offerService.getCurrentOffer().subscribe(response =>{
      this.offerList = response;
    })
    
  }

  updateProduct(productCode) {
    console.log(productCode);
    this.router.navigate(['/editProduct', productCode]);
  }

  deleteProduct(productCode){
    this.deleteEmitter.emit(productCode);
  }

}
