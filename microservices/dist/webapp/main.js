(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _store_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/homepage/homepage.component */ "./src/app/store/homepage/homepage.component.ts");
/* harmony import */ var _store_products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/products/products.component */ "./src/app/store/products/products.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _store_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/add-product/add-product.component */ "./src/app/store/add-product/add-product.component.ts");
/* harmony import */ var _store_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/edit-product/edit-product.component */ "./src/app/store/edit-product/edit-product.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: _store_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"] },
    { path: 'home', component: _store_products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'addNewProduct', component: _store_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_7__["AddProductComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'editProduct', component: _store_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_8__["EditProductComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-wrapper {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    min-height: 92.7vh;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n.bg-color{\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#ffffff), color-stop(72%, #999595));\r\n    background: linear-gradient(to bottom, #ffffff 0%, #999595 72%);\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBYztJQUFkLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsNkJBQXVCO0lBQXZCLDhCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsMEJBQStCO1lBQS9CLCtCQUErQjtDQUNsQztBQUNEO0lBQ0kscUdBQWdFO0lBQWhFLGdFQUFnRTtJQUNoRSxtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1pbi1oZWlnaHQ6IDkyLjd2aDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmJnLWNvbG9ye1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZmZmZiAwJSwgIzk5OTU5NSA3MiUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"flex-wrapper\">\n    <div class=\"mb-5\">\n        <router-outlet></router-outlet>\n    </div>\n    <footer class=\"bg-color mt-4 p-3 text-white\">Copyright &copy; 2019. All Rights Reserved.</footer>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'webapp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _store_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/homepage/homepage.component */ "./src/app/store/homepage/homepage.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _store_search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/search/search.component */ "./src/app/store/search/search.component.ts");
/* harmony import */ var _store_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/product-list/product-list.component */ "./src/app/store/product-list/product-list.component.ts");
/* harmony import */ var _store_products_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store/products/products.component */ "./src/app/store/products/products.component.ts");
/* harmony import */ var _store_owner_owner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store/owner/owner.component */ "./src/app/store/owner/owner.component.ts");
/* harmony import */ var _store_customer_customer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./store/customer/customer.component */ "./src/app/store/customer/customer.component.ts");
/* harmony import */ var _store_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store/add-product/add-product.component */ "./src/app/store/add-product/add-product.component.ts");
/* harmony import */ var _store_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./store/edit-product/edit-product.component */ "./src/app/store/edit-product/edit-product.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _store_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__["HomepageComponent"],
                _store_search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"],
                _store_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_11__["ProductListComponent"],
                _store_products_products_component__WEBPACK_IMPORTED_MODULE_12__["ProductsComponent"],
                _store_owner_owner_component__WEBPACK_IMPORTED_MODULE_13__["OwnerComponent"],
                _store_customer_customer_component__WEBPACK_IMPORTED_MODULE_14__["CustomerComponent"],
                _store_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_15__["AddProductComponent"],
                _store_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_16__["EditProductComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/user-auth.service */ "./src/app/service/user-auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, userAuth) {
        this.router = router;
        this.userAuth = userAuth;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.userAuth.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-color{\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#3f3d3d), color-stop(72%, #999595));\r\n    background: linear-gradient(to bottom, #3f3d3d 0%, #999595 72%);\r\n}\r\n.text-color{\r\n    color: #30c0f8;\r\n}\r\n.text-font{\r\n    font-size: 25px;\r\n}\r\n.icon-size{\r\n   font-size: 35px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUdBQWdFO0lBQWhFLGdFQUFnRTtDQUNuRTtBQUNEO0lBQ0ksZUFBZTtDQUNsQjtBQUNEO0lBQ0ksZ0JBQWdCO0NBQ25CO0FBQ0Q7R0FDRyxnQkFBZ0I7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctY29sb3J7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjM2YzZDNkIDAlLCAjOTk5NTk1IDcyJSk7XHJcbn1cclxuLnRleHQtY29sb3J7XHJcbiAgICBjb2xvcjogIzMwYzBmODtcclxufVxyXG4udGV4dC1mb250e1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbi5pY29uLXNpemV7XHJcbiAgIGZvbnQtc2l6ZTogMzVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md bg-color navbar-dark text-white \">\n  <div class=\"navbar-brand text-font\"><b>\n      <i class=\"material-icons align-middle pb-2 text-color icon-size\">local_mall</i>\n      Easy<span class=\"text-color\">Buy</span></b></div>\n  <div class=\"d-flex justify-content-end\">\n\n  </div>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse justify-content-end\" id=\"collapsibleNavbar\">\n    <ul class=\" navbar-nav\">\n\n      <li class=\"nav-item\" *ngIf=\"getRole() != 'O' && getRole() != null\"><a class=\"nav-link text-white\"\n          routerLink=\"/shopping-cart\">Purchase</a></li>\n\n      <li class=\"nav-item\" *ngIf=\"getRole() != null\"><span class=\"nav-link text-white\"><i\n            class=\"material-icons align-top\">perm_identity</i>{{ getName() }}</span></li>\n\n      <li class=\"nav-item\" *ngIf=\"getRole() != 'O'\"><a class=\"nav-link text-white\" routerLink=\"\"><i\n            class=\"material-icons align-middle text-color pb-2\">house</i>Home</a></li>\n\n      <li class=\"nav-item\" *ngIf=\"getRole() == null\"><a class=\"nav-link text-white\" routerLink=\"/login\"><i\n            class=\"material-icons align-middle text-color pb-2\">person</i>Login</a></li>\n\n      <li class=\"nav-item\" *ngIf=\"getRole() == null\"><a class=\"nav-link text-white\" routerLink=\"/signup\"><i\n            class=\"material-icons align-middle text-color pb-2\">person_add</i>Register</a></li>\n\n      <li class=\"nav-item\" *ngIf=\"getRole() != null\"><a class=\"nav-link text-white\" routerLink=\"\"\n          (click)=\"logout()\">Logout</a></li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/user-auth.service */ "./src/app/service/user-auth.service.ts");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/service/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userAuth, authService) {
        this.userAuth = userAuth;
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        this.userAuth.logout();
    };
    HeaderComponent.prototype.getName = function () {
        return this.userAuth.currentUser();
    };
    HeaderComponent.prototype.getRole = function () {
        return this.authService.getRole();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_service_user_auth_service__WEBPACK_IMPORTED_MODULE_1__["UserAuthService"], _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-message{\r\n    background-color: #c2e1f5;\r\n    color: midnightblue;\r\n}\r\n.container-login{\r\n    margin-top: 120px;\r\n    margin-bottom: 100px;\r\n    position: center;\r\n    max-width: 400px;\r\n    box-shadow: 0px 0px 10px 0px #000000;\r\n}\r\n.login-color{\r\n    color: #30c0f8;\r\n    padding-top: 13%;\r\n    text-align: center;\r\n}\r\n.icon-size{\r\n    font-size: 50px;\r\n    padding-bottom: 13px;\r\n    color: #30c0f8;\r\n    text-align: center;\r\n}\r\n.font-menu{\r\n    font-size: 20px;\r\n}\r\n.bg-color{\r\n    background-color: #30c0f8;\r\n}\r\n.cart-empty{\r\n    background-color: #e9baba;\r\n    color: #8b0000;\r\n    margin-left: 2%;\r\n    position: absolute;\r\n}\r\n.highlight-link{\r\n    -webkit-transition: -webkit-transform 0.1s;\r\n    transition: -webkit-transform 0.1s;\r\n    transition: transform 0.1s;\r\n    transition: transform 0.1s, -webkit-transform 0.1s;\r\n}\r\n.highlight-link:hover{\r\n   -webkit-transform: scale(1.05);\r\n           transform: scale(1.05);\r\n}\r\n.errorMessage{\r\n    position: absolute;\r\n    color: #b22222;\r\n    font-size: 14px;\r\n}\r\n.notification-color{\r\n    background-color:  #c0fac0;\r\n    color: #006400;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixxQ0FBcUM7Q0FDeEM7QUFDRDtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLDJDQUEyQjtJQUEzQixtQ0FBMkI7SUFBM0IsMkJBQTJCO0lBQTNCLG1EQUEyQjtDQUM5QjtBQUNEO0dBQ0csK0JBQXVCO1dBQXZCLHVCQUF1QjtDQUN6QjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLDJCQUEyQjtJQUMzQixlQUFlO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1tZXNzYWdle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MyZTFmNTtcclxuICAgIGNvbG9yOiBtaWRuaWdodGJsdWU7XHJcbn1cclxuLmNvbnRhaW5lci1sb2dpbntcclxuICAgIG1hcmdpbi10b3A6IDEyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICBwb3NpdGlvbjogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggIzAwMDAwMDtcclxufVxyXG4ubG9naW4tY29sb3J7XHJcbiAgICBjb2xvcjogIzMwYzBmODtcclxuICAgIHBhZGRpbmctdG9wOiAxMyU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmljb24tc2l6ZXtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxM3B4O1xyXG4gICAgY29sb3I6ICMzMGMwZjg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZvbnQtbWVudXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uYmctY29sb3J7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzBjMGY4O1xyXG59XHJcbi5jYXJ0LWVtcHR5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5YmFiYTtcclxuICAgIGNvbG9yOiAjOGIwMDAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5oaWdobGlnaHQtbGlua3tcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzO1xyXG59XHJcbi5oaWdobGlnaHQtbGluazpob3ZlcntcclxuICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxufVxyXG4uZXJyb3JNZXNzYWdle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29sb3I6ICNiMjIyMjI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLm5vdGlmaWNhdGlvbi1jb2xvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjYzBmYWMwO1xyXG4gICAgY29sb3I6ICMwMDY0MDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-login\">\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n    <div class=\"cart-empty p-2 border border-danger rounded\" *ngIf=\"loginFlag == true;else\">Invalid User ID (or)\n      Incorrect Password\n    </div>\n    <div class=\"cart-empty p-2 border border-danger rounded\" *ngIf=\"statusFlag == true;else\">Account not approved\n    </div>\n    <ng-template #else>\n      <div></div>\n    </ng-template>\n    <h2 class=\" display-5 font-weight-bolder login-color mt-4\"><i\n        class=\"material-icons align-middle icon-size\">account_circle</i>Login</h2>\n    <div class=\"form-group row font-menu\">\n      <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 p-3\">\n        <label for=\"userName\">Username/UserId<b class=\"text-danger\">*</b></label>\n        <input type=\"text\" [ngClass]=\"[\n                  (loginForm.controls.username.dirty || loginForm.controls.username.touched) && loginForm.controls.username.invalid ? 'is-invalid' : '', \n                  (loginForm.controls.username.valid ||loginForm.controls.username.invalid) ? 'form-control' : '']\"\n          id=\"userName\" formControlName=\"username\" placeholder=\"Enter user id\" required>\n        <div class=\"errorMessage\"\n          *ngIf=\"!loginForm.controls.username.valid && (loginForm.controls.username.dirty || loginForm.controls.username.touched)\">\n          <div *ngIf=\"loginForm.controls.username.errors.required\">Username is required\n          </div>\n        </div>\n      </div>\n      <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 p-3\">\n        <label for=\"password\">Password<b class=\"text-danger\">*</b></label>\n        <input type=\"password\" [ngClass]=\"[\n                  (loginForm.controls.password.dirty || loginForm.controls.password.touched) && loginForm.controls.password.invalid ? 'is-invalid' : '', \n                  (loginForm.controls.password.valid ||loginForm.controls.password.invalid) ? 'form-control' : '']\"\n          id=\"password\" formControlName=\"password\" placeholder=\"Enter Password\" required>\n        <div class=\"errorMessage\"\n          *ngIf=\"!loginForm.controls.password.valid && (loginForm.controls.password.dirty || loginForm.controls.password.touched)\">\n          <div *ngIf=\"loginForm.controls.password.errors.required\">Password is required\n          </div>\n        </div>\n      </div>\n      <div class=\"col-3 col-sm-3 col-md-2 col-lg-2 p-3\">\n        <button type=\"submit\" class=\"bg-color text-white btn highlight-link\" [disabled]=\"!loginForm.valid\"\n          name=\"login\">Login</button>\n      </div>\n      <div class=\"col-9 col-sm-9 col-md-10 col-lg-10 p-3 text-right\">\n        <h6 class=\"text-secondary\">New here? <a routerLink=\"/signup\" class=\"signup-link\">Signup</a></h6>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/user-auth.service */ "./src/app/service/user-auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, userAuth, activateRoute) {
        this.authService = authService;
        this.router = router;
        this.userAuth = userAuth;
        this.activateRoute = activateRoute;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.statusFlag = false;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.authenticate(this.loginForm.value.username, this.loginForm.value.password)
            .subscribe(function (response) {
            _this.authService.setToken(response.token);
            _this.authService.setRole(response.role);
            _this.authService.setUser(response.user);
            _this.userAuth.login(_this.loginForm.value.userId);
            if (response.status == 'P' || response.status == null) {
                console.log(response.status);
                _this.statusFlag = true;
            }
            else {
                _this.userAuth.setRole(response.role);
                _this.router.navigate(['/home']);
            }
        }, function (error) {
            _this.loginFlag = true;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_service_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_user_auth_service__WEBPACK_IMPORTED_MODULE_4__["UserAuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/service/authentication.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/authentication.service.ts ***!
  \***************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(httpClient) {
        this.httpClient = httpClient;
        this.authenticationApiUrl = 'http://localhost:8083/authentication-service/authentication';
    }
    AuthenticationService.prototype.authenticate = function (user, password) {
        var credentials = btoa(user + ':' + password);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Authorization', 'Basic ' + credentials);
        return this.httpClient.get(this.authenticationApiUrl, { headers: headers });
    };
    AuthenticationService.prototype.setToken = function (token) {
        this.token = token;
    };
    AuthenticationService.prototype.getToken = function () {
        return this.token;
    };
    AuthenticationService.prototype.setRole = function (role) {
        this.role = role;
    };
    AuthenticationService.prototype.getRole = function () {
        return this.role;
    };
    AuthenticationService.prototype.setStatus = function (role) {
        this.role = role;
    };
    AuthenticationService.prototype.getStatus = function () {
        return this.role;
    };
    AuthenticationService.prototype.setUser = function (user) {
        this.user = user;
    };
    AuthenticationService.prototype.getUser = function () {
        return this.user;
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/service/product.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/product.service.ts ***!
  \********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductService = /** @class */ (function () {
    function ProductService(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    ProductService.prototype.getAllProducts = function () {
        console.log(this.authService.getToken());
        var token = "Bearer " + this.authService.getToken();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.httpClient.get(this.baseUrl + '/products', httpOptions);
    };
    ProductService.prototype.addNewProduct = function (product) {
        var dateParts = product.addDate.split("/");
        var addDateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0] + 1);
        var dateParts = product.dateOfManufacture.split("/");
        var dateOfManufactureObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0] + 1);
        var dateParts = product.dateOfExpiry.split("/");
        var dateOfExpiryObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0] + 1);
        var token = 'Bearer ' + this.authService.getToken();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        var body = {
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
        return this.httpClient.post(this.baseUrl + '/products/addNewProduct', body, httpOptions);
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/service/user-auth.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/user-auth.service.ts ***!
  \**********************************************/
/*! exports provided: UserAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthService", function() { return UserAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/service/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserAuthService = /** @class */ (function () {
    function UserAuthService(authService) {
        this.authService = authService;
        this.loggedIn = false;
        this.role = null;
    }
    UserAuthService.prototype.currentUser = function () {
        return this.username;
    };
    UserAuthService.prototype.setRole = function (role) {
        this.role = role;
    };
    UserAuthService.prototype.login = function (name) {
        this.username = name;
        this.loggedIn = true;
    };
    UserAuthService.prototype.logout = function () {
        this.role = null;
        this.authService.setUser(null);
        this.authService.setRole(null);
        this.authService.setToken(null);
        this.loggedIn = false;
    };
    UserAuthService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    UserAuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], UserAuthService);
    return UserAuthService;
}());



/***/ }),

/***/ "./src/app/service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/service/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    UserService.prototype.addUser = function (newUser) {
        var uss = this.httpClient.post('http://localhost:8083/authentication-service/users', newUser, this.httpOptions);
        return uss;
    };
    UserService.prototype.getPendingList = function () {
        var token = "Bearer " + this.authService.getToken();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.httpClient.get(this.baseUrl + '/owner', httpOptions);
    };
    UserService.prototype.approveManagerStatus = function (user) {
        user.status = 'A';
        var token = "Bearer " + this.authService.getToken();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.httpClient.put(this.baseUrl + '/owner', user, httpOptions);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .form-color{\r\n   margin: 2% 20% 2% 20%;\r\n   padding: 0% 2% 2% 2%;\r\n   box-shadow: 0px 0px 10px 0px #000000;\r\n}\r\n.icon-size{\r\n    font-size: 35px;\r\n    color: #539bb3;\r\n}\r\n.text-color{\r\n    color: #539bb3;\r\n    text-align: center;\r\n}\r\n.bg-color{\r\n    background-color: #3f3d3d;\r\n}\r\n.errorMessage{\r\n    position: absolute;\r\n    color: #c90c0c;\r\n    font-size: 14px;\r\n}\r\n.signup-form{\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    overflow: auto;\r\n}\r\n.notification-color{\r\n    color: midnightblue;\r\n    padding: 20%;\r\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(30%, #9c9c90), color-stop(92%, #93e1ff));\r\n    background: linear-gradient(to bottom, #9c9c90 30%, #93e1ff 92%);\r\n}\r\n.login-link:hover{\r\n    color: rgb(248, 70, 6);\r\n    text-decoration: none;\r\n}\r\n.login-link:link, .login-link:active{\r\n    color: midnightblue;\r\n    text-decoration: none;\r\n}\r\n.exist-user{\r\n    color: #3f3d3d;\r\n}\r\n.highlight-link{\r\n    -webkit-transition: -webkit-transform 0.1s;\r\n    transition: -webkit-transform 0.1s;\r\n    transition: transform 0.1s;\r\n    transition: transform 0.1s, -webkit-transform 0.1s;\r\n}\r\n.highlight-link:hover{\r\n   -webkit-transform: scale(1.05);\r\n           transform: scale(1.05);\r\n}\r\n.cart-empty{\r\n    background-color: #e9baba;\r\n    color: #8b0000;\r\n    font-size: 18px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDO0dBQ0Usc0JBQXNCO0dBQ3RCLHFCQUFxQjtHQUNyQixxQ0FBcUM7Q0FDdkM7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSwwQkFBMEI7Q0FDN0I7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1AsVUFBVTtJQUNWLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsZ0hBQWlFO0lBQWpFLGlFQUFpRTtDQUNwRTtBQUNEO0lBQ0ksdUJBQXVCO0lBQ3ZCLHNCQUFzQjtDQUN6QjtBQUNEO0lBQ0ksb0JBQW9CO0lBQ3BCLHNCQUFzQjtDQUN6QjtBQUNEO0lBQ0ksZUFBZTtDQUNsQjtBQUNEO0lBQ0ksMkNBQTJCO0lBQTNCLG1DQUEyQjtJQUEzQiwyQkFBMkI7SUFBM0IsbURBQTJCO0NBQzlCO0FBQ0Q7R0FDRywrQkFBdUI7V0FBdkIsdUJBQXVCO0NBQ3pCO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAuZm9ybS1jb2xvcntcclxuICAgbWFyZ2luOiAyJSAyMCUgMiUgMjAlO1xyXG4gICBwYWRkaW5nOiAwJSAyJSAyJSAyJTtcclxuICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCAjMDAwMDAwO1xyXG59XHJcbi5pY29uLXNpemV7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBjb2xvcjogIzUzOWJiMztcclxufVxyXG4udGV4dC1jb2xvcntcclxuICAgIGNvbG9yOiAjNTM5YmIzO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5iZy1jb2xvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjNkM2Q7XHJcbn1cclxuLmVycm9yTWVzc2FnZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbG9yOiAjYzkwYzBjO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5zaWdudXAtZm9ybXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4ubm90aWZpY2F0aW9uLWNvbG9ye1xyXG4gICAgY29sb3I6IG1pZG5pZ2h0Ymx1ZTtcclxuICAgIHBhZGRpbmc6IDIwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM5YzljOTAgMzAlLCAjOTNlMWZmIDkyJSk7XHJcbn1cclxuLmxvZ2luLWxpbms6aG92ZXJ7XHJcbiAgICBjb2xvcjogcmdiKDI0OCwgNzAsIDYpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5sb2dpbi1saW5rOmxpbmssIC5sb2dpbi1saW5rOmFjdGl2ZXtcclxuICAgIGNvbG9yOiBtaWRuaWdodGJsdWU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmV4aXN0LXVzZXJ7XHJcbiAgICBjb2xvcjogIzNmM2QzZDtcclxufVxyXG4uaGlnaGxpZ2h0LWxpbmt7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcztcclxufVxyXG4uaGlnaGxpZ2h0LWxpbms6aG92ZXJ7XHJcbiAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuLmNhcnQtZW1wdHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTliYWJhO1xyXG4gICAgY29sb3I6ICM4YjAwMDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"signupFlag == true;else elseBlock\">\n  <div>\n    <h3 class=\"notification-color\">Your registration is successful.Go to\n      <a routerLink=\"/login\" class=\"login-link\">Login Page</a> to continue shopping.</h3>\n  </div>\n</div>\n<ng-template #elseBlock>\n  <div class=\"container pt-2\">\n    <form class=\"row form-color font-menu\" [formGroup]=\"signupForm\" (ngSubmit)=\"signup()\">\n      <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\n        <h2 class=\"text-color font-weight-bolder mt-lg-4  pt-3\"><i\n            class=\"material-icons align-middle icon-size pb-2\">person_add</i> Signup</h2>\n        <div class=\"col badge\" *ngIf=\"errorFlag == true\"><span class=\"cart-empty p-2 border rounded mt-4\">User Already\n            Exists</span></div>\n      </div>\n\n\n      <div class=\"col-12 col-sm-12 col-md-6 col-lg-6 mb-lg-4 p-3\">\n        <label for=\"firstName\">First Name <b class=\"text-danger\">*</b></label>\n        <input type=\"text\"\n          [ngClass]=\"[\n                        (signupForm.controls.firstName.dirty || signupForm.controls.firstName.touched) && signupForm.controls.firstName.invalid ? 'is-invalid' : '', \n                        (signupForm.controls.firstName.valid || signupForm.controls.firstName.invalid) ? 'form-control' : '']\"\n                                id=\"firstName\" formControlName=\"firstName\" placeholder=\"Enter First Name\">\n        <div\n          *ngIf=\"!signupForm.controls.firstName.valid && (signupForm.controls.firstName.dirty || signupForm.controls.firstName.touched)\">\n          <div class=\"errorMessage invalid-feedback\"\n            *ngIf=\"signupForm.controls.firstName.errors.required || signupForm.controls.firstName.errors.maxlength\">\n            Please update the highlighted mandatory field(s).</div>\n        </div>\n      </div>\n\n      <div class=\"col-12 col-sm-12 col-md-6 col-lg-6 mb-lg-4 p-3\">\n        <label for=\"lastName\">Last Name <b class=\"text-danger\">*</b></label>\n        <input type=\"text\"\n          [ngClass]=\"[\n                      (signupForm.controls.lastName.dirty || signupForm.controls.lastName.touched) && signupForm.controls.lastName.invalid ? 'is-invalid' : '', \n                      (signupForm.controls.lastName.valid || signupForm.controls.lastName.invalid) ? 'form-control' : '']\" id=\"lastName\"\n          formControlName=\"lastName\" placeholder=\"Enter Last Name\">\n        <div\n          *ngIf=\"!signupForm.controls.lastName.valid && (signupForm.controls.lastName.dirty || signupForm.controls.lastName.touched)\">\n          <div class=\"errorMessage\"\n            *ngIf=\"signupForm.controls.lastName.errors.required || signupForm.controls.lastName.errors.required\">\n            Please update the highlighted mandatory field(s).</div>\n        </div>\n      </div>\n\n      <div class=\"col-12 col-sm-12 col-md-12 col-lg-4 mb-lg-4 p-3\">\n        <label for=\"age\">Age <b class=\"text-danger\">*</b></label>\n        <input type=\"text\" [ngClass]=\"[\n                        (signupForm.controls.age.dirty || signupForm.controls.age.touched) && signupForm.controls.age.invalid ? 'is-invalid' : '', \n                        (signupForm.controls.age.valid || signupForm.controls.age.invalid) ? 'form-control' : '']\"\n          id=\"age\" formControlName=\"age\" placeholder=\"Enter the age\"\n          onkeypress=\"return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))\">\n        <div\n          *ngIf=\"!signupForm.controls.age.valid && (signupForm.controls.age.dirty || signupForm.controls.age.touched)\">\n          <div class=\"errorMessage\"\n            *ngIf=\"signupForm.controls.age.errors.required || signupForm.controls.age.errors.maxlength\">\n            Please update the highlighted mandatory field(s).</div>\n        </div>\n      </div>\n      <div class=\"col-12 col-sm-12 col-md-12 col-lg-4 mb-lg-4 p-3\">\n        <label for=\"gender\">Gender</label>\n        <select class=\"form-control\" id=\"gender\" formControlName=\"gender\">\n          <option value=\"\" [selected]=\"true\" hidden>--Select Gender--</option>\n          <option value=\"Male\">Male</option>\n          <option value=\"Female\">Female</option>\n        </select>\n      </div>\n      <div class=\"col-12 col-sm-12 col-md-12 col-lg-4 mb-lg-4 p-3\">\n        <label for=\"contactNumber\">Contact Number <b class=\"text-danger\">*</b></label>\n        <input type=\"text\"\n          [ngClass]=\"[\n                            (signupForm.controls.contactNumber.dirty || signupForm.controls.contactNumber.touched) && signupForm.controls.contactNumber.invalid ? 'is-invalid' : '', \n                            (signupForm.controls.contactNumber.valid || signupForm.controls.contactNumber.invalid) ? 'form-control' : '']\"\n          id=\"contactNumber\" formControlName=\"contactNumber\" placeholder=\"Enter contact\"\n          onkeypress=\"return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))\"\n           >\n        <div\n          *ngIf=\"!signupForm.controls.contactNumber.valid && (signupForm.controls.contactNumber.dirty || signupForm.controls.contactNumber.touched)\">\n          <div class=\"errorMessage\"\n            *ngIf=\"signupForm.controls.contactNumber.errors.required || signupForm.controls.contactNumber.errors.maxlength\">\n            Please update the highlighted mandatory field(s).</div>\n        </div>\n      </div>\n\n      <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 mb-lg-6 p-3\">\n        <label for=\"userType\">Select ROLE to Register</label>\n        <select\n          [ngClass]=\"[\n                            (signupForm.controls.userType.dirty || signupForm.controls.userType.touched) && signupForm.controls.userType.invalid ? 'is-invalid' : '', \n                            (signupForm.controls.userType.valid || signupForm.controls.userType.invalid) ? 'form-control' : '']\"\n          id=\"userType\" formControlName=\"userType\">\n          <option value=\"\" [selected]=\"true\" hidden>--Select role--</option>\n          <option value=\"U\">User</option>\n          <option value=\"A\">Shop Manager</option>\n        </select>\n      </div>\n\n\n      <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 mb-lg-6 p-3\">\n        <label for=\"userId\">User Id <b class=\"text-danger\">*</b></label>\n        <input type=\"text\"\n          [ngClass]=\"[\n                            (signupForm.controls.userId.dirty || signupForm.controls.userId.touched) && signupForm.controls.userId.invalid ? 'is-invalid' : '', \n                            (signupForm.controls.userId.valid || signupForm.controls.userId.invalid) ? 'form-control' : '']\" id=\"userId\"\n          formControlName=\"userId\" placeholder=\"Enter user id\">\n        <div\n          *ngIf=\"!signupForm.controls.userId.valid && (signupForm.controls.userId.dirty || signupForm.controls.userId.touched)\">\n          <div class=\"errorMessage\"\n            *ngIf=\"signupForm.controls.userId.errors.required || signupForm.controls.userId.errors.maxlength\">\n            Please update the highlighted mandatory field(s).\n          </div>\n        </div>\n      </div>\n      <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 mb-lg-6 p-3\">\n        <label for=\"password\">Password <b class=\"text-danger\">*</b></label><br>\n        <input type=\"password\"\n          [ngClass]=\"[\n                            (signupForm.controls.password.dirty || signupForm.controls.password.touched) && signupForm.controls.password.invalid ? 'is-invalid' : '', \n                            (signupForm.controls.password.valid || signupForm.controls.password.invalid) ? 'form-control' : '']\"\n          id=\"password\" formControlName=\"password\" placeholder=\"Enter Password\">\n        <div class=\"errorMessage\">\n          <div\n            *ngIf=\"!signupForm.controls.password.valid && (signupForm.controls.password.dirty || signupForm.controls.password.touched)\">\n            <div *ngIf=\"signupForm.controls.password.errors.required || signupForm.controls.password.errors.maxlength\">\n              Please update the highlighted mandatory field(s).</div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 mb-lg-4 p-3\">\n        <label for=\"confirmPassword\">Confirm Password <b class=\"text-danger\">*</b></label><br>\n        <input type=\"password\"\n          [ngClass]=\"[\n                            (signupForm.controls.confirmPassword.dirty || signupForm.controls.confirmPassword.touched) && signupForm.controls.confirmPassword.invalid ? 'is-invalid' : '', \n                            (signupForm.controls.confirmPassword.valid || signupForm.controls.confirmPassword.invalid) ? 'form-control' : '']\"\n          id=\"confirmPassword\" formControlName=\"confirmPassword\" placeholder=\"Enter Confirm Password\"\n          (keyup)=\"passwordMatch()\">\n        <div class=\"errorMessage\">\n          <div\n            *ngIf=\"!signupForm.controls.confirmPassword.valid && (signupForm.controls.confirmPassword.dirty || signupForm.controls.confirmPassword.touched)\">\n            <div *ngIf=\"signupForm.controls.confirmPassword.errors.required\">Confirm\n              Password is required</div>\n          </div>\n          <div *ngIf=\"signupForm.controls.confirmPassword.dirty || signupForm.controls.confirmPassword.touched\">\n            <div *ngIf=\"passwordFlag == false\">Password mismatch</div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 mb-lg-12 p-3\">\n        <label for=\"question1\">1)Select a Security Question</label>\n        <select name=\"question1\" class=\"form-control\" id=\"question1\" formControlName=\"question1\">\n          <option value=\"\" [selected]=\"true\" hidden>--Select secret question--</option>\n          <option value=\"what is your Nick name\">what is your Nick name</option>\n          <option value=\"what is your favorite sport\">what is your favorite sport</option>\n        </select>\n\n        <label for=\"answer1\">Enter your Answer</label>\n        <input type=\"text\"\n          [ngClass]=\"[(signupForm.controls.answer1.valid || signupForm.controls.answer1.invalid) ? 'form-control' : '',\n                \n                            (signupForm.controls.answer1.dirty) && signupForm.controls.answer1.invalid ? 'is-invalid' : '']\"           \n          id=\"answer1\" formControlName=\"answer1\" placeholder=\"Enter Secret Answer\">\n        <div\n          *ngIf=\"!signupForm.controls.answer1.valid && (signupForm.controls.answer1.dirty || signupForm.controls.answer1.touched)\">\n          <div class=\"errorMessage\"\n            *ngIf=\"signupForm.controls.answer1.errors.required || signupForm.controls.answer1.errors.maxlength\">\n            Please update the highlighted mandatory field(s).\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 mb-lg-12 p-3\">\n        <label for=\"question2\">2)Select a Security Question</label>\n        <select name=\"question2\" class=\"form-control\" id=\"question2\" formControlName=\"question2\">\n          <option value=\"\" [selected]=\"true\" hidden>--Select secret question--</option>\n          <option value=\"what is your favorite food\">what is your favorite food</option>\n          <option value=\"what is your favorite color\">what is your favorite color</option>\n        </select>\n        <label for=\"answer2\">Enter your Answer</label>\n        <input type=\"text\"\n          [ngClass]=\"[\n                            (signupForm.controls.answer2.dirty || signupForm.controls.answer2.touched) && signupForm.controls.answer2.invalid ? 'is-invalid' : '', \n                            (signupForm.controls.answer2.valid || signupForm.controls.answer2.invalid) ? 'form-control' : '']\"\n          id=\"answer2\" formControlName=\"answer2\" placeholder=\"Enter Secret Answer\">\n        <div\n          *ngIf=\"!signupForm.controls.answer2.valid && (signupForm.controls.answer2.dirty || signupForm.controls.answer2.touched)\">\n          <div class=\"errorMessage\"\n            *ngIf=\"signupForm.controls.answer2.errors.required || signupForm.controls.answer2.errors.maxlength\">\n            Please update the highlighted mandatory field(s).\n          </div>\n        </div>\n      </div>\n      <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 mb-lg-12 p-3\">\n        <label for=\"question3\">3)Select a Security Question</label>\n        <select name=\"question3\" class=\"form-control\" id=\"question3\" formControlName=\"question3\">\n          <option value=\"\" [selected]=\"true\" hidden>--Select secret question--</option>\n          <option value=\"what is your favorite holiday spot\">what is your favorite holiday spot</option>\n          <option value=\"what is your pet name\">what is your pet name</option>\n        </select>\n        <label for=\"answer3\">Enter your Answer</label>\n        <input type=\"text\"\n          [ngClass]=\"[\n                            (signupForm.controls.answer3.dirty || signupForm.controls.answer3.touched) && signupForm.controls.answer3.invalid ? 'is-invalid' : '', \n                            (signupForm.controls.answer3.valid || signupForm.controls.answer3.invalid) ? 'form-control' : '']\"\n          id=\"answer3\" formControlName=\"answer3\" placeholder=\"Enter Secret Answer\">\n        <div\n          *ngIf=\"!signupForm.controls.answer3.valid && (signupForm.controls.answer3.dirty || signupForm.controls.answer3.touched)\">\n          <div class=\"errorMessage\"\n            *ngIf=\"signupForm.controls.answer3.errors.required || signupForm.controls.answer3.errors.maxlength\">\n            Please update the highlighted mandatory field(s).\n          </div>\n        </div>\n      </div>\n\n\n\n      <div class=\"col-6 col-sm-6 col-md-3 col-lg-3 p-3\">\n        <button type=\"submit\" class=\"bg-color text-white btn highlight-link\" [disabled]=\"!signupForm.valid\"\n          name=\"signup\">Signup</button>\n      </div>\n      <div class=\"col-6 col-sm-6 col-md-9 col-lg-9\">\n        <div class=\"exist-user\">Already a member? <a class=\"login-link\" routerLink=\"/login\">Login</a>\n        </div>\n      </div>\n    </form>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupFlag = false;
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'firstName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15)
            ]),
            'lastName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15)
            ]),
            'age': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(2)
            ]),
            'gender': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            'contactNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)
            ]),
            'userType': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15)
            ]),
            'userId': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15)
            ]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            'confirmPassword': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            'question1': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
            ]),
            'answer1': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
            ]),
            'question2': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
            ]),
            'answer2': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
            ]),
            'question3': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
            ]),
            'answer3': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
            ]),
        });
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        if (this.signupForm.value.userType == 'U') {
            this.status = 'A';
        }
        else {
            this.status = 'P';
        }
        this.newUser = {
            firstName: this.signupForm.value.firstName,
            lastName: this.signupForm.value.lastName,
            age: this.signupForm.value.age,
            gender: this.signupForm.value.gender,
            contactNumber: this.signupForm.value.contactNumber,
            userType: this.signupForm.value.userType,
            status: this.status,
            userId: this.signupForm.value.userId,
            password: this.signupForm.value.password,
            question1: this.signupForm.value.question1,
            answer1: this.signupForm.value.answer1,
            question2: this.signupForm.value.question2,
            answer2: this.signupForm.value.answer2,
            question3: this.signupForm.value.question3,
            answer3: this.signupForm.value.answer3
        };
        this.userService.addUser(this.newUser).subscribe(function (response) {
            _this.signupFlag = true;
            _this.router.navigate(['/signup']);
        }, function (error) {
            _this.signupFlag = false;
            _this.errorFlag = true;
        });
    };
    SignupComponent.prototype.passwordMatch = function () {
        if (this.signupForm.value.password == this.signupForm.value.confirmPassword) {
            this.passwordFlag = true;
        }
        else {
            this.passwordFlag = false;
        }
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/store/add-product/add-product.component.css":
/*!*************************************************************!*\
  !*** ./src/app/store/add-product/add-product.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".errorMessage{\r\n    position: absolute;\r\n    color: #b22222;\r\n    font-size: 14px;\r\n}\r\n.login-color{\r\n    color: #30c0f8;\r\n    text-align: center;\r\n}\r\n.icon-size{\r\n    font-size: 50px;\r\n    padding-bottom: 13px;\r\n    color: #30c0f8;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcmUvYWRkLXByb2R1Y3QvYWRkLXByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9zdG9yZS9hZGQtcHJvZHVjdC9hZGQtcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yTWVzc2FnZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbG9yOiAjYjIyMjIyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5sb2dpbi1jb2xvcntcclxuICAgIGNvbG9yOiAjMzBjMGY4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5pY29uLXNpemV7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICAgIGNvbG9yOiAjMzBjMGY4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/store/add-product/add-product.component.html":
/*!**************************************************************!*\
  !*** ./src/app/store/add-product/add-product.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid  mt-5 bg-light\">\n  <br><br>\n  <h2 class=\" display-5 font-weight-bolder login-color mt-4\"><i\n      class=\"material-icons align-middle icon-size\">add_shopping_cart</i> Add Product</h2>\n  <form class=\"border  p-4\" [formGroup]=\"addProductForm\" method=\"post\">\n    <div class=\"row\">\n      <div class=\"form-group col-lg-3 col-md-6 col-sm-12\">\n        <label for=\"productCode\">\n          Enter code:\n        </label>\n        <input type=\"text\"\n          [ngClass]=\"[\n                  (addProductForm.controls.productCode.dirty || addProductForm.controls.productCode.touched) && addProductForm.controls.productCode.invalid ? 'is-invalid' : '', \n                  (addProductForm.controls.productCode.valid ||addProductForm.controls.productCode.invalid) ? 'form-control' : '']\"\n          id=\"productCode\" formControlName=\"productCode\">\n\n        <div class=\"errorMessage\"\n          *ngIf=\"!addProductForm.controls.productCode.valid && (addProductForm.controls.productCode.dirty || addProductForm.controls.productCode.touched)\">\n          <div *ngIf=\"addProductForm.controls.productCode.errors.required\">Please enter valid code !\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group col-lg-3 col-md-6 col-sm-12\">\n        <label for=\"productName\">\n          Enter Product Name\n        </label>\n        <input type=\"text\"\n          [ngClass]=\"[\n                  (addProductForm.controls.productName.dirty || addProductForm.controls.productName.touched) && addProductForm.controls.productName.invalid ? 'is-invalid' : '', \n                  (addProductForm.controls.productName.valid ||addProductForm.controls.productName.invalid) ? 'form-control' : '']\"\n          id=\"productName\" formControlName=\"productName\">\n\n        <div class=\"errorMessage\"\n          *ngIf=\"!addProductForm.controls.productName.valid && (addProductForm.controls.productName.dirty || addProductForm.controls.productName.touched)\">\n          <div *ngIf=\"addProductForm.controls.productName.errors.required\">Please enter valid product name!\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group col-lg-3 col-md-6 col-sm-12\">\n        <div class=\"row\">\n          <label for=\"productType\">\n            Enter Product Type\n          </label>\n        </div>\n        <div class=\"row \">\n          <select\n            [ngClass]=\"[\n                  (addProductForm.controls.productType.dirty || addProductForm.controls.productType.touched) && addProductForm.controls.productType.invalid ? 'is-invalid' : '', \n                  (addProductForm.controls.productType.valid ||addProductForm.controls.productType.invalid) ? 'form-control' : '']\"\n            formControlName=\"productType\" id=\"productType\">\n            <option value=\"1\">1-Home and Kitchen</option>\n            <option value=\"2\">2-Bakery</option>\n            <option value=\"3\">3-Fruits and vegetables</option>\n            <option value=\"4\">4-snacks</option>\n          </select>\n        </div>\n\n        <div class=\"errorMessage\"\n          *ngIf=\"!addProductForm.controls.productType.valid && (addProductForm.controls.productType.dirty || addProductForm.controls.productType.touched)\">\n          <div *ngIf=\"addProductForm.controls.productType.errors.required\">Please enter valid product name!\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"form-group col-lg-3 col-md-6 col-sm-12\">\n        <label for=\"brand\">\n          Enter Product Brand\n        </label>\n        <input type=\"text\" [ngClass]=\"[\n                  (addProductForm.controls.brand.dirty || addProductForm.controls.brand.touched) && addProductForm.controls.brand.invalid ? 'is-invalid' : '', \n                  (addProductForm.controls.brand.valid ||addProductForm.controls.brand.invalid) ? 'form-control' : '']\"\n          id=\"brand\" formControlName=\"brand\">\n        <div class=\"errorMessage\"\n          *ngIf=\"!addProductForm.controls.brand.valid && (addProductForm.controls.brand.dirty || addProductForm.controls.brand.touched)\">\n          <div *ngIf=\"addProductForm.controls.brand.errors.required\">Please enter valid product brand name!\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"row\">\n      <div class=\"form-group col-lg-3 col-md-6 col-sm-12\">\n        <label for=\"quantity-type\">\n          Enter Quantity Type:\n        </label>\n        <div class=\"row \">\n          <select\n            [ngClass]=\"[\n                  (addProductForm.controls.quantityType.dirty || addProductForm.controls.quantityType.touched) && addProductForm.controls.quantityType.invalid ? 'is-invalid' : '', \n                  (addProductForm.controls.quantityType.valid ||addProductForm.controls.quantityType.invalid) ? 'form-control' : '']\"\n            formControlName=\"quantityType\" id=\"quantity-type\">\n            <option value=\"1\">1-numbers</option>\n            <option value=\"2\">2-packets</option>\n            <option value=\"3\">3-kg's</option>\n          </select>\n        </div>\n        <div class=\"errorMessage\"\n          *ngIf=\"!addProductForm.controls.quantityType.valid && (addProductForm.controls.quantityType.dirty || addProductForm.controls.quantityType.touched)\">\n          <div *ngIf=\"addProductForm.controls.quantityType.errors.required\">Please enter valid Quantity type !\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group col-lg-3 col-md-6 col-sm-12\">\n        <label for=\"rate\">\n          Enter rate per quantity\n        </label>\n        <input type=\"text\" [ngClass]=\"[\n                  (addProductForm.controls.rate.dirty || addProductForm.controls.rate.touched) && addProductForm.controls.rate.invalid ? 'is-invalid' : '', \n                  (addProductForm.controls.rate.valid ||addProductForm.controls.rate.invalid) ? 'form-control' : '']\"\n          id=\"rate\" formControlName=\"rate\">\n\n        <div class=\"errorMessage\"\n          *ngIf=\"!addProductForm.controls.rate.valid && (addProductForm.controls.rate.dirty || addProductForm.controls.rate.touched)\">\n          <div *ngIf=\"addProductForm.controls.rate.errors.required\">Please enter valid rate per quantity!\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group col-lg-3 col-md-6 col-sm-12\">\n        <div class=\"row\">\n          <label for=\"stockCount\">\n            Enter Stock Count\n          </label>\n        </div>\n        <input type=\"text\"\n          [ngClass]=\"[\n                  (addProductForm.controls.stockCount.dirty || addProductForm.controls.stockCount.touched) && addProductForm.controls.stockCount.invalid ? 'is-invalid' : '', \n                  (addProductForm.controls.stockCount.valid ||addProductForm.controls.stockCount.invalid) ? 'form-control' : '']\"\n          id=\"stock-count-form\" formControlName=\"stockCount\">\n\n        <div class=\"errorMessage\"\n          *ngIf=\"!addProductForm.controls.stockCount.valid && (addProductForm.controls.stockCount.dirty || addProductForm.controls.stockCount.touched)\">\n          <div *ngIf=\"addProductForm.controls.stockCount.errors.required\">Please enter valid stock count!\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group col-lg-3 col-md-6 col-sm-12\">\n        <label for=\"add-date\">\n          Enter Product add date:\n        </label>\n        <input type=\"text\"\n          [ngClass]=\"[\n                  (addProductForm.controls.addDate.dirty || addProductForm.controls.addDate.touched) && addProductForm.controls.addDate.invalid ? 'is-invalid' : '', \n                  (addProductForm.controls.addDate.valid ||addProductForm.controls.addDate.invalid) ? 'form-control' : '']\"\n          id=\"add-date\" formControlName=\"addDate\">\n\n        <div class=\"errorMessage\"\n          *ngIf=\"!addProductForm.controls.addDate.valid && (addProductForm.controls.addDate.dirty || addProductForm.controls.addDate.touched)\">\n          <div *ngIf=\"addProductForm.controls.addDate.errors.required\">Please enter valid product add date!\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"form-group col-lg-3 col-md-6 col-sm-12\">\n        <label for=\"aisle\">\n          Enter aisle:\n        </label>\n        <input type=\"text\" [ngClass]=\"[\n                  (addProductForm.controls.aisle.dirty || addProductForm.controls.aisle.touched) && addProductForm.controls.aisle.invalid ? 'is-invalid' : '', \n                  (addProductForm.controls.aisle.valid ||addProductForm.controls.aisle.invalid) ? 'form-control' : '']\"\n          id=\"aisle\" formControlName=\"aisle\">\n\n        <div class=\"errorMessage\"\n          *ngIf=\"!addProductForm.controls.aisle.valid && (addProductForm.controls.aisle.dirty || addProductForm.controls.aisle.touched)\">\n          <div *ngIf=\"addProductForm.controls.aisle.errors.required\">Please enter valid aisle!\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group col-lg-3 col-md-6 col-sm-12\">\n        <label for=\"shelf-form\">\n          Enter shelf:\n        </label>\n        <input type=\"text\"\n          [ngClass]=\"[\n                  (addProductForm.controls.shelf.dirty || addProductForm.controls.shelf.touched) && addProductForm.controls.shelf.invalid ? 'is-invalid' : '', \n                  (addProductForm.controls.shelf.valid || addProductForm.controls.shelf.invalid) ? 'form-control' : '']\" id=\"shelf-form\"\n          formControlName=\"shelf\">\n\n        <div class=\"errorMessage\"\n          *ngIf=\"!addProductForm.controls.shelf.valid && (addProductForm.controls.shelf.dirty || addProductForm.controls.shelf.touched)\">\n          <div *ngIf=\"addProductForm.controls.shelf.errors.required\">Please enter valid shelf number!\n          </div>\n        </div>\n\n\n      </div>\n\n\n      <div class=\"form-group col-lg-3 col-md-6 col-sm-12\">\n        <label for=\"mfg-form\">\n          Enter Product MANUFACTURE Date:\n        </label>\n        <input type=\"text\"\n          [ngClass]=\"[\n                  (addProductForm.controls.dateOfManufacture.dirty || addProductForm.controls.dateOfManufacture.touched) && addProductForm.controls.dateOfManufacture.invalid ? 'is-invalid' : '', \n                  (addProductForm.controls.dateOfManufacture.valid ||addProductForm.controls.dateOfManufacture.invalid) ? 'form-control' : '']\"\n          id=\"mfg-form\" formControlName=\"dateOfManufacture\">\n\n        <div class=\"errorMessage\"\n          *ngIf=\"!addProductForm.controls.dateOfManufacture.valid && (addProductForm.controls.dateOfManufacture.dirty || addProductForm.controls.dateOfManufacture.touched)\">\n          <div *ngIf=\"addProductForm.controls.dateOfManufacture.errors.required\">Please enter valid manufacturing date!\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"form-group col-lg-3 col-md-6 col-sm-12\">\n        <label for=\"exp-form\">\n          Enter Product EXPIRY date:\n        </label>\n        <input type=\"text\"\n          [ngClass]=\"[\n                  (addProductForm.controls.dateOfExpiry.dirty || addProductForm.controls.dateOfExpiry.touched) && addProductForm.controls.dateOfExpiry.invalid ? 'is-invalid' : '', \n                  (addProductForm.controls.dateOfExpiry.valid ||addProductForm.controls.dateOfExpiry.invalid) ? 'form-control' : '']\"\n          id=\"exp-form\" formControlName=\"dateOfExpiry\">\n\n        <div class=\"errorMessage\"\n          *ngIf=\"!addProductForm.controls.dateOfExpiry.valid && (addProductForm.controls.dateOfExpiry.dirty || addProductForm.controls.dateOfExpiry.touched)\">\n          <div *ngIf=\"addProductForm.controls.dateOfExpiry.errors.required\">Please enter valid product exppiry date!\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"form-group col-lg-12 col-md-12 col-sm-12\">\n        <label for=\"image\">\n          Enter Image url:\n        </label>\n        <input type=\"text\" [ngClass]=\"[\n                  (addProductForm.controls.image.dirty || addProductForm.controls.image.touched) && addProductForm.controls.image.invalid ? 'is-invalid' : '', \n                  (addProductForm.controls.image.valid ||addProductForm.controls.image.invalid) ? 'form-control' : '']\"\n          id=\"image\" formControlName=\"image\">\n\n        <div class=\"errorMessage\"\n          *ngIf=\"!addProductForm.controls.image.valid && (addProductForm.controls.image.dirty || addProductForm.controls.image.touched)\">\n          <div *ngIf=\"addProductForm.controls.image.errors.required\">Please enter valid product image url!\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12\">\n        <button class=\"btn btn-primary\" type=\"submit\" value=\"submit\" (click)=\"onSubmit()\">Submit</button>\n      </div>\n    </div>\n  </form> <br><br>\n</section>"

/***/ }),

