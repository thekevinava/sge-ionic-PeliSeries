(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-series-series-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/serie/serie.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/serie/serie.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [hidden]=\"cardSerie\" titulo=\"{{serie?.title}}\"></app-header>\n\n<ion-content>\n    <ion-card [hidden]=\"cardSerie\">\n        <ion-slides [options]=\"slideOpts\" pager=\"true\">\n            <ion-slide *ngFor=\"let s of serie?.images\">\n                <ion-img [src]=\"s\"></ion-img>\n            </ion-slide>\n        </ion-slides>\n        <ion-list>\n            <ion-card-header>\n                <ion-card-title color=\"warning\">{{ serie?.title }}</ion-card-title>\n                <ng-container *ngFor=\"let cat of serie?.categories;\">\n                    <ion-chip *ngIf=\"mismaCategoria(cat)\" routerLink=\"/categories/{{catSlug}}\" color=\"danger\">\n                        {{ cat }}\n                    </ion-chip>\n                </ng-container>\n            </ion-card-header>\n            <ion-card-content>\n                <ion-item>\n                    <ion-button (click)=\"visualizaciones(true,false,true)\" slot=\"start\">Puntuar</ion-button>\n                    <ion-button (click)=\"visualizaciones(true,true,false)\" slot=\"end\">Ver Comentarios</ion-button>\n                </ion-item>\n                <ion-item>\n                    Puntuación\n                    <ion-badge style=\"margin-left: 20px;\" color=\"verdecito\">{{puntuacionTotal()}}</ion-badge>\n                </ion-item>\n                <ion-item>\n                    <ion-label color=\"secondary\">Año de emisión: {{serie?.year}}</ion-label>\n                </ion-item>\n                <ion-item>\n                    <ion-label color=\"primary\" style=\"font-size: 30px;\">Sinopsis:</ion-label>\n                </ion-item>\n                <ion-item>\n                    {{serie?.sinopsis}}\n                </ion-item>\n                <ion-item>\n                    <ion-label class=\"center\" color=\"tertiary\">Temporadas: {{serie?.seasons}}</ion-label>\n                    <ion-label class=\"center\" color=\"tertiary\">Capítulos: {{serie?.episodes}}</ion-label>\n                </ion-item>\n            </ion-card-content>\n        </ion-list>\n    </ion-card>\n\n\n    <ion-card [hidden]=\"cardForm\">\n        <ion-card-header>\n            <ion-card-title>Puntua la serie</ion-card-title>\n            <ion-card-subtitle>Añade una puntuación a {{serie?.title}}</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n            <form #formulario=\"ngForm\">\n                <ion-list>\n                    <ion-item>\n                        <ion-label position=\"floating\">Email</ion-label>\n                        <ion-input type=\"email\" name=\"email\"\n                            pattern=\"[a-zA-Z0-9.-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,5}\" [(ngModel)]=\"usuario.email\"\n                            required></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                        <ion-label position=\"floating\">Puntuación</ion-label>\n                        <ion-range pin=\"true\" type=\"range\" min=\"0\" max=\"10\" step=\"1\" snaps=\"true\" name=\"puntuacion\"\n                            [(ngModel)]=\"usuario.puntuacion\" required>\n                            <ion-label slot=\"start\">0</ion-label>\n                            <ion-label slot=\"end\">10</ion-label>\n                        </ion-range>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"floating\">Comentario</ion-label>\n                        <ion-textarea name=\"comentario\" [(ngModel)]=\"usuario.comentario\"></ion-textarea>\n                    </ion-item>\n                    <ion-item>\n                        <ion-button slot=\"start\" type=\"submit\" (click)=\"ejecutarFormulario(serie?.slug)\"\n                            [disabled]=\"formulario.invalid\">Enviar Puntuación</ion-button>\n                        <ion-button slot=\"end\" (click)=\"visualizaciones(false,true,true)\">Cancelar</ion-button>\n                    </ion-item>\n                </ion-list>\n\n            </form>\n        </ion-card-content>\n    </ion-card>\n\n    <div [hidden]=\"cardComentarios\">\n        <ion-button expand=\"full\" color=\"warning\" fill=\"outline\" (click)=\"visualizaciones(false,true,true)\">Volver a la\n            ficha de\n            {{serie?.title}}</ion-button>\n        <ion-title>Comentarios Recientes</ion-title>\n        <ion-card *ngFor=\"let c of comentariosSerie\">\n            <ion-card-content class=\"ion-padding\">\n                <ion-grid>\n                    <ion-row>\n                        <ion-col size=\"2\">\n                            <ion-thumbnail>\n                                <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n                            </ion-thumbnail>\n                        </ion-col>\n                        <ion-col>\n                            <ion-label><b>Fecha:</b> {{getFecha(c.fecha)}}</ion-label><br>\n                            <ion-label><b>Email:</b> {{c.email}}</ion-label><br>\n                            <ion-label><b>Comentario:</b>\n                                <hr> {{c.comentario}}\n                                <hr>\n                            </ion-label>\n                            <ion-label><b>Puntuación:</b> {{c.puntuacion}}</ion-label>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n                <hr>\n                <ion-item *ngIf=\"username\">\n                    <ion-button color=\"danger\" (click)=\"deleteComment(c)\" slot=\"end\">\n                        <ion-icon name=\"trash\"></ion-icon>\n                    </ion-button>\n                </ion-item>\n            </ion-card-content>\n        </ion-card>\n    </div>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/series/series.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/series/series.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/serie/serie.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/serie/serie.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-title {\n  text-align: center;\n}\n\nion-card {\n  text-align: center;\n}\n\nion-item .center {\n  text-align: center;\n}\n\nh1 {\n  text-align: center;\n}\n\nion-title {\n  text-align: center;\n}\n\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  background: var(--ion-color-step-150, #d7d8da);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VyaWUvc2VyaWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKOztBQUNBO0VBQ0ksa0JBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlcmllL3NlcmllLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuaW9uLWNhcmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24taXRlbSAuY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/serie/serie.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/serie/serie.page.ts ***!
  \*******************************************/
/*! exports provided: SeriePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriePage", function() { return SeriePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_userdata_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/userdata.service */ "./src/app/services/userdata.service.ts");






