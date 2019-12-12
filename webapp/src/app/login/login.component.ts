import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserAuthService } from '../service/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginFlag: boolean;
  error: string;
  statusFlag: boolean;
  rejectFlag: boolean;
  constructor(private authService: AuthenticationService, private router: Router, private userAuth: UserAuthService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    
    this.loginForm = new FormGroup({
      'username': new FormControl('', [
        Validators.required
      ]),
      'password': new FormControl('', [
        Validators.required
      ])
    })
  }

  login() {
    this.statusFlag = false;
    this.loginFlag = false;
    this.rejectFlag = false;
    this.authService.authenticate(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe((response) => {
        
        if (response.status == 'P' || response.status == null) {
          console.log("res"+response.status);
          this.statusFlag = true;
        } else if (response.status == 'R') {
          console.log("res"+response.status);
          this.rejectFlag = true;
          response
        } else {
          console.log("approved"+response.role);
          console.log(response.status);
          
          this.authService.setRole(response.role);
console.log(this.authService.getRole());
          // this.userAuth.setRole(response.role);
          this.authService.setToken(response.token);
        this.authService.setRole(response.role);
        this.authService.setUser(response.user);
        this.authService.setStatus(response.status);
          this.userAuth.login(this.authService.getUser());
          this.router.navigate(['/producthome']);
        }

      },
        (error) => {
          this.loginFlag = true;
        });
  }
}