/***/ "./src/app/store/add-product/add-product.component.ts":
/*!************************************************************!*\
  !*** ./src/app/store/add-product/add-product.component.ts ***!
  \************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(productService, router) {
        this.productService = productService;
        this.router = router;
    }
    AddProductComponent.prototype.ngOnInit = function () {
        this.addProductForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'productCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'productName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'productType': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'brand': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'quantityType': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'rate': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'stockCount': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'addDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^(3[01]|[12][0-9]|0[1-9])/(1[0-2]|0[1-9])/[0-9]{4}$")]),
            'aisle': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'shelf': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'dateOfManufacture': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^(3[01]|[12][0-9]|0[1-9])/(1[0-2]|0[1-9])/[0-9]{4}$")]),
            'dateOfExpiry': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^(3[01]|[12][0-9]|0[1-9])/(1[0-2]|0[1-9])/[0-9]{4}$")]),
            'image': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    };
    AddProductComponent.prototype.onSubmit = function () {
        var _this = this;
        this.productService.addNewProduct(this.addProductForm.value).subscribe(function (response) {
            _this.router.navigate(['/home']);
        });
    };
    AddProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-product',
            template: __webpack_require__(/*! ./add-product.component.html */ "./src/app/store/add-product/add-product.component.html"),
            styles: [__webpack_require__(/*! ./add-product.component.css */ "./src/app/store/add-product/add-product.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddProductComponent);
    return AddProductComponent;
}());



