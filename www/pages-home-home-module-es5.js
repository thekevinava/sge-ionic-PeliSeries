(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-title color=\"success\">Inicio</ion-title>\n    </ion-buttons>\n    <ion-buttons class=\"ion-justify-content-center\">\n      <ion-avatar>\n        <ion-img src=\"/assets/Logo3.png\"></ion-img>\n      </ion-avatar>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button menu=\"menuPrincipal\" color=\"success\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let s of seriesFinal\">\n      <ion-card style=\"width: 100%\">\n        <ion-img [src]=\"s.images[0]\"></ion-img>\n        <ion-card-header>\n          <ion-card-title color=\"warning\">{{ s.title }}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ng-container *ngFor=\"let cat of s.categories;\">\n            <ion-chip *ngIf=\"mismaCategoria(cat)\" routerLink=\"/categories/{{slug}}\" color=\"danger\">\n              {{ cat }}\n            </ion-chip>\n          </ng-container>\n          <ion-button href=\"/series/{{s.slug}}\" color=\"verdecito\" shape=\"round\" strong=\"true\" expand=\"block\">Ir</ion-button>\n        </ion-card-content>\n      </ion-card>\n    </ion-item>\n  </ion-list>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Cargando más series...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/home/home-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/home/home-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppPagesHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/pages/home/home.page.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/home/home.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/home/home.module.ts ***!
      \*******************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppPagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/pages/home/home-routing.module.ts");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/pages/home/home.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/pages/home/home.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/pages/home/home.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card ion-chip {\n  background-color: #8ecae6;\n}\n\nion-card {\n  background-color: #023047;\n  text-align: center;\n}\n\nion-card-title {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIGlvbi1jaGlwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZWNhZTY7IC8vIGJsYWNrXHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjMwNDc7IC8vIGJsYWNrXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/home/home.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/pages/home/home.page.ts ***!
      \*****************************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppPagesHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/data.service */
      "./src/app/services/data.service.ts");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(dataService) {
          _classCallCheck(this, HomePage);

          this.dataService = dataService;
          this.seriesFinal = []; // Listado de series a mostrar con Infinite Scroll

          this.cuenta = 0;
          this.series = [];
          this.categorias = [];
        }

        _createClass(HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.dataService.getCategorias().subscribe(function (res) {
              _this.categorias = res;
            });
            /* leo el JSON de las series y lo guardo directamente en un array */

            this.dataService.getSeries().subscribe(function (res) {
              _this.series = res;
              /* Ordeno las series de más recientes a más antiguas */

              _this.series.sort(function (a, b) {
                if (a['year'] < b['year']) return 1;
                if (a['year'] > b['year']) return -1;
                return 0;
              });

              _this.addMoreItems(); // Llamo a la variable que se encarga de publicar los elementos en home.page.html

            });
          }
          /* Leo los datos del home.page.html respecto al Infinite Scroll */

        }, {
          key: "loadData",
          value: function loadData(event) {
            var _this2 = this;

            setTimeout(function () {
              console.log('Loaded');

              _this2.addMoreItems(); // Cargo más datos si existen


              event.target.complete(); // Completo la carga de datos

              if (_this2.series.length === _this2.cuenta) event.target.disabled = true; // Si he completado la carga, desactivo el Infinite Scroll
            }, 500);
          }
        }, {
          key: "addMoreItems",
          value: function addMoreItems() {
            for (var i = 0; i < 4; i++) {
              if (this.series.length === this.cuenta) return; // Si he completado la carga de datos, no añade más información innecesaria

              this.seriesFinal.push(this.series[this.cuenta]);
              this.cuenta++;
            }
          }
        }, {
          key: "mismaCategoria",
          value: function mismaCategoria(cat) {
            for (var i = 0; i < this.categorias.length; i++) {
              if (cat == this.categorias[i].name) return this.slug = this.categorias[i].slug; // Si la categoría es la misma, devuelvo el slug de la categoría requerida
            }
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/pages/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-home-home-module-es5.js.map