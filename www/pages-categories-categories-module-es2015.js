(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-categories-categories-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/categories.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/categories.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Categorías\"></app-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item *ngFor=\"let s of categorias\" routerLink=\"/categories/{{s.slug}}\">\n            <ion-avatar slot=\"start\">\n                <ion-img [src]=\"s.image\"></ion-img>\n            </ion-avatar>\n            <ion-label>\n                <h3>\n                    {{ s.name }}\n                </h3>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"{{categoria?.name}}\"></app-header>\n<ion-content>\n    <ion-item *ngFor=\"let s of seriesFinal\">\n        <ion-card style=\"width: 100%\">\n            <ion-img [src]=\"s.images[0]\"></ion-img>\n            <ion-card-header>\n                <ion-card-title color=\"warning\">{{ s.title }}</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n                <ng-container *ngFor=\"let cat of s.categories;\">\n                    <ion-chip *ngIf=\"mismaCategoria(cat)\" routerLink=\"/categories/{{slug}}\" color=\"danger\">\n                        {{ cat }}\n                    </ion-chip>\n                </ng-container>\n                <ion-button href=\"/series/{{s.slug}}\"  color=\"verdecito\" shape=\"round\" strong=\"true\" expand=\"block\">Ir</ion-button>\n            </ion-card-content>\n        </ion-card>\n    </ion-item>\n\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Cargando más series...\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/categories/categories-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/categories/categories-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CategoriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageRoutingModule", function() { return CategoriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _category_category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../category/category.page */ "./src/app/pages/category/category.page.ts");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categories.page */ "./src/app/pages/categories/categories.page.ts");





const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _categories_page__WEBPACK_IMPORTED_MODULE_4__["CategoriesPage"]
            },
            {
                path: ':categorySlug',
                component: _category_category_page__WEBPACK_IMPORTED_MODULE_3__["CategoryPage"],
                loadChildren: () => __webpack_require__.e(/*! import() | category-category-module */ "category-category-module").then(__webpack_require__.bind(null, /*! ../category/category.module */ "./src/app/pages/category/category.module.ts")).then(m => m.CategoryPageModule)
            }
        ]
    }
];
let CategoriesPageRoutingModule = class CategoriesPageRoutingModule {
};
CategoriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoriesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/categories/categories.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/categories/categories.module.ts ***!
  \*******************************************************/
/*! exports provided: CategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function() { return CategoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories-routing.module */ "./src/app/pages/categories/categories-routing.module.ts");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories.page */ "./src/app/pages/categories/categories.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let CategoriesPageModule = class CategoriesPageModule {
};
CategoriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriesPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]]
    })
], CategoriesPageModule);



/***/ }),

/***/ "./src/app/pages/categories/categories.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/categories/categories.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/categories/categories.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/categories/categories.page.ts ***!
  \*****************************************************/
/*! exports provided: CategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPage", function() { return CategoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");



let CategoriesPage = class CategoriesPage {
    constructor(dataService) {
        this.dataService = dataService;
        this.categorias = [];
    }
    ngOnInit() {
        this.dataService.getCategorias().subscribe(res => {
            this.categorias = res;
        });
    }
};
CategoriesPage.ctorParameters = () => [
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
CategoriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./categories.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/categories.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./categories.page.scss */ "./src/app/pages/categories/categories.page.scss")).default]
    })
], CategoriesPage);



/***/ }),

/***/ "./src/app/pages/category/category.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card ion-chip {\n  background-color: #8ecae6;\n}\n\nion-card {\n  background-color: #023047;\n  text-align: center;\n}\n\nion-card-title {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcnkvY2F0ZWdvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXRlZ29yeS9jYXRlZ29yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCBpb24tY2hpcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGVjYWU2OyAvLyBibGFja1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIzMDQ3OyAvLyBibGFja1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tY2FyZC10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/category/category.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/category/category.page.ts ***!
  \*************************************************/
/*! exports provided: CategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPage", function() { return CategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");




let CategoryPage = class CategoryPage {
    constructor(route, dataService) {
        this.route = route;
        this.dataService = dataService;
        this.seriesCategoria = []; // Listados de series de la categoria requerida
        this.seriesFinal = []; // Listado de series a mostrar con Infinite Scroll
        this.cuenta = 0;
        this.categorias = [];
        this.series = [];
    }
    ngOnInit() {
        /* Recojo las categorías del JSON */
        this.dataService.getCategorias().subscribe(res => {
            const categorySlug = this.route.snapshot.paramMap.get('categorySlug'); //Recojo el enrutamiento necesario para la línea 16 del archivo categories-routing.module
            this.categorias = res; // Guardo las categorías
            if (res) {
                for (let i = 0; i < this.categorias.length; i++) {
                    if (this.categorias[i].slug === categorySlug)
                        return this.categoria = this.categorias[i]; // Guardo los datos de la categoría requerida
                }
            }
        });
        /* Recojo las series del JSON*/
        this.dataService.getSeries().subscribe(res => {
            this.series = res; // Primero recojo las series
            for (let i = 0; i < this.series.length; i++) {
                for (let j = 0; j < this.series[i].categories.length; j++) {
                    if (this.series[i].categories[j] == this.categoria.name) {
                        this.seriesCategoria.push(this.series[i]); // Recojo las series que tengan la misma categoria
                    }
                }
            }
            /* Ordeno las series de más recientes a más antiguas */
            this.seriesCategoria.sort((a, b) => {
                if (a['year'] < b['year'])
                    return 1;
                if (a['year'] > b['year'])
                    return -1;
                return 0;
            });
            this.addMoreItems(); // Llamo a la variable que se encarga de publicar los elementos en category.page.html
        });
    }
    /* Leo los datos del home.page.html respecto al Infinite Scroll */
    loadData(event) {
        setTimeout(() => {
            console.log('Loaded');
            this.addMoreItems(); // Cargo más datos si existen
            event.target.complete(); // Completo la carga de datos
            if (this.seriesCategoria.length === this.cuenta)
                event.target.disabled = true; // Si he completado la carga, desactivo el Infinite Scroll
        }, 500);
    }
    addMoreItems() {
        for (let i = 0; i < 4; i++) {
            if (this.seriesCategoria.length === this.cuenta)
                return; // Si he completado la carga de datos, no añade más información innecesaria
            this.seriesFinal.push(this.seriesCategoria[this.cuenta]);
            this.cuenta++;
        }
    }
    /* Función para poder pasar la ruta al chip de la categoría */
    mismaCategoria(cat) {
        for (let i = 0; i < this.categorias.length; i++) {
            if (cat == this.categorias[i].name)
                return this.slug = this.categorias[i].slug; // Si la categoría es la misma, devuelvo el slug de la categoría requerida
        }
    }
};
CategoryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
CategoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./category.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./category.page.scss */ "./src/app/pages/category/category.page.scss")).default]
    })
], CategoryPage);



/***/ })

}]);
//# sourceMappingURL=pages-categories-categories-module-es2015.js.map