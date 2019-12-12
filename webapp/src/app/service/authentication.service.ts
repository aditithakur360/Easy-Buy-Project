import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationApiUrl = 'http://10.230.166.192:8083/authentication-service/authentication';
  token: string;
  role: string;
  user: string;
  status: string

  constructor(private httpClient: HttpClient) { }

  authenticate(user: string, password: string): Observable<any> {
    let credentials = btoa(user + ':' + password);
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + credentials);

    return this.httpClient.get(this.authenticationApiUrl, { headers });
  }

  public setToken(token: string) {
    this.token = token;
  }

  public getToken() {
    return this.token;
  }

  public setRole(role: string) {
    this.role = role;
    // console.log("set"+this.role);
  }

  public getRole() {
// console.log("get"+this.role);
    return this.role;
  }

  public setStatus(role: string) {
    this.status = role;
  }

  public getStatus() {
    return this.status;
  }

  public setUser(user: string) {
    this.user = user;
  }

  public getUser() {
    return this.user;
  }
}
