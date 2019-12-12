import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './store/homepage/homepage.component';
import { ProductsComponent } from './store/products/products.component';
import { AuthGuard } from './auth.guard';
import { AddProductComponent } from './store/add-product/add-product.component';
import { EditProductComponent } from './store/edit-product/edit-product.component';
import { CreateBillComponent } from './billing/create-bill/create-bill.component';
import { PurchaseHistoryComponent } from './billing/purchase-history/purchase-history.component';
import { OfferComponent } from './store/offers/offer/offer.component';
import { AddOfferComponent } from './store/offers/add-offer/add-offer.component';
import { UpdateOfferComponent } from './store/offers/update-offer/update-offer.component';
import { ForgetCredentialComponent } from './forget-credential/forget-credential.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgetCredential/:id', component: ForgetCredentialComponent },
  { path: 'producthome', component: ProductsComponent, canActivate:[AuthGuard] },
  { path: 'addNewProduct', component: AddProductComponent, canActivate:[AuthGuard] },
  { path: 'editProduct/:id', component: EditProductComponent, canActivate:[AuthGuard] },
  { path: 'createBill', component: CreateBillComponent, canActivate:[AuthGuard] },
  { path: 'purchasehistory', component: PurchaseHistoryComponent, canActivate:[AuthGuard] },
  { path: 'offerpage/:id', component: OfferComponent, canActivate:[AuthGuard] },
  { path: 'addOfferpage', component: AddOfferComponent, canActivate:[AuthGuard] },
  { path: 'updateOfferpage', component: UpdateOfferComponent, canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
