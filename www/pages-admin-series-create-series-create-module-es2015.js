(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-series-create-series-create-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/series-create/series-create.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/series-create/series-create.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Create a Serie\"></app-header>\n\n<ion-content class=\"ion-padding\">\n    <ng-container *ngIf=\"username\">\n        <form #createForm=\"ngForm\">\n            <!-- <ion-list> -->\n            <ion-item>\n                <ion-label position=\"floating\">Titulo</ion-label>\n                <ion-input [(ngModel)]=\"data.title\" name=\"titulo\" type=\"text\" required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">Slug (/series/serie)</ion-label>\n                <ion-input [(ngModel)]=\"data.slug\" name=\"slug\" type=\"text\" required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">Año de emisión</ion-label>\n                <ion-input [(ngModel)]=\"data.year\" name=\"year\" type=\"number\" required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">Sinopsis</ion-label>\n                <ion-textarea [(ngModel)]=\"data.sinopsis\" name=\"sinopsis\" required></ion-textarea>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">Temporadas</ion-label>\n                <ion-input [(ngModel)]=\"data.seasons\" name=\"seasons\" type=\"number\" required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">Capítulos</ion-label>\n                <ion-input [(ngModel)]=\"data.episodes\" name=\"episodes\" type=\"number\" required></ion-input>\n            </ion-item>\n            <!-- Select con los todas las categorías existentes -->\n            <ion-item>\n                <ion-label position=\"floating\">Categorias</ion-label>\n                <ion-select [(ngModel)]=\"data.categories\" name=\"categories\" multiple=\"true\" required>\n                    <ng-container *ngFor=\"let c of categoriesData\">\n                        <ion-select-option [value]=\"c.name\">{{ c.name }}</ion-select-option>\n                    </ng-container>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">Imagenes (rutas separadas por coma)</ion-label>\n                <ion-textarea [(ngModel)]=\"images\" name=\"images\" required></ion-textarea>\n            </ion-item>\n            <ion-button routerLink=\"/admin/home\" (click)=\"submitForm()\" expand=\"block\">Enviar</ion-button>\n            <!-- </ion-list> -->\n        </form>\n    </ng-container>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/admin/series-create/series-create-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/admin/series-create/series-create-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: SeriesCreatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesCreatePageRoutingModule", function() { return SeriesCreatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _series_create_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./series-create.page */ "./src/app/pages/admin/series-create/series-create.page.ts");




const routes = [
    {
        path: '',
        component: _series_create_page__WEBPACK_IMPORTED_MODULE_3__["SeriesCreatePage"]
    }
];
let SeriesCreatePageRoutingModule = class SeriesCreatePageRoutingModule {
};
SeriesCreatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SeriesCreatePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/admin/series-create/series-create.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/admin/series-create/series-create.module.ts ***!
  \*******************************************************************/
/*! exports provided: SeriesCreatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesCreatePageModule", function() { return SeriesCreatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _series_create_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./series-create-routing.module */ "./src/app/pages/admin/series-create/series-create-routing.module.ts");
/* harmony import */ var _series_create_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./series-create.page */ "./src/app/pages/admin/series-create/series-create.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let SeriesCreatePageModule = class SeriesCreatePageModule {
};
SeriesCreatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _series_create_routing_module__WEBPACK_IMPORTED_MODULE_5__["SeriesCreatePageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_series_create_page__WEBPACK_IMPORTED_MODULE_6__["SeriesCreatePage"]]
    })
], SeriesCreatePageModule);



/***/ }),

/***/ "./src/app/pages/admin/series-create/series-create.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/admin/series-create/series-create.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL3Nlcmllcy1jcmVhdGUvc2VyaWVzLWNyZWF0ZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/admin/series-create/series-create.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/admin/series-create/series-create.page.ts ***!
  \*****************************************************************/
/*! exports provided: SeriesCreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesCreatePage", function() { return SeriesCreatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_userdata_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/userdata.service */ "./src/app/services/userdata.service.ts");






let SeriesCreatePage = class SeriesCreatePage {
    constructor(dataService, userData, router, toastController) {
        this.dataService = dataService;
        this.userData = userData;
        this.router = router;
        this.toastController = toastController;
        this.data = {
            title: null,
            slug: null,
            year: null,
            sinopsis: null,
            seasons: null,
            episodes: null,
            categories: null,
            images: null
        };
        this.categoriesData = [];
    }
    ngOnInit() {
        this.getUsername();
        this.dataService.getCategorias().subscribe(res => {
            this.categoriesData = res;
        });
    }
    getUsername() {
        this.userData.getUsername().then((username) => {
            this.username = username;
        });
    }
    submitForm() {
        this.data.images = this.images.split(',');
        this.dataService.createSerie(this.data).subscribe(res => {
            this.data = {
                title: null,
                slug: null,
                year: null,
                sinopsis: null,
                seasons: null,
                episodes: null,
                categories: null,
                images: null
            };
            this.mostrarToast();
        });
    }
    mostrarToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Has añadido la serie correctamente.',
                duration: 2000
            });
            toast.present();
        });
    }
};
SeriesCreatePage.ctorParameters = () => [
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: src_app_services_userdata_service__WEBPACK_IMPORTED_MODULE_5__["UserData"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
SeriesCreatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-series-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./series-create.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/series-create/series-create.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./series-create.page.scss */ "./src/app/pages/admin/series-create/series-create.page.scss")).default]
    })
], SeriesCreatePage);



/***/ })

}]);
//# sourceMappingURL=pages-admin-series-create-series-create-module-es2015.js.map