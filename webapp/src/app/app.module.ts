import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './store/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './store/search/search.component';
import { ProductListComponent } from './store/product-list/product-list.component';
import { ProductsComponent } from './store/products/products.component';
import { OwnerComponent } from './store/owner/owner.component';
import { CustomerComponent } from './store/customer/customer.component';
import { AddProductComponent } from './store/add-product/add-product.component';
import { EditProductComponent } from './store/edit-product/edit-product.component';
import { DatePipe } from '@angular/common';
import { CreateBillComponent } from './billing/create-bill/create-bill.component';
import { PurchaseHistoryComponent } from './billing/purchase-history/purchase-history.component';
import { OfferComponent } from './store/offers/offer/offer.component';
import { UpdateOfferComponent } from './store/offers/update-offer/update-offer.component';
import { AddOfferComponent } from './store/offers/add-offer/add-offer.component';
import { ForgetCredentialComponent } from './forget-credential/forget-credential.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    HomepageComponent,
    SearchComponent,
    ProductListComponent,
    ProductsComponent,
    OwnerComponent,
    CustomerComponent,
    AddProductComponent,
    EditProductComponent,
    CreateBillComponent,
    PurchaseHistoryComponent,
    OfferComponent,
    UpdateOfferComponent,
    AddOfferComponent,
    ForgetCredentialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
