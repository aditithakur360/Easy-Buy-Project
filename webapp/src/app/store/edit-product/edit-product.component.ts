import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  editProductForm: FormGroup;
  addDate: any;
  dateOfManufacture: string;
  dateOfExpiry: string;
  product: any;
  // productItem = {
  //   id: null,
  //   productCode: "",
  //   productName: "",
  //   productType: null,
  //   brand: "",
  //   quantityType: "",
  //   rate: "",
  //   stockCount: "",
  //   addDate: new Date(),
  //   aisle: "",
  //   shelf: "",
  //   dateOfManufacture: new Date(),
  //   dateOfExpiry: new Date(),
  //   image: ""
  // }

  constructor(private router: Router, private activeRoute: ActivatedRoute, private productService: ProductService, private datePipe: DatePipe) { 
    this.editProductForm = new FormGroup({
      'productCode': new FormControl("", [Validators.required]),
      'productName': new FormControl("", [Validators.required]),
      'productType': new FormControl("", [Validators.required]),
      'brand': new FormControl("", [Validators.required]),
      'quantityType': new FormControl("", [Validators.required]),
      'rate': new FormControl("", [Validators.required]),
      'stockCount': new FormControl("", [Validators.required]),
      'addDate': new FormControl("", [Validators.required,  Validators.pattern("^(3[01]|[12][0-9]|0[1-9])/(1[0-2]|0[1-9])/[0-9]{4}$")]),
      'aisle': new FormControl("", [Validators.required]),
      'shelf': new FormControl("", [Validators.required]),
      'dateOfManufacture': new FormControl("", [Validators.required,  Validators.pattern("^(3[01]|[12][0-9]|0[1-9])/(1[0-2]|0[1-9])/[0-9]{4}$")]),
      'dateOfExpiry': new FormControl("", [Validators.required,  Validators.pattern("^(3[01]|[12][0-9]|0[1-9])/(1[0-2]|0[1-9])/[0-9]{4}$")]),
      'image': new FormControl("", [Validators.required])
    });
  }

  ngOnInit() {
    // console
    this.activeRoute.paramMap.subscribe(params => {
      console.log(params);
      this.productService.getProductItem(params.get('id')).subscribe((response) => {
        console.log(response);
        this.product = response;
        this.addDate = this.datePipe.transform(this.product.addDate , 'dd/MM/yyyy');
        this.dateOfManufacture = this.datePipe.transform(this.product.dateOfManufacture , 'dd/MM/yyyy');
        this.dateOfExpiry = this.datePipe.transform(this.product.dateOfExpiry , 'dd/MM/yyyy');

        this.editProductForm = new FormGroup({
          'productCode': new FormControl(this.product.productCode, [Validators.required]),
          'productName': new FormControl(this.product.productName, [Validators.required]),
          'productType': new FormControl(this.product.productType, [Validators.required]),
          'brand': new FormControl(this.product.brand, [Validators.required]),
          'quantityType': new FormControl(this.product.quantityType, [Validators.required]),
          'rate': new FormControl(this.product.rate, [Validators.required]),
          'stockCount': new FormControl(this.product.stockCount, [Validators.required]),
          'addDate': new FormControl(this.addDate, [Validators.required,  Validators.pattern("^(3[01]|[12][0-9]|0[1-9])/(1[0-2]|0[1-9])/[0-9]{4}$")]),
          'aisle': new FormControl(this.product.aisle, [Validators.required]),
          'shelf': new FormControl(this.product.shelf, [Validators.required]),
          'dateOfManufacture': new FormControl(this.dateOfManufacture, [Validators.required, Validators.pattern("^(3[01]|[12][0-9]|0[1-9])/(1[0-2]|0[1-9])/[0-9]{4}$")]),
          'dateOfExpiry': new FormControl(this.dateOfExpiry, [Validators.required,  Validators.pattern("^(3[01]|[12][0-9]|0[1-9])/(1[0-2]|0[1-9])/[0-9]{4}$")]),
          'image': new FormControl(this.product.image, [Validators.required])
        });
        console.log(this.editProductForm.value);
      });
      });
    }

    onSubmit(){

      this.productService.updateProduct(this.editProductForm.value).subscribe((response)=>{
        console.log("update successful");
        this.router.navigate(['/producthome']);
      })
    }
  
}
