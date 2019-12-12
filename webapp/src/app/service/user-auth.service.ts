import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  loggedIn: boolean = false;
  role: string = null;
  username: string;
  constructor(private authService: AuthenticationService) { }
  currentUser() {
    return this.username;
  }
  
  login(name) {
    this.username = name;
    console.log("login"+this.username);
    this.loggedIn = true;
  }

  logout() {
    this.role=null;
    this.authService.setUser(null);
    this.authService.setRole(null);
    this.authService.setToken(null);
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}

