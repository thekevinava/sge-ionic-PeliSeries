(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-series-edit-series-edit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/series-edit/series-edit.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/series-edit/series-edit.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Edit {{serieData?.title}}\"></app-header>\n\n<ion-content class=\"ion-padding\">\n    <ng-container *ngIf=\"username\">\n        <form #createForm=\"ngForm\">\n            <!-- <ion-list> -->\n            <ion-item>\n                <ion-label position=\"floating\">Titulo</ion-label>\n                <ion-input [(ngModel)]=\"serieData.title\" name=\"titulo\" type=\"text\" required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">Slug (/series/serie)</ion-label>\n                <ion-input [(ngModel)]=\"serieData.slug\" name=\"slug\" type=\"text\" required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">Año de emisión</ion-label>\n                <ion-input [(ngModel)]=\"serieData.year\" name=\"year\" type=\"number\" required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">Sinopsis</ion-label>\n                <ion-textarea [(ngModel)]=\"serieData.sinopsis\" name=\"sinopsis\" required></ion-textarea>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">Temporadas</ion-label>\n                <ion-input [(ngModel)]=\"serieData.seasons\" name=\"seasons\" type=\"number\" required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">Capítulos</ion-label>\n                <ion-input [(ngModel)]=\"serieData.episodes\" name=\"episodes\" type=\"number\" required></ion-input>\n            </ion-item>\n            <!-- Select con los todas las categorías existentes -->\n            <ion-item>\n                <ion-label position=\"floating\">Categorias</ion-label>\n                <ion-select [(ngModel)]=\"serieData.categories\" name=\"categories\" multiple=\"true\" required>\n                    <ng-container *ngFor=\"let c of categoriesData\">\n                        <ion-select-option [value]=\"c.name\">{{ c.name }}</ion-select-option>\n                    </ng-container>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">Imagenes (rutas separadas por coma)</ion-label>\n                <ion-textarea [(ngModel)]=\"images\" name=\"images\" required></ion-textarea>\n                <!-- <ion-textarea [(ngModel)]=\"images\" name=\"images\" required></ion-textarea> -->\n            </ion-item>\n            <ion-button routerLink=\"/admin/home\" (click)=\"update()\" expand=\"block\">Enviar</ion-button>\n            <!-- </ion-list> -->\n        </form>\n    </ng-container>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/admin/series-edit/series-edit-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/admin/series-edit/series-edit-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: SeriesEditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesEditPageRoutingModule", function() { return SeriesEditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _series_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./series-edit.page */ "./src/app/pages/admin/series-edit/series-edit.page.ts");




const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _series_edit_page__WEBPACK_IMPORTED_MODULE_3__["SeriesEditPage"]
            },
            {
                path: ':serieID',
                component: _series_edit_page__WEBPACK_IMPORTED_MODULE_3__["SeriesEditPage"]
            }
        ]
    }
];
let SeriesEditPageRoutingModule = class SeriesEditPageRoutingModule {
};
SeriesEditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SeriesEditPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/admin/series-edit/series-edit.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/admin/series-edit/series-edit.module.ts ***!
  \***************************************************************/
/*! exports provided: SeriesEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesEditPageModule", function() { return SeriesEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _series_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./series-edit-routing.module */ "./src/app/pages/admin/series-edit/series-edit-routing.module.ts");
/* harmony import */ var _series_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./series-edit.page */ "./src/app/pages/admin/series-edit/series-edit.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let SeriesEditPageModule = class SeriesEditPageModule {
};
SeriesEditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _series_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["SeriesEditPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_series_edit_page__WEBPACK_IMPORTED_MODULE_6__["SeriesEditPage"]]
    })
], SeriesEditPageModule);



/***/ }),

/***/ "./src/app/pages/admin/series-edit/series-edit.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/admin/series-edit/series-edit.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL3Nlcmllcy1lZGl0L3Nlcmllcy1lZGl0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/admin/series-edit/series-edit.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/admin/series-edit/series-edit.page.ts ***!
  \*************************************************************/
/*! exports provided: SeriesEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesEditPage", function() { return SeriesEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_userdata_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/userdata.service */ "./src/app/services/userdata.service.ts");






let SeriesEditPage = class SeriesEditPage {
    constructor(dataService, userData, activatedRoute, toastController) {
        this.dataService = dataService;
        this.userData = userData;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.serieData = [];
        this.images = "";
        this.categoriesData = [];
    }
    ngOnInit() {
        this.getUsername();
        this.id = this.activatedRoute.snapshot.params["serieID"];
        this.dataService.getSerie(this.id).subscribe(res => {
            this.serieData = res;
            for (let i = 0; i < this.serieData.images.length; i++) {
                console.log(this.serieData.images[i]);
                this.images += this.serieData.images[i] + ',';
            }
            this.images = this.images.slice(0, -1); // Elimino la última coma
        });
        this.dataService.getCategorias().subscribe(res => {
            this.categoriesData = res;
        });
    }
    getUsername() {
        this.userData.getUsername().then((username) => {
            this.username = username;
        });
    }
    update() {
        this.dataService.updateSerie(this.id, this.serieData).subscribe(res => {
            this.mostrarToast();
        });
    }
    mostrarToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Has editado la serie correctamente.',
                duration: 2000
            });
            toast.present();
        });
    }
};
SeriesEditPage.ctorParameters = () => [
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: src_app_services_userdata_service__WEBPACK_IMPORTED_MODULE_5__["UserData"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
SeriesEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-series-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./series-edit.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/series-edit/series-edit.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./series-edit.page.scss */ "./src/app/pages/admin/series-edit/series-edit.page.scss")).default]
    })
], SeriesEditPage);



/***/ })

}]);
//# sourceMappingURL=pages-admin-series-edit-series-edit-module-es2015.js.map