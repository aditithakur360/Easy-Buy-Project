import { Component, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ProductService } from 'src/app/service/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { BillDetails, TotalBillDetails } from 'src/app/store/Bill_details';
import { Products } from 'src/app/store/Products';
import { User } from 'src/app/signup/User';
import { Router } from '@angular/router';
import { Bill } from 'src/app/store/Bill';
import { BillServiceService } from 'src/app/service/bill-service.service';

@Component({
  selector: 'app-create-bill',
  templateUrl: './create-bill.component.html',
  styleUrls: ['./create-bill.component.css']
})
export class CreateBillComponent implements OnInit {

  productList: any;
  product: Products;
  amount: any;
  name: any;
 code1: any;

   billForm:FormGroup;
   addForm: FormGroup;
   currentDate: string;
  userItem: User;
  finalRewardPoints: number;
  originalAmount: number;
  rewardFinal:any;
  finalAmount:any;
  detailsOfRewardApllied: any;
  productDetailsList : BillDetails[] = [];
  isBillGenerated: boolean;
  isProductAdded: boolean;
  userList: User;
  totalAmount: any = 0;
  finalBill: Bill;
  productFlag: boolean =false;
  finalBillDetail: TotalBillDetails[] = [];
  rewardCheckBox: number = 0;
  rewardPoints: any;
  constructor(private router: Router, private userService: UserService, private productService: ProductService, private datePipe: DatePipe, private billService: BillServiceService) {
    // this.billFlag = new EventEmitter();
   }

  ngOnInit() {
    this.rewardCheckBox = 0;
    this.userService.getUserList().subscribe(response =>{
      this.userList = response;
      console.log(this.userList);
    })

    this.productService.getAllProducts().subscribe(response =>{
this.productList = response;
    });

    this.isBillGenerated = false;
    this.isProductAdded = false;
    this.currentDate = this.datePipe.transform(new Date() , 'dd/MM/yyyy');
    
    this.billForm = new FormGroup({
      'userId': new FormControl("", [Validators.required]),
      'purchaseDate': new FormControl(this.currentDate, [Validators.required]),
      'item': new FormControl('', [Validators.required]),
      'quantity': new FormControl('1', [Validators.required])
    });

    
  }

  onAddToBill(billForm){
    this.isProductAdded = true;
    this.productService.getProductItem(billForm.value.item).subscribe(response =>{
      this.product = response;

        for(let i = 0; i < this.productDetailsList.length; i++){
            console.log("1");
          if(this.productDetailsList[i].productCode == billForm.value.item){
              console.log("2");
              this.productFlag = true;
            } else{
              console.log("3");
             this.productFlag = false;
            }
          }




    if(this.productFlag == false){
      this.amount = this.product.rate * billForm.value.quantity;
      this.code1 = this.product.productCode;
      this.name = this.product.productName;
      console.log(this.amount);
      console.log(this.code1);
      console.log(this.name);
      this.productDetailsList.push({ productCode: this.product.productCode , productName: this.product.productName, quantity: billForm.value.quantity, amount: this.amount });
            // this.productDetailsList.push({ productCode: this.product.productCode, quantity: billForm.value.quantity });
console.log("add");
    console.log(this.productDetailsList);
      this.totalAmount = this.totalAmount + this.amount;
      console.log("aad"+this.totalAmount);
    }
    })

this.userService.getUserById(billForm.value.userId).subscribe(response =>{
// this.userItem = response;
console.log(response);
console.log("reward"+response.finalRewardPoints);
this.finalRewardPoints = response.finalRewardPoints;
})
    
  }

  deleteProduct(list){
     
    let index = this.productDetailsList.indexOf(list);
    this.totalAmount = this.totalAmount - list.amount;
    this.productDetailsList.splice(index,1);
  }

  onGenerateBill(billForm){
    if (this.rewardCheckBox == 1) {
      console.log("aaaaaaaaaaaaaaaaaa");
      console.log(this.finalRewardPoints);
      console.log(this.totalAmount - this.finalRewardPoints);
      if(this.totalAmount > this.finalRewardPoints){
        console.log("greater than");
        this.originalAmount = this.totalAmount - this.finalRewardPoints;
        this.rewardFinal = this.originalAmount * 0.01;
      }else{
        console.log("less than");
        this.originalAmount = 0;
        this.rewardFinal = this.finalRewardPoints - this.totalAmount;
      }

    for(let i =0; i < this.productDetailsList.length; i++){
      this.finalBillDetail.push({productCode: this.productDetailsList[i].productCode, quantity: this.productDetailsList[i].quantity});
    }

    var dateParts = billForm.value.purchaseDate.split("/");
    var dateObject = new Date(+dateParts[2], dateParts[1] -1, +dateParts[0]);
    this.finalAmount =this.originalAmount;
console.log("generate "+this.finalRewardPoints);
    this.finalBill = {
      user: billForm.value.userId,
      totalAmount: this.totalAmount,
      originalAmount: this.originalAmount,
        finalRewardPoints : this.rewardFinal,
    billList : this.finalBillDetail,
    rewardPoints: this.originalAmount*(0.01),
    purchaseDate: dateObject
    }

    console.log(this.finalBill);
    this.billService.generateBill(this.finalBill).subscribe((response) => {
      this.isBillGenerated = true;
    });
  } else {
    for (let i = 0; i < this.productDetailsList.length; i++) {
      this.finalBillDetail.push({ productCode: this.productDetailsList[i].productCode, quantity: this.productDetailsList[i].quantity });
    }
    var dateParts = billForm.value.purchaseDate.split("/");
    var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    this.rewardPoints =  this.totalAmount * (0.01);
    console.log(this.finalRewardPoints);
    this.finalRewardPoints = this.finalRewardPoints + this.rewardPoints;
    console.log(this.finalRewardPoints);
    this.finalAmount=this.totalAmount;
    this.finalBill = {
      user: billForm.value.userId,
      totalAmount: this.totalAmount,
      originalAmount: this.totalAmount,
      finalRewardPoints : this.finalRewardPoints,
      billList : this.finalBillDetail,
      rewardPoints: this.rewardPoints,
      purchaseDate: dateObject
    }
    console.log(this.finalBill);
    this.billService.generateBill(this.finalBill).subscribe((response) => {
      this.isBillGenerated = true;
    });

  }
}

  onDropBill(billForm){
    this.productDetailsList = [];
    console.log(this.productDetailsList);
    this.totalAmount = 0;
    // this.billFlag.emit('false');
    this.router.navigate(['./producthome']);
  }

  checkBoxApply() {
    this.rewardCheckBox = 1;
    this.detailsOfRewardApllied = "applied";
    console.log(this.rewardCheckBox);
  }
  checkBoxCancle() {
    this.rewardCheckBox = 0;
    this.detailsOfRewardApllied = "cancled";
    console.log(this.rewardCheckBox);
  }

}
