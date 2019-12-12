import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Offer } from '../store/Offer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  
  baseUrl = environment.baseUrl;
  constructor( private httpClient : HttpClient,
    private authenticateService: AuthenticationService) { }

  addOffer(offer){
    let token = "Bearer "+ this.authenticateService.getToken();
    const httpOption = { headers : new HttpHeaders({'Content-Type' : 'application/json', 'Authorization': token})};
    return this.httpClient.post<any[]>(this.baseUrl + '/products/offers/'+offer.product,offer ,  httpOption);
  }

  updateOffer(offer: Offer,id){
    let token = "Bearer "+ this.authenticateService.getToken();
    const httpOption = { headers : new HttpHeaders({'Content-Type' : 'application/json', 'Authorization': token})};
    return this.httpClient.put<any[]>(this.baseUrl + '/products/offers/'+id ,offer ,  httpOption);
  }

  deleteOffer(id){
    let token = "Bearer "+ this.authenticateService.getToken();
    const httpOption = { headers : new HttpHeaders({'Content-Type' : 'application/json', 'Authorization': token})};
    return this.httpClient.delete(this.baseUrl + '/products/offers/'+id ,  httpOption);
  }

  getOfferByDate(date){
    let token = "Bearer "+ this.authenticateService.getToken();
    const httpOption = { headers : new HttpHeaders({'Content-Type' : 'application/json', 'Authorization': token})};
    return this.httpClient.get<any[]>(this.baseUrl + '/products/offers-list/'+date , httpOption);
  }

  getOfferById(id){
    let token = "Bearer "+ this.authenticateService.getToken();
    const httpOption = { headers : new HttpHeaders({'Content-Type' : 'application/json', 'Authorization': token})};
    return this.httpClient.get<any>(this.baseUrl + '/products/offers/'+id , httpOption);
  }

  getCurrentOffer(){
    let token = "Bearer "+ this.authenticateService.getToken();
    const httpOption = { headers : new HttpHeaders({'Content-Type' : 'application/json', 'Authorization': token})};
    return this.httpClient.get<any>(this.baseUrl + '/products/offers', httpOption);
  }
}