/***/ }),

/***/ "./src/app/store/customer/customer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/store/customer/customer.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlL2N1c3RvbWVyL2N1c3RvbWVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/store/customer/customer.component.html":
/*!********************************************************!*\
  !*** ./src/app/store/customer/customer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"row mr-0\">\n    <div class=\"col-12 col-sm-12 col-md-4 col-md-xl-4 col-lg-3\">\n    <nav class=\"navbar navbar-expand navbar-light bg-transparent\">\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link dropdown-toggle\" id=\"navbardrop\" data-toggle=\"dropdown\">\n                        Product Category\n                    </a>\n                    <div class=\"dropdown-menu\">\n                        <a class=\"dropdown-item\" href=\"#\">Home&Kitchen</a>\n                        <a class=\"dropdown-item\" href=\"#\">Bakery</a>\n                        <a class=\"dropdown-item\" href=\"#\">Fruits&Vegetables</a>\n                        <a class=\"dropdown-item\" href=\"#\">Snacks</a>\n                    </div>\n                </li>\n            </ul>\n            <!--ul class=\"navbar-nav navbar-right\">\n    \n            </ul-->\n        </div>\n    </nav>\n    </div>\n    <div class=\"col-12 col-sm-12 col-md-4 col-md-xl-4 col-lg-6 pt-2\">\n        <app-search (filterFood)=\"displaySearchFood($event)\"></app-search>\n      </div>\n      <div class=\"col-12 col-sm-12 col-md-4 col-md-xl-4 col-lg-3 pt-2\">\n  <div class=\"form-inline\">\n          <form [formGroup]=\"sortList\" (ngSubmit)=\"sort()\">\n              <select class=\"form-control\" formControlName=\"sortCategory\">\n                <option value=\"filter\" [selected]=\"true\" hidden>Sort By</option>\n                <option value=\"name\">Name</option>\n                <option value=\"availability\">Availability</option>\n                <option value=\"price\">Price</option>\n                <!-- <option value=\"4\">Popularity</option> -->\n              </select>\n              <button type=submit\n              class=\"input-group-text material-icons align-middle color-dark btn\">sort</button>\n            </form>\n        </div>\n  </div>\n  \n       \n  </div>\n  \n  \n  \n    \n  \n  \n  <div class=\"container row\">\n    <div class=\"col-12 col-sm-12 col-md-4 col-lg-3\" *ngFor=\"let products of productsList\">\n      <app-product-list [list]=products></app-product-list>\n    </div>\n  </div>  \n"

/***/ }),

