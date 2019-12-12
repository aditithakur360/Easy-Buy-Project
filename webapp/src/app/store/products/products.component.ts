import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Products } from '../Products';
import { ProductService } from 'src/app/service/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BillDetails } from '../Bill_details';
import { Bill } from '../Bill';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsList: any;
  filterProductList: any;
  sortList: FormGroup;
  sortItem: string;
  role: string;
  sortType: string;
  // billFlag: boolean;
  quantity: number = 0;
  // list = new BillDetails();
  billProductList: BillDetails[] = [];

  constructor(private activeRoute: ActivatedRoute, private router: Router, private productService: ProductService, private authService: AuthenticationService) {
    // this.billFlag = false;
   }

  ngOnInit() {
    this.role = this.authService.getRole();
    // if (this.role == 'U' || this.role == 'A') {
    //   this.sortList = new FormGroup({
    //     'sortCategory': new FormControl(null, [
    //       Validators.required])
    //   });
    // this.billFlag = false;
console.log(this.role);
      this.productService.getAllProducts().subscribe(response => {
        this.productsList = response;
        this.filterProductList = this.productsList;
        console.log(this.productsList);
      })

    // this.billFlag = (this.activeRoute.snapshot.paramMap.get('flag'));

    }
    OnInput(event: any) {
      this.quantity = event;
      }

  displaySearchFood($event) {
    this.productsList = this.filterProductList.filter(
      (item: Products) => (item.productName.toLocaleLowerCase().indexOf($event) != -1 || item.brand.toLocaleLowerCase().indexOf($event) != -1)
    );


  }

  addOffers(){
    // this.billFlag = true;
    this.router.navigate(['/addOfferpage']);
  }
  updateOffers(){
    // this.billFlag = true;
    this.router.navigate(['/updateOfferpage']);
  }

  // productQuantity($event){
  //   console.log($event);
  // }

  // billFlagStatus($event){
  //   this.billFlag = $event;
  //   console.log(this.billFlag);
  // }
  addToBillList(productCode){
    var item = new BillDetails();
    item.productCode = productCode;
    item.quantity = this.quantity;
    console.log(item);
    this.billProductList.push(item);
    // this.list.push(new BillDetails(productCode, this.quantity));
    // this.list.push({productCode, this.quantity});
    console.log(this.billProductList);
  }

  sort() {
    this.sortItem = this.sortType;
    if (this.sortItem == "name") {
      this.productsList = this.productsList.sort((obj1, obj2) => {
        if (obj1.productName > obj2.productName) {
          return 1;
        }
        if (obj1.productName < obj2.productName) {
          return -1;
        }
        return 0;
      });
    }
    if (this.sortItem == "price") {
      this.productsList = this.productsList.sort((obj1, obj2) => {
        if (obj1.rate > obj2.rate) {
          return 1;
        }
        if (obj1.rate < obj2.rate) {
          return -1;
        }
        return 0;
      });
    }
    if (this.sortItem == "availability") {
      this.productsList = this.productsList.sort((obj1, obj2) => {
        if (obj1.stockCount > obj2.stockCount) {
          return 1;
        }
        if (obj1.stockCount < obj2.stockCount) {
          return -1;
        }
        return 0;
      });
    }
    if (this.sortItem == "popularity") {
      this.productService.sortByPopularity().subscribe(response =>{
        this.productsList = response;
      });
    }
  }

  addNewProduct() {
    this.router.navigate(['/addNewProduct']);
  }

  deleteProduct($event){
    this.productService.deleteProduct($event).subscribe(response =>{
      this.productService.getAllProducts().subscribe(response => {
        this.productsList = response;
        this.filterProductList = this.productsList;
      });
    });
  }
}
