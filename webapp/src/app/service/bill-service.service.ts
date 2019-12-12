import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserAuthService } from './user-auth.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class BillServiceService {
  
  baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient, private authService: AuthenticationService) { }

  generateBill(finalBill){
    console.log(finalBill);
    console.log(this.authService.getToken());
    let token = "Bearer " + this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };
    return this.httpClient.post<any>(this.baseUrl + '/products/bills', finalBill, httpOptions);
  }

  getAllBills(userId){
    let token = "Bearer " + this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };
    return this.httpClient.get<any>(this.baseUrl + '/products/bills/'+userId, httpOptions);
  }
}
