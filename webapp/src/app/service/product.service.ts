import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Products } from '../store/Products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = environment.baseUrl;
  item: any;
  constructor(private httpClient: HttpClient, private authService: AuthenticationService) { }

  getAllProducts() {
    console.log(this.authService.getToken());
    let token = "Bearer " + this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };
    return this.httpClient.get<any>(this.baseUrl + '/products', httpOptions);
  }

  getProductItem(id): Observable<any> {
    let token = "Bearer " + this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };

    return this.httpClient.get(this.baseUrl + '/products/editProduct/' + id, httpOptions);
  }

  sortByPopularity(){
    let token = "Bearer " + this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };

    return this.httpClient.get(this.baseUrl + '/products/sort-by-popularity', httpOptions);
  }
  addNewProduct(product: any) {
    var dateParts = product.addDate.split("/");
    var addDateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0] + 1);
    var dateParts = product.dateOfManufacture.split("/");
    var dateOfManufactureObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0] + 1);
    var dateParts = product.dateOfExpiry.split("/");
    var dateOfExpiryObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0] + 1);
    let token = 'Bearer ' + this.authService.getToken();

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    }
    let body = {
      productCode: product.productCode,
      productName: product.productName,
      productType: product.productType,
      brand: product.brand,
      quantityType: product.quantityType,
      rate: product.rate,
      stockCount: product.stockCount,
      addDate: addDateObject,
      aisle: product.aisle,
      shelf: product.shelf,
      dateOfManufacture: dateOfManufactureObject,
      dateOfExpiry: dateOfExpiryObject,
      image: product.image
    };
    return this.httpClient.post<any>(this.baseUrl + '/products/addNewProduct', body, httpOptions);
  }

  deleteProduct(id){
    let token = "Bearer " + this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };
    console.log(id+"delete");
    return this.httpClient.delete<any>(this.baseUrl + '/products/deleteProduct/'+id, httpOptions);
  }

  updateProduct(product){
    let token = "Bearer " + this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };

    var dateParts = product.addDate.split("/");
    var addDateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0] + 1);
    var dateParts = product.dateOfManufacture.split("/");
    var dateOfManufactureObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0] + 1);
    var dateParts = product.dateOfExpiry.split("/");
    var dateOfExpiryObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0] + 1);
  
    let body = {
      productCode: product.productCode,
      productName: product.productName,
      productType: product.productType,
      brand: product.brand,
      quantityType: product.quantityType,
      rate: product.rate,
      stockCount: product.stockCount,
      addDate: addDateObject,
      aisle: product.aisle,
      shelf: product.shelf,
      dateOfManufacture: dateOfManufactureObject,
      dateOfExpiry: dateOfExpiryObject,
      image: product.image
    };

    console.log(product);
    return this.httpClient.put<any>(this.baseUrl + '/products/updateProduct', body, httpOptions);
  }
}