/***/ "./src/app/store/customer/customer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/store/customer/customer.component.ts ***!
  \******************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/authentication.service */ "./src/app/service/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerComponent = /** @class */ (function () {
    // role: string;
    function CustomerComponent(productService, authService) {
        this.productService = productService;
        this.authService = authService;
    }
    CustomerComponent.prototype.ngOnInit = function () {
        // console.log("customer ng");
        // this.sortList = new FormGroup({
        //   'sortCategory': new FormControl(null, [
        //     Validators.required])
        // });
        // this.productService.getAllProducts().subscribe(response =>{
        //   this.productsList = response;
        //   console.log(response);
        //   this.filterProductList = this.productsList;
        // })
    };
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/store/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/store/customer/customer.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"], src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/store/edit-product/edit-product.component.css":
/*!***************************************************************!*\
  !*** ./src/app/store/edit-product/edit-product.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlL2VkaXQtcHJvZHVjdC9lZGl0LXByb2R1Y3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/store/edit-product/edit-product.component.html":
/*!****************************************************************!*\
  !*** ./src/app/store/edit-product/edit-product.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-product works!\n</p>\n"

/***/ }),

/***/ "./src/app/store/edit-product/edit-product.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/store/edit-product/edit-product.component.ts ***!
  \**************************************************************/