let SeriePage = class SeriePage {
    constructor(route, dataService, alertCtrl, toastController, router, userData) {
        this.route = route;
        this.dataService = dataService;
        this.alertCtrl = alertCtrl;
        this.toastController = toastController;
        this.router = router;
        this.userData = userData;
        this.usuario = {
            slug: '',
            email: '',
            puntuacion: '',
            comentario: '',
            fecha: Date.now()
        };
        this.comentariosSerie = [];
        /* Para la visualizacion de las diferentes pantallas */
        this.cardSerie = false;
        this.cardForm = true;
        this.cardComentarios = true;
        /* Los datos para el slider */
        this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true
        };
        this.categorias = [];
        this.series = [];
        this.puntuaciones = [];
    }
    ngOnInit() {
        this.getUsername();
        this.dataService.getCategorias().subscribe(res => {
            this.categorias = res;
        });
        /* Recojo las series del JSON */
        this.dataService.getSeries().subscribe(res => {
            const serieSlug = this.route.snapshot.paramMap.get('serieSlug'); //Recojo el enrutamiento necesario para la línea 16 del archivo series.routing.module
            this.series = res; // Guardo las series
            if (this.series) {
                for (let i = 0; i < this.series.length; i++) {
                    if (this.series[i].slug === serieSlug)
                        return this.serie = this.series[i]; // Guardo los datos de la serie requerida
                }
            }
        });
        this.getComentarios();
    }
    getComentarios() {
        this.dataService.getComentarios().subscribe(res => {
            this.puntuaciones = res;
            for (let i = 0; i < this.puntuaciones.length; i++) {
                if (this.puntuaciones[i].slug === this.serie.slug) {
                    this.comentariosSerie.push(this.puntuaciones[i]);
                }
            }
            this.comentariosSerie.sort((a, b) => {
                if (a['fecha'] < b['fecha'])
                    return 1;
                if (a['fecha'] > b['fecha'])
                    return -1;
                return 0;
            });
        });
    }
    getUsername() {
        this.userData.getUsername().then((username) => {
            this.username = username;
        });
    }
    mismaCategoria(cat) {
        for (let i = 0; i < this.categorias.length; i++) {
            if (cat == this.categorias[i].name)
                return this.catSlug = this.categorias[i].slug; // Si la categoría es la misma, devuelvo el slug de la categoría requerida
        }
    }
    ejecutarFormulario(slugSerie) {
        this.comentariosSerie.push(this.usuario);
        /* Reordeno el listado de los comentarios */
        this.comentariosSerie.sort((a, b) => {
            if (a['fecha'] < b['fecha'])
                return 1;
            if (a['fecha'] > b['fecha'])
                return -1;
            return 0;
        });
        this.usuario.slug = slugSerie;
        this.dataService.postComentario(this.usuario).subscribe((response) => {
            // this.router.navigate['comentarios']
        });
        /* Reinicio el formulario */
        this.usuario = {
            slug: '',
            email: '',
            puntuacion: '',
            comentario: '',
            fecha: Date.now()
        };
        this.visualizaciones(false, true, true);
        this.mostrarToast();
    }
    mostrarToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Has puntuado la serie correctamente.',
                duration: 2000
            });
            toast.present();
        });
    }
    mostrarToast2() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Has eliminado el comentario correctamente.',
                duration: 2000
            });
            toast.present();
        });
    }
    getFecha(fecha) {
        let date = new Date(fecha);
        return date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
    }
    visualizaciones(ficha, form, comens) {
        this.cardSerie = ficha;
        this.cardForm = form;
        this.cardComentarios = comens;
    }
    puntuacionTotal() {
        if (this.comentariosSerie.length > 0) {
            let total = 0;
            for (let i = 0; i < this.comentariosSerie.length; i++) {
                total += this.comentariosSerie[i].puntuacion;
            }
            return total / this.comentariosSerie.length;
        }
        else
            return "Todavía no se ha puntuado";
    }
    deleteComment(item) {
        this.dataService.deleteComment(item.id).subscribe(res => {
            this.comentariosSerie = []; // Reinicio el array
            this.getComentarios();
            this.mostrarToast2();
        });
    }
};
SeriePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_userdata_service__WEBPACK_IMPORTED_MODULE_5__["UserData"] }
];
SeriePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-serie',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./serie.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/serie/serie.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./serie.page.scss */ "./src/app/pages/serie/serie.page.scss")).default]
    })
], SeriePage);



