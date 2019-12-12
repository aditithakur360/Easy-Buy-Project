import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { OfferService } from 'src/app/service/offer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-offer',
  templateUrl: './update-offer.component.html',
  styleUrls: ['./update-offer.component.css']
})
export class UpdateOfferComponent implements OnInit {

  updateOfferForm: FormGroup;
  currentDate: string;
  offerList: any[] = [];
  deleteFlag: boolean;
  fetchFlag: boolean;

  constructor(private datePipe: DatePipe, private offerService: OfferService, private router: Router) { }

  ngOnInit() {
    this.deleteFlag = false;
    this.fetchFlag = false;
    this.currentDate = this.datePipe.transform(new Date() , 'dd/MM/yyyy');
    this.updateOfferForm = new FormGroup({
      'offerDate': new FormControl(this.currentDate, [Validators.required, Validators.pattern("^(3[01]|[12][0-9]|0[1-9])/(1[0-2]|0[1-9])/[0-9]{4}$")]),
    });
  }

  fetchOffer(updateOfferForm){
    this.offerService.getOfferByDate(updateOfferForm.value.offerDate).subscribe(response =>{
      this.offerList = response;
      console.log(this.offerList);
      this.fetchFlag = true;
    });
  }
  editOffer(id){
    this.router.navigate(['/offerpage',id]);
  }

  deleteOffer(id){
    this.offerService.deleteOffer(id).subscribe(response =>{
      this.deleteFlag = true;
      this.offerService.getOfferByDate(this.updateOfferForm.value.offerDate).subscribe(response =>{
        this.offerList = response;
      });
    });
  }

}
