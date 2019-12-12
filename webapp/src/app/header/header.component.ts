import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../service/user-auth.service';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;
  constructor(private userAuth: UserAuthService, private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.userAuth.logout();
  }

  getName() {
    // console.log(this.authService.getUser());
    this.username = this.authService.getUser();
    return this.authService.getUser();
  }

  getRole(){
    // console.log(this.authService.getRole());
    return this.authService.getRole();
  }

  getStatus(){
    return this.authService.getStatus();
  }

  purchaseHistory(){
    this.router.navigate(['purchasehistory', this.username]);
  }
}