/***/ }),

/***/ "./src/app/pages/series/series-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/series/series-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SeriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesPageRoutingModule", function() { return SeriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _serie_serie_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../serie/serie.page */ "./src/app/pages/serie/serie.page.ts");
/* harmony import */ var _series_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./series.page */ "./src/app/pages/series/series.page.ts");





const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _series_page__WEBPACK_IMPORTED_MODULE_4__["SeriesPage"]
            },
            {
                path: ':serieSlug',
                component: _serie_serie_page__WEBPACK_IMPORTED_MODULE_3__["SeriePage"],
                loadChildren: () => __webpack_require__.e(/*! import() | serie-serie-module */ "serie-serie-module").then(__webpack_require__.bind(null, /*! ../serie/serie.module */ "./src/app/pages/serie/serie.module.ts")).then(m => m.SeriePageModule)
            }
        ]
    }
];
let SeriesPageRoutingModule = class SeriesPageRoutingModule {
};
SeriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SeriesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/series/series.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/series/series.module.ts ***!
  \***********************************************/
/*! exports provided: SeriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesPageModule", function() { return SeriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _series_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./series-routing.module */ "./src/app/pages/series/series-routing.module.ts");
/* harmony import */ var _series_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./series.page */ "./src/app/pages/series/series.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let SeriesPageModule = class SeriesPageModule {
};
SeriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _series_routing_module__WEBPACK_IMPORTED_MODULE_5__["SeriesPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_series_page__WEBPACK_IMPORTED_MODULE_6__["SeriesPage"]]
    })
], SeriesPageModule);



/***/ }),

/***/ "./src/app/pages/series/series.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/series/series.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nlcmllcy9zZXJpZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/series/series.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/series/series.page.ts ***!
  \*********************************************/
/*! exports provided: SeriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesPage", function() { return SeriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SeriesPage = class SeriesPage {
    constructor() { }
    ngOnInit() {
    }
};
SeriesPage.ctorParameters = () => [];
SeriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-series',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./series.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/series/series.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./series.page.scss */ "./src/app/pages/series/series.page.scss")).default]
    })
], SeriesPage);



/***/ })

}]);
//# sourceMappingURL=pages-series-series-module-es2015.js.map