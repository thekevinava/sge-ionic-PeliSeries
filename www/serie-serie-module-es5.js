(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serie-serie-module"], {
    /***/
    "./src/app/pages/serie/serie-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/serie/serie-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: SeriePageRoutingModule */

    /***/
    function srcAppPagesSerieSerieRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SeriePageRoutingModule", function () {
        return SeriePageRoutingModule;
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


      var _serie_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./serie.page */
      "./src/app/pages/serie/serie.page.ts");

      var routes = [{
        path: '',
        component: _serie_page__WEBPACK_IMPORTED_MODULE_3__["SeriePage"]
      }];

      var SeriePageRoutingModule = function SeriePageRoutingModule() {
        _classCallCheck(this, SeriePageRoutingModule);
      };

      SeriePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SeriePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/serie/serie.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/serie/serie.module.ts ***!
      \*********************************************/

    /*! exports provided: SeriePageModule */

    /***/
    function srcAppPagesSerieSerieModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SeriePageModule", function () {
        return SeriePageModule;
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


      var _serie_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./serie-routing.module */
      "./src/app/pages/serie/serie-routing.module.ts");
      /* harmony import */


      var _serie_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./serie.page */
      "./src/app/pages/serie/serie.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");

      var SeriePageModule = function SeriePageModule() {
        _classCallCheck(this, SeriePageModule);
      };

      SeriePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _serie_routing_module__WEBPACK_IMPORTED_MODULE_5__["SeriePageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_serie_page__WEBPACK_IMPORTED_MODULE_6__["SeriePage"]]
      })], SeriePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=serie-serie-module-es5.js.map