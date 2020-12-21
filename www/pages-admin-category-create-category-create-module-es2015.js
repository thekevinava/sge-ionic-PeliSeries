(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-category-create-category-create-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/category-create/category-create.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/category-create/category-create.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Create a Category\"></app-header>\n\n<ion-content class=\"ion-padding\">\n  <ng-container *ngIf=\"username\">\n    <form #createForm=\"ngForm\">\n      <ion-item>\n        <ion-label position=\"floating\">Titulo</ion-label>\n        <ion-input [(ngModel)]=\"data.name\" name=\"titulo\" type=\"text\" required></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">Slug (/categories/category)</ion-label>\n        <ion-input [(ngModel)]=\"data.slug\" name=\"slug\" type=\"text\" required></ion-input>\n    </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Image (url)</ion-label>\n        <ion-input [(ngModel)]=\"data.image\" name=\"image\" type=\"url\" required></ion-input>\n      </ion-item>\n      <ion-button routerLink=\"/admin/home\" (click)=\"submitForm()\" expand=\"block\">Enviar</ion-button>\n    </form>\n  </ng-container>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/admin/category-create/category-create-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/admin/category-create/category-create-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CategoryCreatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryCreatePageRoutingModule", function() { return CategoryCreatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _category_create_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-create.page */ "./src/app/pages/admin/category-create/category-create.page.ts");




const routes = [
    {
        path: '',
        component: _category_create_page__WEBPACK_IMPORTED_MODULE_3__["CategoryCreatePage"]
    }
];
let CategoryCreatePageRoutingModule = class CategoryCreatePageRoutingModule {
};
CategoryCreatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoryCreatePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/admin/category-create/category-create.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/admin/category-create/category-create.module.ts ***!
  \***********************************************************************/
/*! exports provided: CategoryCreatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryCreatePageModule", function() { return CategoryCreatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _category_create_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-create-routing.module */ "./src/app/pages/admin/category-create/category-create-routing.module.ts");
/* harmony import */ var _category_create_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-create.page */ "./src/app/pages/admin/category-create/category-create.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let CategoryCreatePageModule = class CategoryCreatePageModule {
};
CategoryCreatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _category_create_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryCreatePageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_category_create_page__WEBPACK_IMPORTED_MODULE_6__["CategoryCreatePage"]]
    })
], CategoryCreatePageModule);



/***/ }),

/***/ "./src/app/pages/admin/category-create/category-create.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/admin/category-create/category-create.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2NhdGVnb3J5LWNyZWF0ZS9jYXRlZ29yeS1jcmVhdGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/admin/category-create/category-create.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/admin/category-create/category-create.page.ts ***!
  \*********************************************************************/
/*! exports provided: CategoryCreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryCreatePage", function() { return CategoryCreatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_userdata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/userdata.service */ "./src/app/services/userdata.service.ts");





let CategoryCreatePage = class CategoryCreatePage {
    constructor(dataService, userData, toastController) {
        this.dataService = dataService;
        this.userData = userData;
        this.toastController = toastController;
        this.data = {
            name: null,
            slug: null,
            image: null
        };
    }
    ngOnInit() {
        this.getUsername();
    }
    getUsername() {
        this.userData.getUsername().then((username) => {
            this.username = username;
        });
    }
    submitForm() {
        this.dataService.createCategory(this.data).subscribe(res => {
            /* Inicializo el array para agregar otra categoría */
            this.data = {
                name: null,
                slug: null,
                image: null
            };
            this.mostrarToast();
        });
    }
    mostrarToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Has creado la categoría correctamente.',
                duration: 2000
            });
            toast.present();
        });
    }
};
CategoryCreatePage.ctorParameters = () => [
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: src_app_services_userdata_service__WEBPACK_IMPORTED_MODULE_4__["UserData"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
CategoryCreatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./category-create.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/category-create/category-create.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./category-create.page.scss */ "./src/app/pages/admin/category-create/category-create.page.scss")).default]
    })
], CategoryCreatePage);



/***/ })

}]);
//# sourceMappingURL=pages-admin-category-create-category-create-module-es2015.js.map