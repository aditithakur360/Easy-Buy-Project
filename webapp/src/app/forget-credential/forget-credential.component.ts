import { Component, OnInit } from '@angular/core';
import { User } from '../signup/User';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-forget-credential',
  templateUrl: './forget-credential.component.html',
  styleUrls: ['./forget-credential.component.css']
})
export class ForgetCredentialComponent implements OnInit {

  user: User;
  forgotId: boolean = false;
  forgotPassword: boolean = false;
  invalidContactNumber: boolean = false;
  invalidUserID: boolean = false;
  answersMatched: boolean = false;
  passwordUpdated: boolean = false;
  wrongAnswers: boolean = false;
  gotUserId: boolean = false;
  gotQuestions: boolean = false;
  forgotIdForm : FormGroup;
  forgotPasswordForm : FormGroup;
  setPasswordForm: FormGroup;
  constructor(private router:Router,
    private routerActive:ActivatedRoute,
    private userService:UserService,
    ) { }

  ngOnInit() {
    this.forgotPasswordForm = new FormGroup({
      'userID': new FormControl("", [Validators.required, Validators.maxLength(15)]),
      'answer1': new FormControl("", [Validators.required, Validators.maxLength(50)]),
      'answer2': new FormControl("", [Validators.required, Validators.maxLength(50)]),
      'answer3': new FormControl("", [Validators.required, Validators.maxLength(50)]),
    });
    this.forgotIdForm = new FormGroup({
      'contactNumber': new FormControl("", [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern("^[0-9]*$")])
    });
    this.setPasswordForm = new FormGroup({
      'password': new FormControl("", [Validators.required, Validators.maxLength(15)])
    });
    this.routerActive.paramMap.subscribe(params => {
      if(params.get('id') == 'id'){
        this.forgotId = true;
        this.forgotPassword = false;
      }else{
        this.forgotId = false;
        this.forgotPassword = true;
      }
    });
  }
  getDetailsByContactNumber(){
    this.userService.getUserByContactNumber(this.forgotIdForm.value.contactNumber).subscribe((response)=>{
      console.log(response);
      this.invalidContactNumber = false;
      this.user = response;
      this.gotUserId = true;
    },
    ()=>{
      this.invalidContactNumber = true;
      this.gotUserId = false;
    });
  }

  getDetailsByUserID(){
    this.userService.getUserById1(this.forgotPasswordForm.value.userID).subscribe((response)=>{
      
      this.user = response;
      console.log(this.user);
      if(this.user != null){
        console.log("got")
        this.invalidUserID = false;
        this.gotQuestions = true;
      }else{
        console.log('user id wrong');
        this.invalidUserID = true;
        this.gotQuestions = false;
      }
      
    });
  }

  verifyAnswers(){
    if(this.forgotPasswordForm.value.answer1 == this.user.answer1 && this.forgotPasswordForm.value.answer2 == this.user.answer2 && this.forgotPasswordForm.value.answer3 == this.user.answer3){
      console.log('answers matched');
      this.wrongAnswers = false;
      this.answersMatched = true;
      this.forgotPassword = false;
    }else{
      console.log('thappu');
      this.wrongAnswers = true;
      this.answersMatched = false;
      this.forgotPassword = true;
    }
  }

  setPassword(){
    this.user.password = this.setPasswordForm.value.password;
    this.userService.updateUserWithNewPassword(this.user).subscribe(()=>{
      this.passwordUpdated = true;
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