/*! exports provided: EditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductComponent", function() { return EditProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditProductComponent = /** @class */ (function () {
    function EditProductComponent() {
    }
    EditProductComponent.prototype.ngOnInit = function () {
    };
    EditProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-product',
            template: __webpack_require__(/*! ./edit-product.component.html */ "./src/app/store/edit-product/edit-product.component.html"),
            styles: [__webpack_require__(/*! ./edit-product.component.css */ "./src/app/store/edit-product/edit-product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditProductComponent);
    return EditProductComponent;
}());



/***/ }),

/***/ "./src/app/store/homepage/homepage.component.css":
/*!*******************************************************!*\
  !*** ./src/app/store/homepage/homepage.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image1{\r\n    background-image: url(\"https://images.unsplash.com/photo-1566055803687-0665ef48df90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60\");\r\n    background-size: cover;\r\n    height: 600px;\r\n    background-repeat: no-repeat;\r\n}\r\n.image2{\r\n    background-image: url(\"https://images.unsplash.com/photo-1523294587484-bae6cc870010?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60\");\r\n    background-size: cover;\r\n    height: 600px;\r\n    background-repeat: no-repeat;\r\n}\r\n.image3{\r\n    background-image: url(\"https://images.unsplash.com/photo-1507598641400-ec3536ba81bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60\");\r\n    background-size: cover;\r\n    height: 600px;\r\n    background-repeat: no-repeat;\r\n}\r\n.image4{\r\n    background-image: url(\"https://images.unsplash.com/photo-1573679904842-df1111630209?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60\");\r\n    background-size: cover;\r\n    height: 600px;\r\n    background-repeat: no-repeat;\r\n}\r\n.image-text{\r\n   padding-left: 20%;\r\n   padding-top: 17%;\r\n   font-family: cursive;\r\n}\r\n.home-message{\r\n    padding: 3%;\r\n    background-color: #3f3d3d98;\r\n    color: #ffffff;\r\n    margin-right: 0px;\r\n    font-family: cursive;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#9c9c90), color-stop(92%, #93e1ff));\r\n    background: linear-gradient(to bottom, #9c9c90 0%, #93e1ff 92%);\r\n}\r\n.badge-color{\r\n    background-color: #30c0f8;\r\n    color: #ffffff;\r\n    -webkit-transition: -webkit-transform 0.1s;\r\n    transition: -webkit-transform 0.1s;\r\n    transition: transform 0.1s;\r\n    transition: transform 0.1s, -webkit-transform 0.1s;\r\n}\r\n.button-style{\r\n    padding-left: 15%;\r\n}\r\n.badge-color:hover{\r\n   -webkit-transform: scale(1.05);\r\n           transform: scale(1.05);\r\n}\r\n/* nav {\r\n    float: left;\r\n    width: 15%;\r\n    /* border: 5px solid wheat; \r\n}\r\narticle {\r\n    float: left;\r\n    width: 85%;\r\n    /* border: 5px solid wheat; \r\n} */\r\n.navbar-toggler-icon, .custom-toggler{\r\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(236, 0, 0, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\");\r\n}\r\n.navbar-color{\r\n    opacity: 0%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcmUvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtKQUErSjtJQUMvSix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLDZCQUE2QjtDQUNoQztBQUNEO0lBQ0ksK0pBQStKO0lBQy9KLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsNkJBQTZCO0NBQ2hDO0FBQ0Q7SUFDSSwrSkFBK0o7SUFDL0osdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCw2QkFBNkI7Q0FDaEM7QUFFRDtJQUNJLCtKQUErSjtJQUMvSix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLDZCQUE2QjtDQUNoQztBQUNEO0dBQ0csa0JBQWtCO0dBQ2xCLGlCQUFpQjtHQUNqQixxQkFBcUI7Q0FDdkI7QUFDRDtJQUNJLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUdBQWdFO0lBQWhFLGdFQUFnRTtDQUNuRTtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7SUFDZiwyQ0FBMkI7SUFBM0IsbUNBQTJCO0lBQTNCLDJCQUEyQjtJQUEzQixtREFBMkI7Q0FDOUI7QUFDRDtJQUNJLGtCQUFrQjtDQUNyQjtBQUNEO0dBQ0csK0JBQXVCO1dBQXZCLHVCQUF1QjtDQUN6QjtBQUNEOzs7Ozs7Ozs7SUFTSTtBQUNKO0lBQ0ksc1FBQXNRO0NBQ3pRO0FBQ0Q7SUFDSSxZQUFZO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9zdG9yZS9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlMXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTY2MDU1ODAzNjg3LTA2NjVlZjQ4ZGY5MD9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NTAwJnE9NjBcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuLmltYWdlMntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTIzMjk0NTg3NDg0LWJhZTZjYzg3MDAxMD9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NTAwJnE9NjBcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuLmltYWdlM3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA3NTk4NjQxNDAwLWVjMzUzNmJhODFiYz9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NTAwJnE9NjBcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5pbWFnZTR7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU3MzY3OTkwNDg0Mi1kZjExMTE2MzAyMDk/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTUwMCZxPTYwXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcbi5pbWFnZS10ZXh0e1xyXG4gICBwYWRkaW5nLWxlZnQ6IDIwJTtcclxuICAgcGFkZGluZy10b3A6IDE3JTtcclxuICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbn1cclxuLmhvbWUtbWVzc2FnZXtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmM2QzZDk4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzljOWM5MCAwJSwgIzkzZTFmZiA5MiUpO1xyXG59XHJcbi5iYWRnZS1jb2xvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMGMwZjg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzO1xyXG59XHJcbi5idXR0b24tc3R5bGV7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1JTtcclxufVxyXG4uYmFkZ2UtY29sb3I6aG92ZXJ7XHJcbiAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuLyogbmF2IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIC8qIGJvcmRlcjogNXB4IHNvbGlkIHdoZWF0OyBcclxufVxyXG5hcnRpY2xlIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIC8qIGJvcmRlcjogNXB4IHNvbGlkIHdoZWF0OyBcclxufSAqL1xyXG4ubmF2YmFyLXRvZ2dsZXItaWNvbiwgLmN1c3RvbS10b2dnbGVye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0Nzdmcgdmlld0JveD0nMCAwIDMyIDMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBzdHJva2U9J3JnYmEoMjM2LCAwLCAwLCAxKScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTQgOGgyNE00IDE2aDI0TTQgMjRoMjQnLyUzRSUzQy9zdmclM0VcIik7XHJcbn1cclxuLm5hdmJhci1jb2xvcntcclxuICAgIG9wYWNpdHk6IDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/store/homepage/homepage.component.html":
/*!********************************************************!*\
  !*** ./src/app/store/homepage/homepage.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <article>\n    <div class=\"jumbotron-fluid shadow rounded\">\n      <div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n        <ul class=\"carousel-indicators\">\n          <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n          <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n          <li data-target=\"#demo\" data-slide-to=\"3\"></li>\n        </ul>\n\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <div routerLink=\"\" class=\"image1\">\n              <div class=\"image-text text-white\">\n\n                <h3>Shop from a wide assortment of grocery products only on easy buy.</h3>\n                <h3>Get all the grocery items at reasonal rates.</h3>\n              </div>\n            </div>\n          </div>\n          <div class=\"carousel-item\">\n            <div routerLink=\"\" class=\"image2\">\n              <div class=\"image-text text-white\">\n                <h3>Freshly prepared baked items with discounted price</h3>\n                <h3>Tastes like homemade one...</h3>\n              </div>\n            </div>\n          </div>\n          <div class=\"carousel-item\">\n            <div routerLink=\"\" class=\"image3\">\n              <div class=\"image-text text-white\">\n                <h3>Get the freshness of fruits with easybuy</h3>\n                <h3>Our aim to provide you freshness directly from farm...</h3>\n              </div>\n            </div>\n          </div>\n          <div class=\"carousel-item\">\n            <div routerLink=\"\" class=\"image4\">\n              <div class=\"image-text text-white\">\n                <h3>A perfect food for small hunger while considering your health as preference.</h3>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\"></span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\"></span>\n        </a>\n      </div>\n    </div>\n    <div class=\"home-message border border-mute row\">\n      <div class=\"col-12 col-sm-12 col-md-7 col-lg-7\">\n        <h4>Easy Buy a one stop shop for all your needs at discounted rates with freshness and quality. Avail the latest\n          offers on the page and get huge discounts...</h4>\n      </div>\n      <div class=\"col-12 col-sm-12 col-md-4 col-lg-4 button-style\">\n        <div><a class=\"badge badge-color p-3\" routerLink=\"/signup\">\n            <h4>Become a member</h4>\n          </a></div><br><br>\n        <div><a class=\"badge badge-color p-3\" routerLink=\"/login\">\n            <h4>Login to shop online</h4>\n          </a></div>\n      </div>\n    </div>\n  </article>\n</section>"

/***/ }),

