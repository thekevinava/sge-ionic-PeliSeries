(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-series-list-series-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/series-list/series-list.page.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/series-list/series-list.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAdminSeriesListSeriesListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header titulo=\"Series List\"></app-header>\n\n<ion-content class=\"ion-padding\">\n  <ng-container *ngIf=\"username\">\n    <ion-grid>\n      <ng-container *ngFor=\"let s of seriesData\">\n        <ion-row>\n          <ion-col size=\"1\"></ion-col>\n          <ion-col size=\"3\">\n            <ion-img [src]=\"s.images[0]\"></ion-img>\n          </ion-col>\n          <ion-col size=\"4\">\n            <h4>{{s.title}}</h4>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-row>\n              <ion-col>\n                <ion-button color=\"warning\" size=\"small\" routerLink=\"/admin/series-edit/{{s.id}}\">\n                  <ion-icon name=\"create\"></ion-icon>\n                </ion-button>\n              </ion-col>\n              <ion-col>\n                <ion-button color=\"danger\" size=\"small\" (click)=\"delete(s)\">\n                  <ion-icon name=\"trash\"></ion-icon>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-button color=\"tertiary\" size=\"small\" routerLink=\"/admin/comments/{{s.id}}\">\n                  <ion-icon name=\"chatbox-ellipses-outline\"></ion-icon>\n                </ion-button>\n              </ion-col>\n              <ion-col>\n                <ion-button color=\"verdecito\" size=\"small\" href=\"/series/{{s.slug}}\">\n                  <ion-icon name=\"eye-outline\"></ion-icon>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n\n\n\n\n          </ion-col>\n        </ion-row>\n        <hr>\n      </ng-container>\n    </ion-grid>\n  </ng-container>\n  <ion-button routerLink=\"/admin/series-create\" expand=\"block\">Agregar Serie</ion-button>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/admin/series-list/series-list-routing.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/admin/series-list/series-list-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: SeriesListPageRoutingModule */

    /***/
    function srcAppPagesAdminSeriesListSeriesListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SeriesListPageRoutingModule", function () {
        return SeriesListPageRoutingModule;
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


      var _series_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./series-list.page */
      "./src/app/pages/admin/series-list/series-list.page.ts");

      var routes = [{
        path: '',
        component: _series_list_page__WEBPACK_IMPORTED_MODULE_3__["SeriesListPage"]
      }];

      var SeriesListPageRoutingModule = function SeriesListPageRoutingModule() {
        _classCallCheck(this, SeriesListPageRoutingModule);
      };

      SeriesListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SeriesListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/admin/series-list/series-list.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/admin/series-list/series-list.module.ts ***!
      \***************************************************************/

    /*! exports provided: SeriesListPageModule */

    /***/
    function srcAppPagesAdminSeriesListSeriesListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SeriesListPageModule", function () {
        return SeriesListPageModule;
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


      var _series_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./series-list-routing.module */
      "./src/app/pages/admin/series-list/series-list-routing.module.ts");
      /* harmony import */


      var _series_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./series-list.page */
      "./src/app/pages/admin/series-list/series-list.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");

      var SeriesListPageModule = function SeriesListPageModule() {
        _classCallCheck(this, SeriesListPageModule);
      };

      SeriesListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _series_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["SeriesListPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_series_list_page__WEBPACK_IMPORTED_MODULE_6__["SeriesListPage"]]
      })], SeriesListPageModule);
      /***/
    },

    /***/
    "./src/app/pages/admin/series-list/series-list.page.scss":
    /*!***************************************************************!*\
      !*** ./src/app/pages/admin/series-list/series-list.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAdminSeriesListSeriesListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "hr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  background: var(--ion-color-step-150, #d7d8da);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vc2VyaWVzLWxpc3Qvc2VyaWVzLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZG1pbi9zZXJpZXMtbGlzdC9zZXJpZXMtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJociB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/admin/series-list/series-list.page.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/admin/series-list/series-list.page.ts ***!
      \*************************************************************/

    /*! exports provided: SeriesListPage */

    /***/
    function srcAppPagesAdminSeriesListSeriesListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SeriesListPage", function () {
        return SeriesListPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/data.service */
      "./src/app/services/data.service.ts");
      /* harmony import */


      var src_app_services_userdata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/userdata.service */
      "./src/app/services/userdata.service.ts");

      var SeriesListPage = /*#__PURE__*/function () {
        function SeriesListPage(dataService, userData, toastController) {
          _classCallCheck(this, SeriesListPage);

          this.dataService = dataService;
          this.userData = userData;
          this.toastController = toastController;
          this.seriesData = [];
        }

        _createClass(SeriesListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUsername();
            this.getSeries();
          }
        }, {
          key: "getUsername",
          value: function getUsername() {
            var _this = this;

            this.userData.getUsername().then(function (username) {
              _this.username = username;
            });
          }
        }, {
          key: "getSeries",
          value: function getSeries() {
            var _this2 = this;

            this.dataService.getSeries().subscribe(function (res) {
              _this2.seriesData = res;
            });
          }
        }, {
          key: "delete",
          value: function _delete(item) {
            var _this3 = this;

            this.dataService.deleteSerie(item.id).subscribe(function (res) {
              _this3.getSeries();

              _this3.mostrarToast();
            });
          }
        }, {
          key: "mostrarToast",
          value: function mostrarToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: 'Has eliminado la serie correctamente.',
                        duration: 2000
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return SeriesListPage;
      }();

      SeriesListPage.ctorParameters = function () {
        return [{
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }, {
          type: src_app_services_userdata_service__WEBPACK_IMPORTED_MODULE_4__["UserData"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }];
      };

      SeriesListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-series-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./series-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/series-list/series-list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./series-list.page.scss */
        "./src/app/pages/admin/series-list/series-list.page.scss"))["default"]]
      })], SeriesListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-admin-series-list-series-list-module-es5.js.map