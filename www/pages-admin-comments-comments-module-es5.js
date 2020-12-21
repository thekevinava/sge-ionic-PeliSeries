(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-comments-comments-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/comments/comments.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/comments/comments.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAdminCommentsCommentsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <app-header titulo=\"Comentarios de {{serieData?.title}}\"></app-header> -->\n\n<ion-content class=\"ion-padding\">\n  <ng-container *ngIf=\"username\">\n    <ion-buttons>\n      <ion-back-button color=\"warning\" text=\"Volver al listado de series\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-back-button color=\"warning\" text=\"Volver al listado de series\" routerLink=\"/\">Volver al listado de series</ion-back-button>\n    <!-- <ion-button expand=\"full\" color=\"warning\" fill=\"outline\" routerLinkActive=\"/\">Volver al listado de series</ion-button> -->\n    <ion-item>\n      <ion-label>Comentarios recientes de {{ serieData?.title }}</ion-label>\n    </ion-item>\n    <ion-card *ngFor=\"let c of commentsSerie\">\n      <ion-card-content class=\"ion-padding\">\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"3\">\n                    <ion-thumbnail>\n                        <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n                    </ion-thumbnail>\n                </ion-col >\n                <ion-col>\n                    <ion-label><b>Fecha:</b> {{getFecha(c.fecha)}}</ion-label><br>\n                    <ion-label><b>Email:</b> {{c.email}}</ion-label><br>\n                    <ion-label><b>Comentario:</b>\n                        <hr> {{c.comentario}}\n                        <hr>\n                    </ion-label>\n                    <ion-label><b>Puntuación:</b> {{c.puntuacion}}</ion-label>\n                </ion-col>\n            </ion-row>\n            <hr>\n            <ion-item>\n              <ion-button (click)=\"delete(c)\" slot=\"end\"><ion-icon name=\"trash\"></ion-icon></ion-button>\n            </ion-item>\n        </ion-grid>\n    </ion-card-content>\n    </ion-card>\n  </ng-container>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/admin/comments/comments-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/admin/comments/comments-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: CommentsPageRoutingModule */

    /***/
    function srcAppPagesAdminCommentsCommentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommentsPageRoutingModule", function () {
        return CommentsPageRoutingModule;
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


      var _comments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./comments.page */
      "./src/app/pages/admin/comments/comments.page.ts");

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _comments_page__WEBPACK_IMPORTED_MODULE_3__["CommentsPage"]
        }, {
          path: ':serieID',
          component: _comments_page__WEBPACK_IMPORTED_MODULE_3__["CommentsPage"]
        }]
      }];

      var CommentsPageRoutingModule = function CommentsPageRoutingModule() {
        _classCallCheck(this, CommentsPageRoutingModule);
      };

      CommentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CommentsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/admin/comments/comments.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/admin/comments/comments.module.ts ***!
      \*********************************************************/

    /*! exports provided: CommentsPageModule */

    /***/
    function srcAppPagesAdminCommentsCommentsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommentsPageModule", function () {
        return CommentsPageModule;
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


      var _comments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./comments-routing.module */
      "./src/app/pages/admin/comments/comments-routing.module.ts");
      /* harmony import */


      var _comments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./comments.page */
      "./src/app/pages/admin/comments/comments.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");

      var CommentsPageModule = function CommentsPageModule() {
        _classCallCheck(this, CommentsPageModule);
      };

      CommentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _comments_routing_module__WEBPACK_IMPORTED_MODULE_5__["CommentsPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_comments_page__WEBPACK_IMPORTED_MODULE_6__["CommentsPage"]]
      })], CommentsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/admin/comments/comments.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/pages/admin/comments/comments.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAdminCommentsCommentsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "hr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  background: var(--ion-color-step-150, #d7d8da);\n}\n\nion-label {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vY29tbWVudHMvY29tbWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW4vY29tbWVudHMvY29tbWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/admin/comments/comments.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/admin/comments/comments.page.ts ***!
      \*******************************************************/

    /*! exports provided: CommentsPage */

    /***/
    function srcAppPagesAdminCommentsCommentsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommentsPage", function () {
        return CommentsPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/data.service */
      "./src/app/services/data.service.ts");
      /* harmony import */


      var src_app_services_userdata_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/userdata.service */
      "./src/app/services/userdata.service.ts");

      var CommentsPage = /*#__PURE__*/function () {
        function CommentsPage(dataService, userData, activatedRoute, toastController) {
          _classCallCheck(this, CommentsPage);

          this.dataService = dataService;
          this.userData = userData;
          this.activatedRoute = activatedRoute;
          this.toastController = toastController;
          this.serieData = [];
          this.commentsData = [];
          this.commentsSerie = [];
        }

        _createClass(CommentsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.getUsername();
            this.id = this.activatedRoute.snapshot.params["serieID"];
            this.dataService.getSerie(this.id).subscribe(function (res) {
              _this.serieData = res;
            });
            this.getComentarios();
          }
        }, {
          key: "getComentarios",
          value: function getComentarios() {
            var _this2 = this;

            this.dataService.getComentarios().subscribe(function (res) {
              _this2.commentsData = res;

              for (var i = 0; i < _this2.commentsData.length; i++) {
                if (_this2.serieData.slug === _this2.commentsData[i].slug) {
                  _this2.commentsSerie.push(_this2.commentsData[i]);
                }
              }
            });
          }
        }, {
          key: "getUsername",
          value: function getUsername() {
            var _this3 = this;

            this.userData.getUsername().then(function (username) {
              _this3.username = username;
            });
          }
        }, {
          key: "getFecha",
          value: function getFecha(fecha) {
            var date = new Date(fecha);
            return date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
          }
        }, {
          key: "delete",
          value: function _delete(item) {
            var _this4 = this;

            this.dataService.deleteComment(item.id).subscribe(function (res) {
              _this4.commentsSerie = []; // Reinicio el array

              _this4.getComentarios();

              _this4.mostrarToast();
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
                        message: 'Has eliminado el comentario correctamente.',
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

        return CommentsPage;
      }();

      CommentsPage.ctorParameters = function () {
        return [{
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }, {
          type: src_app_services_userdata_service__WEBPACK_IMPORTED_MODULE_5__["UserData"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }];
      };

      CommentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comments',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./comments.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/comments/comments.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./comments.page.scss */
        "./src/app/pages/admin/comments/comments.page.scss"))["default"]]
      })], CommentsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-admin-comments-comments-module-es5.js.map