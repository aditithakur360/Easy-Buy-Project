import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from './User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  signupFlag: boolean;
  newUser: User;
  status: string;
  passwordFlag: boolean;
  errorFlag: boolean;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.signupFlag = false;

    this.signupForm = new FormGroup({
      'firstName': new FormControl(null, [
        Validators.required,
        Validators.maxLength(15)
      ]),
      'lastName': new FormControl(null, [
        Validators.required,
        Validators.maxLength(15)
      ]),
      'age': new FormControl(null, [
        Validators.required,
        Validators.maxLength(2)
      ]),
      'gender': new FormControl(null, [
        Validators.required
      ]),
      'contactNumber': new FormControl(null, [
        Validators.required,
        Validators.maxLength(10)
      ]),

      'userType': new FormControl(null, [
        Validators.required,
        Validators.maxLength(15)
      ]),
      'userId': new FormControl(null, [
        Validators.required,
        Validators.maxLength(15)
      ]),
      'password': new FormControl(null, [
        Validators.required
      ]),
      'confirmPassword': new FormControl(null, [
        Validators.required
      ]),
      'question1': new FormControl(null, [
        Validators.required,
        Validators.maxLength(50)
      ]),
      'answer1': new FormControl(null, [
        Validators.required,
        Validators.maxLength(50)
      ]),
      'question2': new FormControl(null, [
        Validators.required,
        Validators.maxLength(50)
      ]),
      'answer2': new FormControl(null, [
        Validators.required,
        Validators.maxLength(50)
      ]),
      'question3': new FormControl(null, [
        Validators.required,
        Validators.maxLength(50)
      ]),
      'answer3': new FormControl(null, [
        Validators.required,
        Validators.maxLength(50)
      ]),
    })
  }

  signup() {
    if (this.signupForm.value.userType == 'U') {
      this.status = 'A';
    } else {
      this.status = 'P';
    }
    this.newUser = {
      firstName: this.signupForm.value.firstName,
      lastName: this.signupForm.value.lastName,
      age: this.signupForm.value.age,
      gender: this.signupForm.value.gender,
      contactNumber: this.signupForm.value.contactNumber,
      userType: this.signupForm.value.userType,
      status: this.status,
      userId: this.signupForm.value.userId,
      password: this.signupForm.value.password,
      question1: this.signupForm.value.question1,
      answer1: this.signupForm.value.answer1,
      question2: this.signupForm.value.question2,
      answer2: this.signupForm.value.answer2,
      question3: this.signupForm.value.question3,
      answer3: this.signupForm.value.answer3,
      totalRewardPoint: 0
    }

    this.userService.addUser(this.newUser).subscribe(response => {
      this.signupFlag = true;
      this.router.navigate(['/signup']);
    }, error => {
      this.signupFlag = false;
      this.errorFlag = true;
    })
  }

  passwordMatch() {
    if (this.signupForm.value.password == this.signupForm.value.confirmPassword) {
      this.passwordFlag = true;
    } else {
      this.passwordFlag = false;
    }
  }

}
