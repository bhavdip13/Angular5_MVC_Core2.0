(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-components-test-mytest-mytest-module"],{

/***/ "./src/app/theme/pages/components/test/mytest/mytest.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/theme/pages/components/test/mytest/mytest.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-subheader\">\r\n    <div class=\"d-flex align-items-center\">\r\n        <div class=\"mr-auto\">\r\n            <h3 class=\"m-subheader__title m-subheader__title--separator\">\r\n                Skeleton Page\r\n            </h3>\r\n            <ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n                <li class=\"m-nav__item m-nav__item--home\">\r\n                    <a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\r\n                        <i class=\"m-nav__link-icon la la-home\"></i>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<div class=\"m-content\">\r\n    <div>\r\n        <button (click)=\"switchLanguage('en')\">EN</button>\r\n        <button (click)=\"switchLanguage('de')\">DE</button>\r\n        <h1>\r\n            {{ \"app.Welcome\" | translate }}\r\n        </h1>\r\n        <p>\r\n            {{ 'app.New' | translate }}\r\n        </p>\r\n        Skeleton page\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/pages/components/test/mytest/mytest.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/theme/pages/components/test/mytest/mytest.component.ts ***!
  \************************************************************************/
/*! exports provided: MytestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytestComponent", function() { return MytestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MytestComponent = /** @class */ (function () {
    function MytestComponent(translate) {
        var _this = this;
        this.translate = translate;
        this.switchLanguage = function (lang) {
            _this._translate.use(lang);
        };
        this._translate = translate;
        translate.setDefaultLang('en');
    }
    MytestComponent.prototype.ngOnInit = function () {
    };
    MytestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mytest',
            template: __webpack_require__(/*! ./mytest.component.html */ "./src/app/theme/pages/components/test/mytest/mytest.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], MytestComponent);
    return MytestComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/components/test/mytest/mytest.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/pages/components/test/mytest/mytest.module.ts ***!
  \*********************************************************************/
/*! exports provided: MytestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytestModule", function() { return MytestModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/theme/pages/shared/shared.module.ts");
/* harmony import */ var _layouts_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../layouts/layout.module */ "./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var _default_default_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../default/default.component */ "./src/app/theme/pages/default/default.component.ts");
/* harmony import */ var _mytest_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mytest.component */ "./src/app/theme/pages/components/test/mytest/mytest.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        'path': '',
        'component': _default_default_component__WEBPACK_IMPORTED_MODULE_5__["DefaultComponent"],
        'children': [
            {
                'path': '',
                'component': _mytest_component__WEBPACK_IMPORTED_MODULE_6__["MytestComponent"],
            },
        ],
    },
];
var MytestModule = /** @class */ (function () {
    function MytestModule() {
    }
    MytestModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _layouts_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ], exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ], declarations: [
                _mytest_component__WEBPACK_IMPORTED_MODULE_6__["MytestComponent"],
            ],
        })
    ], MytestModule);
    return MytestModule;
}());



/***/ }),

/***/ "./src/app/theme/pages/shared/shared.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/theme/pages/shared/shared.module.ts ***!
  \*****************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-components-test-mytest-mytest-module.js.map