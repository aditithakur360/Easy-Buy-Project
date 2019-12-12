import { Component, OnInit } from '@angular/core';
import { Products } from '../Products';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  productsList: Products[];
    filterProductList: any;
    sortList: FormGroup;
    sortItem: string;
    role: string;
    constructor(private productService: ProductService, private authService : AuthenticationService) { }
  
    ngOnInit() {
      console.log("customer ng");

      this.sortList = new FormGroup({
        'sortCategory': new FormControl(null, [
          Validators.required])
      });
      
      this.productService.getAllProducts().subscribe(response =>{
        this.productsList = response;
        console.log(response);
        this.filterProductList = this.productsList;
      })
  
     
  
    }
  
    displaySearchFood($event) {
      this.productsList = this.filterProductList.filter(
        (item: Products) => (item.productName.toLocaleLowerCase().indexOf($event) != -1 || item.brand.toLocaleLowerCase().indexOf($event) != -1) 
      );

      // this.role = this.authService.getRole();
    }
  
    sort(){
      this.sortItem = this.sortList.value.sortCategory;
      if( this.sortItem == "name"){
        this.productsList =   this.productsList.sort((obj1, obj2) => {
          if (obj1.productName > obj2.productName) {
              return 1;
          }
          if (obj1.productName < obj2.productName) {
              return -1;
          }
          return 0;
      });
      }
      if(this.sortItem == "price"){
        this.productsList =   this.productsList.sort((obj1, obj2) => {
          if (obj1.rate > obj2.rate) {
              return 1;
          }
          if (obj1.rate < obj2.rate) {
              return -1;
          }
          return 0;
      });
      }
      if(this.sortItem == "availability"){
        this.productsList =   this.productsList.sort((obj1, obj2) => {
          if (obj1.stockCount > obj2.stockCount) {
              return 1;
          }
          if (obj1.stockCount < obj2.stockCount) {
              return -1;
          }
          return 0;
      });
      }
    }


}
