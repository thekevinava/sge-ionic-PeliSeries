(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-category-list-category-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/category-list/category-list.page.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/category-list/category-list.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAdminCategoryListCategoryListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header titulo=\"Categories List\"></app-header>\n\n\n<ion-content class=\"ion-padding\">\n  <ng-container *ngIf=\"username\">\n    <ion-grid>\n      <ng-container *ngFor=\"let c of categoriesData\">\n        <ion-row>\n          <ion-col size=\"4\">\n            <ion-avatar>\n              <ion-img [src]=\"c.image\"></ion-img>\n            </ion-avatar>\n          </ion-col>\n          <ion-col size=\"6\">\n            <br>\n            <h4>{{ c.name }}</h4>\n          </ion-col>\n          <ion-col>\n            <ion-button color=\"warning\" size=\"small\" routerLink=\"/admin/category-edit/{{c.id}}\">\n              <ion-icon name=\"create\"></ion-icon>\n            </ion-button>\n            <ion-button color=\"danger\" size=\"small\" (click)=\"delete(c)\">\n              <ion-icon name=\"trash\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <hr>\n      </ng-container>\n    </ion-grid>\n  </ng-container>\n  <ion-button routerLink=\"/admin/category-create\" expand=\"block\">Agregar Categoría</ion-button>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/admin/category-list/category-list-routing.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/admin/category-list/category-list-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: CategoryListPageRoutingModule */

    /***/
    function srcAppPagesAdminCategoryListCategoryListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryListPageRoutingModule", function () {
        return CategoryListPageRoutingModule;
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


      var _category_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./category-list.page */
      "./src/app/pages/admin/category-list/category-list.page.ts");

      var routes = [{
        path: '',
        component: _category_list_page__WEBPACK_IMPORTED_MODULE_3__["CategoryListPage"]
      }];

      var CategoryListPageRoutingModule = function CategoryListPageRoutingModule() {
        _classCallCheck(this, CategoryListPageRoutingModule);
      };

      CategoryListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CategoryListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/admin/category-list/category-list.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/admin/category-list/category-list.module.ts ***!
      \*******************************************************************/

    /*! exports provided: CategoryListPageModule */

    /***/
    function srcAppPagesAdminCategoryListCategoryListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryListPageModule", function () {
        return CategoryListPageModule;
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


      var _category_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./category-list-routing.module */
      "./src/app/pages/admin/category-list/category-list-routing.module.ts");
      /* harmony import */


      var _category_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./category-list.page */
      "./src/app/pages/admin/category-list/category-list.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");

      var CategoryListPageModule = function CategoryListPageModule() {
        _classCallCheck(this, CategoryListPageModule);
      };

      CategoryListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _category_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryListPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_category_list_page__WEBPACK_IMPORTED_MODULE_6__["CategoryListPage"]]
      })], CategoryListPageModule);
      /***/
    },

    /***/
    "./src/app/pages/admin/category-list/category-list.page.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/admin/category-list/category-list.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAdminCategoryListCategoryListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "hr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  background: var(--ion-color-step-150, #d7d8da);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vY2F0ZWdvcnktbGlzdC9jYXRlZ29yeS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW4vY2F0ZWdvcnktbGlzdC9jYXRlZ29yeS1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhyIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/admin/category-list/category-list.page.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/admin/category-list/category-list.page.ts ***!
      \*****************************************************************/

    /*! exports provided: CategoryListPage */

    /***/
    function srcAppPagesAdminCategoryListCategoryListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryListPage", function () {
        return CategoryListPage;
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

      var CategoryListPage = /*#__PURE__*/function () {
        function CategoryListPage(dataService, userData, toastController) {
          _classCallCheck(this, CategoryListPage);

          this.dataService = dataService;
          this.userData = userData;
          this.toastController = toastController;
          this.categoriesData = [];
        }

        _createClass(CategoryListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUsername();
            this.getCategories();
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
          key: "getCategories",
          value: function getCategories() {
            var _this2 = this;

            this.dataService.getCategorias().subscribe(function (res) {
              _this2.categoriesData = res;
            });
          }
        }, {
          key: "delete",
          value: function _delete(item) {
            var _this3 = this;

            this.dataService.deleteCategory(item.id).subscribe(function (res) {
              _this3.getCategories();

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
                        message: 'Has eliminado la categoría correctamente.',
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

        return CategoryListPage;
      }();

      CategoryListPage.ctorParameters = function () {
        return [{
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }, {
          type: src_app_services_userdata_service__WEBPACK_IMPORTED_MODULE_4__["UserData"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }];
      };

      CategoryListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./category-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/category-list/category-list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./category-list.page.scss */
        "./src/app/pages/admin/category-list/category-list.page.scss"))["default"]]
      })], CategoryListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-admin-category-list-category-list-module-es5.js.map