/***/ "./src/app/store/homepage/homepage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/store/homepage/homepage.component.ts ***!
  \******************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/product.service */ "./src/app/service/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(productService) {
        this.productService = productService;
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/store/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/store/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/store/owner/owner.component.css":
/*!*************************************************!*\
  !*** ./src/app/store/owner/owner.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-color{\r\n    background-color: #30c0f8;\r\n    color: white;\r\n    border-radius: 5px;\r\n}\r\n.text-align{\r\n    text-align: center;\r\n}\r\n.table-responsive{\r\n    display: inline-table;\r\n    width: 100%;\r\n    overflow-x: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcmUvb3duZXIvb3duZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc3RvcmUvb3duZXIvb3duZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1jb2xvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMGMwZjg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLnRleHQtYWxpZ257XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRhYmxlLXJlc3BvbnNpdmV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/store/owner/owner.component.html":
/*!**************************************************!*\
  !*** ./src/app/store/owner/owner.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"statusFlag==true;elseBlock\">\n    <div class=\"p-2 bg-danger text-white\">Status approved successfully.</div>\n  </div>\n  <ng-template #elseBlock class=\"p-2\">\n    <div></div>\n  </ng-template>\n  <h3 class=\"mt-4 p-2 bg-color text-align\">Shop Manager Pending Status List</h3>\n  <table class=\"table table-striped text-align table-responsive \">\n    <thead>\n      <tr>\n        <th>First Name</th>\n        <th>Last Name</th>\n        <th>User Id</th>\n        <th>Contact Number</th>\n        <th>Current Status</th>\n        <th>Approve Status</th>\n      </tr>\n    </thead>\n    <tbody>\n\n      <tr *ngFor=\"let list of pendingList\">\n        <td>{{list.firstName}}</td>\n        <td>{{list.lastName}}</td>\n        <td>{{list.userId}}</td>\n        <td>{{list.contactNumber}}</td>\n        <td>{{list.status}}</td>\n        <td><button type=\"submit\" class=\"btn bg-success\" (click)=\"approveStatus(list)\"><i\n              class=\"material-icons text-white\">done_outline</i></button></td>\n      </tr>\n    </tbody>\n  </table>\n\n</div>"

/***/ }),

