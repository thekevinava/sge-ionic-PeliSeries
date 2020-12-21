(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-category-edit-category-edit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/category-edit/category-edit.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/category-edit/category-edit.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Edit {{categoryData?.name}}\"></app-header>\n\n<ion-content class=\"ion-padding\">\n  <ng-container *ngIf=\"username\">\n    <form #createForm=\"ngForm\">\n      <ion-item>\n        <ion-label position=\"floating\">Titulo</ion-label>\n        <ion-input [(ngModel)]=\"categoryData.name\" name=\"titulo\" type=\"text\" required></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">Slug (/categories/category)</ion-label>\n        <ion-input [(ngModel)]=\"categoryData.slug\" name=\"slug\" type=\"text\" required></ion-input>\n    </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Image (url)</ion-label>\n        <ion-input [(ngModel)]=\"categoryData.image\" name=\"image\" type=\"url\" required></ion-input>\n      </ion-item>\n      <ion-button routerLink=\"/admin/home\" (click)=\"update()\" expand=\"block\">Enviar</ion-button>\n    </form>\n  </ng-container>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/admin/category-edit/category-edit-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/admin/category-edit/category-edit-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: CategoryEditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryEditPageRoutingModule", function() { return CategoryEditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _category_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-edit.page */ "./src/app/pages/admin/category-edit/category-edit.page.ts");




const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _category_edit_page__WEBPACK_IMPORTED_MODULE_3__["CategoryEditPage"]
            },
            {
                path: ':categoryID',
                component: _category_edit_page__WEBPACK_IMPORTED_MODULE_3__["CategoryEditPage"]
            }
        ]
    }
];
let CategoryEditPageRoutingModule = class CategoryEditPageRoutingModule {
};
CategoryEditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoryEditPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/admin/category-edit/category-edit.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/admin/category-edit/category-edit.module.ts ***!
  \*******************************************************************/
/*! exports provided: CategoryEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryEditPageModule", function() { return CategoryEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _category_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-edit-routing.module */ "./src/app/pages/admin/category-edit/category-edit-routing.module.ts");
/* harmony import */ var _category_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-edit.page */ "./src/app/pages/admin/category-edit/category-edit.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let CategoryEditPageModule = class CategoryEditPageModule {
};
CategoryEditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _category_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryEditPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_category_edit_page__WEBPACK_IMPORTED_MODULE_6__["CategoryEditPage"]]
    })
], CategoryEditPageModule);



/***/ }),

/***/ "./src/app/pages/admin/category-edit/category-edit.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/admin/category-edit/category-edit.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2NhdGVnb3J5LWVkaXQvY2F0ZWdvcnktZWRpdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/admin/category-edit/category-edit.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/admin/category-edit/category-edit.page.ts ***!
  \*****************************************************************/
/*! exports provided: CategoryEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryEditPage", function() { return CategoryEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_userdata_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/userdata.service */ "./src/app/services/userdata.service.ts");






let CategoryEditPage = class CategoryEditPage {
    constructor(dataService, userData, activatedRoute, toastController) {
        this.dataService = dataService;
        this.userData = userData;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.categoryData = [];
    }
    ngOnInit() {
        this.getUsername();
        this.id = this.activatedRoute.snapshot.params["categoryID"];
        this.dataService.getCategory(this.id).subscribe(res => {
            this.categoryData = res;
        });
    }
    getUsername() {
        this.userData.getUsername().then((username) => {
            this.username = username;
        });
    }
    update() {
        this.dataService.updateCategory(this.id, this.categoryData).subscribe(res => {
            this.mostrarToast();
        });
    }
    mostrarToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Has editado la categoría correctamente.',
                duration: 2000
            });
            toast.present();
        });
    }
};
CategoryEditPage.ctorParameters = () => [
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: src_app_services_userdata_service__WEBPACK_IMPORTED_MODULE_5__["UserData"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
CategoryEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./category-edit.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/category-edit/category-edit.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./category-edit.page.scss */ "./src/app/pages/admin/category-edit/category-edit.page.scss")).default]
    })
], CategoryEditPage);



/***/ })

}]);
//# sourceMappingURL=pages-admin-category-edit-category-edit-module-es2015.js.map