(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-components-user-adduser-addUser-module"],{

/***/ "./src/app/theme/pages/components/user/adduser/addUser.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/theme/pages/components/user/adduser/addUser.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n    <div class=\"d-flex align-items-center\">\r\n        <div class=\"mr-auto\">\r\n            <h3 class=\"m-subheader__title m-subheader__title--separator\">\r\n                {{ title }} User\r\n            </h3>\r\n            <ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n                <li class=\"m-nav__item m-nav__item--home\">\r\n                    <a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\r\n                        <i class=\"m-nav__link-icon la la-home\"></i>\r\n                    </a>\r\n                </li>\r\n                <li class=\"m-nav__separator\">\r\n                    -\r\n                </li>\r\n                <li class=\"m-nav__item\">\r\n                    <span class=\"m-nav__link-text\">\r\n                        {{ title }} User\r\n                    </span>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<div class=\"m-content\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <!--begin::Portlet-->\r\n            <div class=\"m-portlet\">\r\n                <!--begin::Form-->\r\n                <form [formGroup]=\"userForm\" (ngSubmit)=\"save()\" class=\"m-form m-form--fit m-form--label-align-right m-form--group-seperator-dashed\" id=\"m_form_1\">\r\n                    <div class=\"m-portlet__body\">\r\n                        <input type=\"hidden\" formControlName=\"id\">\r\n                        <div class=\"form-group m-form__group row\">\r\n                            <div class=\"col-lg-6\">\r\n                                <label>\r\n                                    FullName\r\n                                </label>\r\n                                <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter FullName\" formControlName=\"fullName\">\r\n                               \r\n                            </div>\r\n                            <div class=\"col-lg-6\">\r\n                                <label class=\"\">\r\n                                    Password\r\n                                </label>\r\n                                <input type=\"password\" class=\"form-control m-input\" placeholder=\"Enter Password\" formControlName=\"password\">\r\n                               \r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group m-form__group row\">\r\n                            <div class=\"col-lg-6\">\r\n                                <label>\r\n                                    Email\r\n                                </label>\r\n                                <input type=\"email\" class=\"form-control m-input\" placeholder=\"Enter Email\" formControlName=\"email\">\r\n                              \r\n                            </div>\r\n                            <!--<div class=\"col-lg-6\">\r\n                                <label class=\"\">\r\n                                    Employee\r\n                                </label>\r\n                                <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter Employee\" formControlName=\"employeeid\">\r\n                                <span class=\"m-form__help\">\r\n                                    Please enter Employee\r\n                                </span>\r\n                            </div>-->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"m-portlet__foot m-portlet__no-border m-portlet__foot--fit\">\r\n                        <div class=\"m-form__actions m-form__actions--solid\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-6\">\r\n                                    <button type=\"submit\" [disabled]=\"!userForm.valid\" class=\"btn m-btn--square btn-primary btn-sm\">\r\n                                        {{title}} User\r\n                                    </button>\r\n                                    <button type=\"reset\" class=\"btn m-btn--square btn-secondary btn-sm\">\r\n                                        Cancel\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n                <!--end::Form-->\r\n            </div>\r\n            <!--end::Portlet-->\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/pages/components/user/adduser/addUser.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/theme/pages/components/user/adduser/addUser.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../_services/script-loader.service */ "./src/app/_services/script-loader.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/theme/pages/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(_script, _avRoute, _router, _userService, _fb) {
        this._script = _script;
        this._avRoute = _avRoute;
        this._router = _router;
        this._userService = _userService;
        this._fb = _fb;
        this.title = "Create";
        if (this._avRoute.snapshot.params["id"]) {
            this.id = this._avRoute.snapshot.params["id"];
        }
    }
    AddUserComponent.prototype.GetUserByID = function (userid) {
        var _this = this;
        this._userService.getUserById(userid)
            .subscribe(function (user) {
            console.log("GetUserByID", user);
            _this.user = user;
        });
    };
    AddUserComponent.prototype.getUsers = function () {
        this._userService.getUsers()
            .subscribe(function (data) {
            console.log("GetAllUser", data);
        });
    };
    AddUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initializeForm();
        if (this.id > 0) {
            this.title = "Edit";
            this._userService.getUserById(this.id).subscribe(function (result) {
                console.log(result);
                _this.user = result;
                _this.userForm.setValue({
                    id: _this.user.id,
                    fullName: _this.user.fullName,
                    password: '',
                    email: _this.user.email
                });
            });
        }
        /*
        this.GetUserByID(this.id);

        this.getUsers();

        if (this.id > 0) {
            this.title = "Edit";
            this.initializeForm();
        } else {
            this.initializeForm();
        }
        */
        //if (this.id > 0) {
        //    this.title = "Edit";
        //}
        //this.initializeForm();
    };
    //GetUserByID(userid: number) {
    //    this._userService.getUserById(userid)
    //        .subscribe((data) => {
    //            console.log("DATA", data);
    //            this.user = data;
    //            this.title = "Edit";
    //        }
    //        , error => console.log(error));
    //}
    AddUserComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('addUser', ['assets/demo/default/custom/components/forms/validation/form-controls.js']);
    };
    AddUserComponent.prototype.save = function () {
        //if (!this.employeeForm.valid) {
        //    return;
        //}
        var _this = this;
        if (this.title == "Create") {
            this._userService.saveUser(this.userForm.value)
                .subscribe(function (data) {
                _this.userForm.reset();
                _this._router.navigate(['user/fetch-user']);
            }, function (error) { return console.log(error); });
        }
        else if (this.title == "Edit") {
            this._userService.saveUser(this.userForm.value)
                .subscribe(function (data) {
                _this.userForm.reset();
                _this._router.navigate(['user/fetch-user']);
            }, function (error) { return console.log(error); });
        }
    };
    AddUserComponent.prototype.cancel = function () {
        this._router.navigate(['/fetch-user']);
    };
    AddUserComponent.prototype.initializeForm = function () {
        this.userForm = this._fb.group({
            id: [0],
            fullName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
        //if (this.title == "Edit") {
        //    this.userForm = this._fb.group({
        //        userName: [this.user.userName, [Validators.required]],
        //        password: ['', [Validators.required]],
        //        email: [this.user.email, [Validators.required]],
        //        employeeid: [this.user.employeeId, [Validators.required]]
        //    })
        //}
        //else if (this.title == "Create") {
        //    this.userForm = this._fb.group({
        //        userName: ['Amanda Clarke', [Validators.required]],
        //        password: ['123456', [Validators.required]],
        //        email: ['amanda@gmail.com', [Validators.required]],
        //        employeeid: ['FBI', [Validators.required]]
        //    })
        //}
    };
    AddUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'addUser',
            template: __webpack_require__(/*! ./addUser.component.html */ "./src/app/theme/pages/components/user/adduser/addUser.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/components/user/adduser/addUser.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/pages/components/user/adduser/addUser.module.ts ***!
  \***********************************************************************/
/*! exports provided: AddUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserModule", function() { return AddUserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _addUser_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addUser.component */ "./src/app/theme/pages/components/user/adduser/addUser.component.ts");
/* harmony import */ var _layouts_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../layouts/layout.module */ "./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var _default_default_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../default/default.component */ "./src/app/theme/pages/default/default.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/theme/pages/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        "path": "",
        "component": _default_default_component__WEBPACK_IMPORTED_MODULE_5__["DefaultComponent"],
        "children": [
            {
                "path": "",
                "component": _addUser_component__WEBPACK_IMPORTED_MODULE_3__["AddUserComponent"]
            }
        ]
    }
];
var AddUserModule = /** @class */ (function () {
    function AddUserModule() {
    }
    AddUserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _layouts_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ], exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ], declarations: [
                _addUser_component__WEBPACK_IMPORTED_MODULE_3__["AddUserComponent"]
            ], providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]]
        })
    ], AddUserModule);
    return AddUserModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-components-user-adduser-addUser-module.js.map