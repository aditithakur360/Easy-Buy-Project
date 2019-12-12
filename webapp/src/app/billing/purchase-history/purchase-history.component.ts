import { Component, OnInit } from '@angular/core';
import { BillServiceService } from 'src/app/service/bill-service.service';
import { Bill } from 'src/app/store/Bill';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { BillDetails, TotalBillDetails } from 'src/app/store/Bill_details';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {

  // bill : Bill[];
  // billDetails: TotalBillDetails[];
  // userId : string;
  // constructor(private authService: AuthenticationService, private activeRoute: ActivatedRoute, private billService: BillServiceService) { }

  // ngOnInit() {
  //   this.billService.getAllBills(this.authService.getUser()).subscribe(response =>{
  //     console.log(response);
  //     this.bill = response;
  //     console.log(response.billDetails);
  //     // this.billDetails = response.billDetails;
  //   })
  // }

  billDetails: any[];

  constructor(private billService:BillServiceService,
    private productService:ProductService,
    private authService:AuthenticationService) { }

  ngOnInit() {
    this.billService.getAllBills(this.authService.getUser()).subscribe((response)=>{
      console.log(response);
      this.billDetails = response;
// console.lo

      this.billDetails.forEach(resp =>{
        resp.billList.forEach(resp1 =>{
          this.productService.getProductItem(resp1.productCode).subscribe(response1 =>{
            console.log(response1);
            resp1['productDetails'] = response1;
        })
        })
        
      })
    })


  }

  productList: any[];
  detailsFlag: boolean;
  currentBillId: number = 0;
  getProductDetails(billList: any[]){
    this.detailsFlag = true;
    let i = 0;
    this.productList = [];
    billList.forEach(resp =>{
      this.productList.push(resp.productDetails);
    })
    for(let i=0; i<billList.length ; i++){
      this.productList[i]['quantity'] = billList[i].quantity;
    }


  }


}
