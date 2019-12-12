import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { User } from '../signup/User';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient, private authService: AuthenticationService) { }

  addUser(newUser: User) {
    let uss = this.httpClient.post<any>('http://localhost:8083/authentication-service/users', newUser, this.httpOptions);
    return uss;
  }

  getPendingList() {
    let token = "Bearer " + this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };
    return this.httpClient.get<any>(this.baseUrl + '/owner', httpOptions);
  }

  getUserList(){
    let token = "Bearer " + this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };
    return this.httpClient.get<any>(this.baseUrl + '/user', httpOptions);
  }

  approveManagerStatus(user: User) {
    user.status = 'A';
    let token = "Bearer " + this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };
    return this.httpClient.put<any>(this.baseUrl + '/owner', user, httpOptions);
  }

  rejectManagerStatus(user: User) {
    user.status = 'R';
    let token = "Bearer " + this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };
    return this.httpClient.put<any>(this.baseUrl + '/owner', user, httpOptions);
  }

  getUserById(userId){
    let token = "Bearer " + this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };
    return this.httpClient.get<any>(this.baseUrl + '/owner/'+userId, httpOptions);
  }

  getUserById1(userName){
 
    console.log(userName);
    return this.httpClient.get<any>(this.baseUrl+'/user/'+userName);
  }
  getUserByContactNumber(contactNumber){
    console.log(contactNumber);
    return this.httpClient.get<any>(this.baseUrl +'/contact-number/'+ contactNumber);
  }
  
  updateUserWithNewPassword(user: User){
    return this.httpClient.put<any>(this.baseUrl+"/new-password", user);
  }
}