/***/ "./src/app/store/owner/owner.component.ts":
/*!************************************************!*\
  !*** ./src/app/store/owner/owner.component.ts ***!
  \************************************************/
/*! exports provided: OwnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerComponent", function() { return OwnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/user.service */ "./src/app/service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OwnerComponent = /** @class */ (function () {
    function OwnerComponent(userService) {
        this.userService = userService;
    }
    OwnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getPendingList().subscribe(function (response) {
            _this.pendingList = response;
        });
    };
    OwnerComponent.prototype.approveStatus = function (user) {
        var _this = this;
        this.statusFlag = true;
        this.userService.approveManagerStatus(user).subscribe(function (response) {
            _this.userService.getPendingList().subscribe(function (response) {
                _this.pendingList = response;
            });
        });
    };
    OwnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-owner',
            template: __webpack_require__(/*! ./owner.component.html */ "./src/app/store/owner/owner.component.html"),
            styles: [__webpack_require__(/*! ./owner.component.css */ "./src/app/store/owner/owner.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], OwnerComponent);
    return OwnerComponent;
}());



/***/ }),

/***/ "./src/app/store/product-list/product-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/store/product-list/product-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-image{\r\n    height: 200px;\r\n    width: 100%;\r\n}\r\n.custom-button{\r\n    border-radius: 50px;\r\n    font-size: 30px;\r\n    padding-left: 10%;\r\n}\r\n.hovereffect {\r\n    width: 100%;\r\n    height: 100%;\r\n    float: left;\r\n    overflow: hidden;\r\n    position: relative;\r\n    text-align: center;\r\n    cursor: default;\r\n  }\r\n.hovereffect .overlay {\r\n    position: absolute;\r\n    overflow: hidden;\r\n    opacity: 0;\r\n    filter: alpha(opacity=0);\r\n    width: 55%;\r\n    height: 81%;\r\n    left: 22%;\r\n    top: 10%;\r\n    border-radius: 80%;\r\n    border: 2px solid #FFF;\r\n    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;\r\n    transition: opacity 0.35s, -webkit-transform 0.35s;\r\n    transition: opacity 0.35s, transform 0.35s;\r\n    transition: opacity 0.35s, transform 0.35s, -webkit-transform 0.35s;\r\n    -webkit-transform: translate3d(50%,50%,0);\r\n    transform: translate3d(50%,50%,0);\r\n  }\r\n.hovereffect:hover .overlay {\r\n    background-color: rgba(0,0,0,0.3);\r\n  }\r\n.hovereffect img {\r\n    display: block;\r\n    position: relative;\r\n    -webkit-transition: all 0.35s;\r\n    transition: all 0.35s;\r\n  }\r\n.hovereffect:hover img {\r\n    filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"filter\"><feComponentTransfer color-interpolation-filters=\"sRGB\"><feFuncR type=\"linear\" slope=\"1.4\" /><feFuncG type=\"linear\" slope=\"1.4\" /><feFuncB type=\"linear\" slope=\"1.4\" /></feComponentTransfer></filter></svg>#filter');\r\n    filter: brightness(1.4);\r\n    -webkit-filter: brightness(1.4);\r\n  }\r\n.hovereffect {\r\n    width: 100%;\r\n    height: 100%;\r\n    float: left;\r\n    overflow: hidden;\r\n    position: relative;\r\n    text-align: center;\r\n    cursor: default;\r\n  }\r\n.hovereffect .overlay {\r\n    position: absolute;\r\n    overflow: hidden;\r\n    width: 80%;\r\n    height: 80%;\r\n    left: 10%;\r\n    top: 10%;\r\n    border-bottom: 1px solid #FFF;\r\n    border-top: 1px solid #FFF;\r\n    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;\r\n    transition: opacity 0.35s, -webkit-transform 0.35s;\r\n    transition: opacity 0.35s, transform 0.35s;\r\n    transition: opacity 0.35s, transform 0.35s, -webkit-transform 0.35s;\r\n    -webkit-transform: scale(0,1);\r\n    transform: scale(0,1);\r\n  }\r\n.hovereffect:hover .overlay {\r\n    opacity: 1;\r\n    filter: alpha(opacity=100);\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n.hovereffect img {\r\n    display: block;\r\n    position: relative;\r\n    -webkit-transition: all 0.35s;\r\n    transition: all 0.35s;\r\n  }\r\n.hovereffect:hover img {\r\n    filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"filter\"><feComponentTransfer color-interpolation-filters=\"sRGB\"><feFuncR type=\"linear\" slope=\"0.6\" /><feFuncG type=\"linear\" slope=\"0.6\" /><feFuncB type=\"linear\" slope=\"0.6\" /></feComponentTransfer></filter></svg>#filter');\r\n    filter: brightness(0.6);\r\n    -webkit-filter: brightness(0.6);\r\n  }\r\n.hovereffect h2 {\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    position: relative;\r\n    font-size: 17px;\r\n    background-color: transparent;\r\n    color: #FFF;\r\n    padding: 1em 0;\r\n    opacity: 0;\r\n    filter: alpha(opacity=0);\r\n    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;\r\n    transition: opacity 0.35s, -webkit-transform 0.35s;\r\n    transition: opacity 0.35s, transform 0.35s;\r\n    transition: opacity 0.35s, transform 0.35s, -webkit-transform 0.35s;\r\n    -webkit-transform: translate3d(0,-100%,0);\r\n    transform: translate3d(0,-100%,0);\r\n  }\r\n.hovereffect a, .hovereffect p {\r\n    color: #FFF;\r\n    padding: 1em 0;\r\n    opacity: 0;\r\n    filter: alpha(opacity=0);\r\n    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;\r\n    transition: opacity 0.35s, -webkit-transform 0.35s;\r\n    transition: opacity 0.35s, transform 0.35s;\r\n    transition: opacity 0.35s, transform 0.35s, -webkit-transform 0.35s;\r\n    -webkit-transform: translate3d(0,100%,0);\r\n    transform: translate3d(0,100%,0);\r\n  }\r\n.hovereffect:hover a, .hovereffect:hover p, .hovereffect:hover h2 {\r\n    opacity: 1;\r\n    filter: alpha(opacity=100);\r\n    -webkit-transform: translate3d(0,0,0);\r\n    transform: translate3d(0,0,0);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcmUvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixrQkFBa0I7Q0FDckI7QUFFRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtHQUNqQjtBQUVEO0lBQ0UsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDJEQUEyRDtJQUMzRCxtREFBMkM7SUFBM0MsMkNBQTJDO0lBQTNDLG9FQUEyQztJQUMzQywwQ0FBMEM7SUFDMUMsa0NBQWtDO0dBQ25DO0FBRUQ7SUFDRSxrQ0FBa0M7R0FDbkM7QUFFRDtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLHNCQUFzQjtHQUN2QjtBQUVEO0lBQ0UsZ1VBQWdVO0lBQ2hVLHdCQUF3QjtJQUN4QixnQ0FBZ0M7R0FDakM7QUFFRDtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtHQUNqQjtBQUVEO0lBQ0UsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7SUFDVixTQUFTO0lBQ1QsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQiwyREFBMkQ7SUFDM0QsbURBQTJDO0lBQTNDLDJDQUEyQztJQUEzQyxvRUFBMkM7SUFDM0MsOEJBQThCO0lBRTlCLHNCQUFzQjtHQUN2QjtBQUVEO0lBQ0UsV0FBVztJQUNYLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFFNUIsb0JBQW9CO0dBQ3JCO0FBRUQ7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixzQkFBc0I7R0FDdkI7QUFFRDtJQUNFLGdVQUFnVTtJQUNoVSx3QkFBd0I7SUFDeEIsZ0NBQWdDO0dBQ2pDO0FBRUQ7SUFDRSwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztJQUNYLHlCQUF5QjtJQUN6QiwyREFBMkQ7SUFDM0QsbURBQTJDO0lBQTNDLDJDQUEyQztJQUEzQyxvRUFBMkM7SUFDM0MsMENBQTBDO0lBQzFDLGtDQUFrQztHQUNuQztBQUVEO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLDJEQUEyRDtJQUMzRCxtREFBMkM7SUFBM0MsMkNBQTJDO0lBQTNDLG9FQUEyQztJQUMzQyx5Q0FBeUM7SUFDekMsaUNBQWlDO0dBQ2xDO0FBRUQ7SUFDRSxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLHNDQUFzQztJQUN0Qyw4QkFBOEI7R0FDL0IiLCJmaWxlIjoic3JjL2FwcC9zdG9yZS9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLWltYWdle1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jdXN0b20tYnV0dG9ue1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG59XHJcblxyXG4uaG92ZXJlZmZlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3ZlcmVmZmVjdCAub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgICBoZWlnaHQ6IDgxJTtcclxuICAgIGxlZnQ6IDIyJTtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogODAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0ZGRjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCB0cmFuc2Zvcm0gMC4zNXM7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNTAlLDUwJSwwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNTAlLDUwJSwwKTtcclxuICB9XHJcbiAgXHJcbiAgLmhvdmVyZWZmZWN0OmhvdmVyIC5vdmVybGF5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcclxuICB9XHJcbiAgXHJcbiAgLmhvdmVyZWZmZWN0IGltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMzVzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMzVzO1xyXG4gIH1cclxuICBcclxuICAuaG92ZXJlZmZlY3Q6aG92ZXIgaW1nIHtcclxuICAgIGZpbHRlcjogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZmlsdGVyIGlkPVwiZmlsdGVyXCI+PGZlQ29tcG9uZW50VHJhbnNmZXIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPVwic1JHQlwiPjxmZUZ1bmNSIHR5cGU9XCJsaW5lYXJcIiBzbG9wZT1cIjEuNFwiIC8+PGZlRnVuY0cgdHlwZT1cImxpbmVhclwiIHNsb3BlPVwiMS40XCIgLz48ZmVGdW5jQiB0eXBlPVwibGluZWFyXCIgc2xvcGU9XCIxLjRcIiAvPjwvZmVDb21wb25lbnRUcmFuc2Zlcj48L2ZpbHRlcj48L3N2Zz4jZmlsdGVyJyk7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS40KTtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBicmlnaHRuZXNzKDEuNCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3ZlcmVmZmVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICB9XHJcbiAgXHJcbiAgLmhvdmVyZWZmZWN0IC5vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkZGO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNGRkY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgdHJhbnNmb3JtIDAuMzVzO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAsMSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLDEpO1xyXG4gIH1cclxuICBcclxuICAuaG92ZXJlZmZlY3Q6aG92ZXIgLm92ZXJsYXkge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxuICBcclxuICAuaG92ZXJlZmZlY3QgaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zNXM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zNXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3ZlcmVmZmVjdDpob3ZlciBpbWcge1xyXG4gICAgZmlsdGVyOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxmaWx0ZXIgaWQ9XCJmaWx0ZXJcIj48ZmVDb21wb25lbnRUcmFuc2ZlciBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9XCJzUkdCXCI+PGZlRnVuY1IgdHlwZT1cImxpbmVhclwiIHNsb3BlPVwiMC42XCIgLz48ZmVGdW5jRyB0eXBlPVwibGluZWFyXCIgc2xvcGU9XCIwLjZcIiAvPjxmZUZ1bmNCIHR5cGU9XCJsaW5lYXJcIiBzbG9wZT1cIjAuNlwiIC8+PC9mZUNvbXBvbmVudFRyYW5zZmVyPjwvZmlsdGVyPjwvc3ZnPiNmaWx0ZXInKTtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjYpO1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGJyaWdodG5lc3MoMC42KTtcclxuICB9XHJcbiAgXHJcbiAgLmhvdmVyZWZmZWN0IGgyIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgcGFkZGluZzogMWVtIDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIHRyYW5zZm9ybSAwLjM1cztcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLC0xMDAlLDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLC0xMDAlLDApO1xyXG4gIH1cclxuICBcclxuICAuaG92ZXJlZmZlY3QgYSwgLmhvdmVyZWZmZWN0IHAge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBwYWRkaW5nOiAxZW0gMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgdHJhbnNmb3JtIDAuMzVzO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMTAwJSwwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwxMDAlLDApO1xyXG4gIH1cclxuICBcclxuICAuaG92ZXJlZmZlY3Q6aG92ZXIgYSwgLmhvdmVyZWZmZWN0OmhvdmVyIHAsIC5ob3ZlcmVmZmVjdDpob3ZlciBoMiB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/store/product-list/product-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/store/product-list/product-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-3\">\n  <div class=\"hovereffect\">\n    <img class=\"img-responsive custom-image\" src=\"{{list.image}}\" alt=\"{{list.productName}}\">\n    <div class=\"overlay\">\n\n      <div *ngIf=\"role=='U'\">\n        <h5 class=\"card-title mt-1 text-white\">{{list.productName}}</h5>\n        <div class=\" mt-1 text-white\">{{list.rate | currency :'INR' : 'symbol'}}</div>\n        <div class=\" mt-1 text-white\">Location : </div>\n        <div class=\" mt-1 text-white\">Aisle : {{list.aisle}}</div>\n        <div class=\" mt-1 text-white\">Shelf : {{list.shelf}}</div>\n      </div>\n      <div *ngIf=\"role=='A'\">\n        <h5 class=\"card-title mt-1 text-white mt-3\">{{list.productName}}</h5>\n        <div class=\"form-inline\">\n          <button type=\"click\" class=\"btn text-white  mt-3\" (click)=\"addToList(list)\"><i\n              class=\"material-icons custom-button\">add_circle</i></button>\n          <button type=\"click\" class=\"btn text-white  mt-3\" (click)=\"updateProduct()\"><i\n              class=\"material-icons custom-button\">brush</i></button>\n          <button type=\"click\" class=\"btn text-white  mt-3\" (click)=\"deleteProduct()\"><i\n              class=\"material-icons custom-button\">delete_forever</i></button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/store/product-list/product-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/store/product-list/product-list.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_user_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/user-auth.service */ "./src/app/service/user-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(router, userAuth) {
        this.router = router;
        this.userAuth = userAuth;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.role = this.userAuth.currentUser();
    };
    ProductListComponent.prototype.updateProduct = function () {
        this.router.navigate(['/editProduct']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ProductListComponent.prototype, "list", void 0);
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/store/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/store/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_service_user_auth_service__WEBPACK_IMPORTED_MODULE_1__["UserAuthService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/store/products/products.component.css":
/*!*******************************************************!*\
  !*** ./src/app/store/products/products.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-custom{\r\n  padding: 4%;\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#999595), color-stop(72%, #30c0f8));\r\n  background: linear-gradient(to bottom, #999595 0%, #30c0f8 72%);\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcmUvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixxR0FBZ0U7RUFBaEUsZ0VBQWdFO0NBQ2pFIiwiZmlsZSI6InNyYy9hcHAvc3RvcmUvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1jdXN0b217XHJcbiAgcGFkZGluZzogNCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzk5OTU5NSAwJSwgIzMwYzBmOCA3MiUpO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/store/products/products.component.html":
/*!********************************************************!*\
  !*** ./src/app/store/products/products.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"role=='O';elseBlock\">\n  <app-owner></app-owner>\n</div>\n<div *ngIf=\"role=='U' || role=='A'\">\n\n  <div class=\"row mr-0 bg-custom\">\n    <div class=\"col-12 col-sm-12 col-md-4 col-md-xl-4 col-lg-3\">\n      <nav class=\"navbar navbar-expand navbar-light bg-transparent\">\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item dropdown\">\n              <a class=\"nav-link dropdown-toggle\" id=\"navbardrop\" data-toggle=\"dropdown\">\n                Product Category\n              </a>\n              <div class=\"dropdown-menu\">\n                <a class=\"dropdown-item\" href=\"#\">Home&Kitchen</a>\n                <a class=\"dropdown-item\" href=\"#\">Bakery</a>\n                <a class=\"dropdown-item\" href=\"#\">Fruits&Vegetables</a>\n                <a class=\"dropdown-item\" href=\"#\">Snacks</a>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </nav>\n    </div>\n    <div class=\"col-12 col-sm-12 col-md-4 col-md-xl-4 col-lg-6 pt-2\">\n      <app-search (filterFood)=\"displaySearchFood($event)\"></app-search>\n    </div>\n    <div class=\"col-12 col-sm-12 col-md-4 col-md-xl-4 col-lg-3 pt-2\">\n      <div class=\"form-inline\">\n        <form [formGroup]=\"sortList\" (ngSubmit)=\"sort()\">\n          <select class=\"form-control\" formControlName=\"sortCategory\">\n            <option value=\"filter\" [selected]=\"true\" hidden>Sort By</option>\n            <option value=\"name\">Name</option>\n            <option value=\"availability\">Availability</option>\n            <option value=\"price\">Price</option>\n            <!-- <option value=\"4\">Popularity</option> -->\n          </select>\n          <button type=submit class=\"input-group-text material-icons align-middle color-dark btn\">sort</button>\n        </form>\n      </div>\n    </div>\n\n\n  </div>\n\n\n  <div class=\"container mt-4\">\n    <div class=\"d-flex justify-content-between\">\n      <h3>Latest Trends...</h3>\n      <div *ngIf=\"role=='A'\">\n        <button type=\"click\" class=\"btn btn-dark text-white  mt-3\" (click)=\"addNewProduct()\">Add Product <i\n            class=\"material-icons aling-bottom custom-button\">edit</i></button>\n      </div>\n    </div>\n\n    <br>\n    <div class=\"row\">\n      <div class=\"col-12 col-sm-12 col-md-4 col-lg-3\" *ngFor=\"let products of productsList\">\n        <app-product-list [list]=products></app-product-list>\n      </div>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/store/products/products.component.ts":
/*!******************************************************!*\
  !*** ./src/app/store/products/products.component.ts ***!
  \******************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(router, productService, authService) {
        this.router = router;
        this.productService = productService;
        this.authService = authService;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.role = this.authService.getRole();
        if (this.role == 'U' || this.role == 'A') {
            this.sortList = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                'sortCategory': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])
            });
            this.productService.getAllProducts().subscribe(function (response) {
                _this.productsList = response;
                _this.filterProductList = _this.productsList;
            });
        }
    };
    ProductsComponent.prototype.displaySearchFood = function ($event) {
        this.productsList = this.filterProductList.filter(function (item) { return (item.productName.toLocaleLowerCase().indexOf($event) != -1 || item.brand.toLocaleLowerCase().indexOf($event) != -1); });
    };
    ProductsComponent.prototype.sort = function () {
        this.sortItem = this.sortList.value.sortCategory;
        if (this.sortItem == "name") {
            this.productsList = this.productsList.sort(function (obj1, obj2) {
                if (obj1.productName > obj2.productName) {
                    return 1;
                }
                if (obj1.productName < obj2.productName) {
                    return -1;
                }
                return 0;
            });
        }
        if (this.sortItem == "price") {
            this.productsList = this.productsList.sort(function (obj1, obj2) {
                if (obj1.rate > obj2.rate) {
                    return 1;
                }
                if (obj1.rate < obj2.rate) {
                    return -1;
                }
                return 0;
            });
        }
        if (this.sortItem == "availability") {
            this.productsList = this.productsList.sort(function (obj1, obj2) {
                if (obj1.stockCount > obj2.stockCount) {
                    return 1;
                }
                if (obj1.stockCount < obj2.stockCount) {
                    return -1;
                }
                return 0;
            });
        }
    };
    ProductsComponent.prototype.addNewProduct = function () {
        this.router.navigate(['/addNewProduct']);
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/store/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/store/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"], src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/store/search/search.component.css":
/*!***************************************************!*\
  !*** ./src/app/store/search/search.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-align{\r\ntext-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcmUvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsbUJBQW1CO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc3RvcmUvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1hbGlnbntcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/store/search/search.component.html":
/*!****************************************************!*\
  !*** ./src/app/store/search/search.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-between\">\n  <div class=\"input-group\">\n    <input type=\"text\" placeholder=\"Search Food\" class=\"form-control\" [(ngModel)]=\"searchFood\" (keyup)=\"filterList()\">\n    <button type=button class=\"input-group-text material-icons align-middle color-dark btn\">search</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/store/search/search.component.ts":
/*!**************************************************!*\
  !*** ./src/app/store/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/product.service */ "./src/app/service/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = /** @class */ (function () {
    function SearchComponent(productService) {
        this.productService = productService;
        this.filterFood = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filteredList;
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.filterList = function () {
        this.filterFood.emit(this.searchFood);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "filterFood", void 0);
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/store/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/store/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:8083/product-service/easy-buy'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\smart-shop\webapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map