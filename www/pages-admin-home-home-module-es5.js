(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/home/home.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/home/home.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAdminHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header titulo=\"Admin Panel\"></app-header>\n\n<ion-content class=\"ion-padding\">\n    <ion-card>\n        <ion-card-content>\n            <ion-button href=\"/admin/series-list\" expand=\"block\">\n                <ion-icon slot=\"start\" name=\"film-outline\"></ion-icon>\n                <ion-label>Listado de Series</ion-label>\n            </ion-button>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-content>\n            <ion-button routerLink=\"/admin/series-create\" expand=\"block\">\n                <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>\n                <ion-label>Crear Serie</ion-label>\n            </ion-button>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-content>\n            <ion-button href=\"/admin/category-list\" expand=\"block\">\n                <ion-icon slot=\"start\" name=\"list\"></ion-icon>\n                <ion-label>Listado de Categorías</ion-label>\n            </ion-button>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-content>\n            <ion-button routerLink=\"/admin/category-create\" expand=\"block\">\n                <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>\n                <ion-label>Crear Categoría</ion-label>\n            </ion-button>\n        </ion-card-content>\n    </ion-card>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/admin/home/home-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/admin/home/home-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppPagesAdminHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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
      "./src/app/pages/admin/home/home.page.ts");

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
    "./src/app/pages/admin/home/home.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/admin/home/home.module.ts ***!
      \*************************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppPagesAdminHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
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
      "./src/app/pages/admin/home/home-routing.module.ts");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/pages/admin/home/home.page.ts");
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
    "./src/app/pages/admin/home/home.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/pages/admin/home/home.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAdminHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/admin/home/home.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/admin/home/home.page.ts ***!
      \***********************************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppPagesAdminHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
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

      var HomePage = /*#__PURE__*/function () {
        function HomePage() {
          _classCallCheck(this, HomePage);
        }

        _createClass(HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/pages/admin/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-admin-home-home-module-es5.js.map