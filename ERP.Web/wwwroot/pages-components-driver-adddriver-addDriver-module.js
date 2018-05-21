(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-components-driver-adddriver-addDriver-module"],{

/***/ "./src/app/theme/pages/components/driver/adddriver/addDriver.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/theme/pages/components/driver/adddriver/addDriver.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n    <div class=\"d-flex align-items-center\">\r\n        <div class=\"mr-auto\">\r\n            <h3 class=\"m-subheader__title m-subheader__title--separator\">\r\n                {{ title }} Driver\r\n            </h3>\r\n            <ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n                <li class=\"m-nav__item m-nav__item--home\">\r\n                    <a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\r\n                        <i class=\"m-nav__link-icon la la-home\"></i>\r\n                    </a>\r\n                </li>\r\n                <li class=\"m-nav__separator\">\r\n                    -\r\n                </li>\r\n                <li class=\"m-nav__item\">\r\n                    <span class=\"m-nav__link-text\">\r\n                        {{ title }} Driver\r\n                    </span>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<div class=\"m-content\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <!--begin::Portlet-->\r\n            <div class=\"m-portlet\">\r\n                <!--begin::Form-->\r\n                <form [formGroup]=\"driverForm\" (ngSubmit)=\"save()\" class=\"m-form m-form--fit m-form--label-align-right m-form--group-seperator-dashed\" id=\"m_form_1\">\r\n                    <div class=\"m-portlet__body\">\r\n                        <input type=\"hidden\" formControlName=\"id\">\r\n                        <div class=\"form-group m-form__group row\">\r\n                            <div class=\"col-lg-6\">\r\n                                <label>\r\n                                    Company Name:\r\n                                </label>\r\n                                <div class=\"m-input-icon m-input-icon--left\">\r\n                                    <select id=\"org\" class=\"hideLabel form-control\" (change)=\"onOrgChange();\" formControlName=\"orgId\">\r\n                                        <option value=\"\">Select Company</option>\r\n                                        <option *ngFor=\"let org of company\" value=\"{{org.id}}\">\r\n                                            {{org.name}}\r\n                                        </option>\r\n                                    </select>\r\n                                </div>\r\n                                <span class=\"m-form__help\">\r\n                                    Please select Company Name\r\n                                </span>\r\n                            </div>\r\n                            <div class=\"col-lg-6\">\r\n                                <label>\r\n                                    Branch Name:\r\n                                </label>\r\n                                <div class=\"m-input-icon m-input-icon--left\">\r\n                                    <select id=\"suborg\" class=\"hideLabel form-control\" (change)=\"onSubOrgChange();\" formControlName=\"subOrgId\">\r\n                                        <option value=\"\">Select Branch</option>\r\n                                        <option *ngFor=\"let sub of branch\" value=\"{{sub.id}}\">\r\n                                            {{sub.name}}\r\n                                        </option>\r\n                                    </select>\r\n                                </div>\r\n                                <span class=\"m-form__help\">\r\n                                    Please select Branch Name\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group m-form__group row\">\r\n                            <div class=\"col-lg-6\">\r\n                                <label>\r\n                                    Driver Code:\r\n                                </label>\r\n                                <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter Driver Code\" formControlName=\"code\">\r\n                                <span class=\"m-form__help\">\r\n                                    Please enter Driver Code\r\n                                </span>\r\n                            </div>\r\n                            <div class=\"col-lg-6\">\r\n                                <label class=\"\">\r\n                                    Driver Name:\r\n                                </label>\r\n                                <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter Driver Name\" formControlName=\"name\">\r\n                                <span class=\"m-form__help\">\r\n                                    Please enter Driver Name\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group m-form__group row\">\r\n                            <div class=\"col-lg-6\">\r\n                                <label>\r\n                                    Date of Birth:\r\n                                </label>\r\n                                <div class=\"input-group date\">\r\n                                    <input type=\"text\" \r\n                                           class=\"form-control m-input\" \r\n                                           readonly \r\n                                           placeholder=\"Select Date of Birth\" \r\n                                           id=\"m_datetimepicker_1\" \r\n                                           formControlName=\"dateOfBirth\"/>\r\n                                    <div class=\"input-group-append\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"la la-calendar-check-o glyphicon-th\"></i>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <span class=\"m-form__help\">\r\n                                    Please Select Date of Birth\r\n                                </span>\r\n                            </div>\r\n                            <div class=\"col-lg-6\">\r\n                                <label class=\"\">\r\n                                    Date of Joining:\r\n                                </label>\r\n                                <div class=\"input-group date\">\r\n                                    <input type=\"text\" class=\"form-control m-input\" readonly placeholder=\"Select Date of Joining\" id=\"m_datetimepicker_2\" formControlName=\"dateOfJoining\" />\r\n                                    <div class=\"input-group-append\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"la la-calendar-check-o glyphicon-th\"></i>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <span class=\"m-form__help\">\r\n                                    Please Select Date of Joining\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group m-form__group row\">\r\n                            <div class=\"col-lg-6\">\r\n                                <label>\r\n                                    Citizenship No.:\r\n                                </label>\r\n                                <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter Citizenship No\" formControlName=\"citizenshipNo\">\r\n                                <span class=\"m-form__help\">\r\n                                    Please enter Citizenship No.\r\n                                </span>\r\n                            </div>\r\n                            <div class=\"col-lg-6\">\r\n                                <label class=\"\">\r\n                                    Issue Date:\r\n                                </label>\r\n                                <div class=\"input-group date\">\r\n                                    <input type=\"text\" class=\"form-control m-input\" readonly placeholder=\"Select Date of Issue\" id=\"m_datetimepicker_3\" formControlName=\"csnIssueDate\" />\r\n                                    <div class=\"input-group-append\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"la la-calendar-check-o glyphicon-th\"></i>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <span class=\"m-form__help\">\r\n                                    Please Select IssueDate\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group m-form__group row\">\r\n                            <div class=\"col-lg-4\">\r\n                                <label>\r\n                                    Driving License No.:\r\n                                </label>\r\n                                <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter Driver License No.\" formControlName=\"licenseNo\">\r\n                                <span class=\"m-form__help\">\r\n                                    Please enter Driving License No.\r\n                                </span>\r\n                            </div>\r\n                            <div class=\"col-lg-4\">\r\n                                <label class=\"\">\r\n                                    Issue Date:\r\n                                </label>\r\n                                <div class=\"input-group date\">\r\n                                    <input type=\"text\" class=\"form-control m-input\" readonly placeholder=\"Select Date of Issue\" id=\"m_datetimepicker_4\" formControlName=\"issueDate\" />\r\n                                    <div class=\"input-group-append\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"la la-calendar-check-o glyphicon-th\"></i>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <span class=\"m-form__help\">\r\n                                    Please Select IssueDate\r\n                                </span>\r\n                            </div>\r\n                            <div class=\"col-lg-4\">\r\n                                <label>\r\n                                    Valid Upto:\r\n                                </label>\r\n                                <div class=\"input-group date\">\r\n                                    <input type=\"text\" class=\"form-control m-input\" readonly placeholder=\"Valid Upto\" id=\"m_datetimepicker_5\" formControlName=\"validUpto\" />\r\n                                    <div class=\"input-group-append\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"la la-calendar-check-o glyphicon-th\"></i>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <span class=\"m-form__help\">\r\n                                    Please Select Valid Upto Date\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group m-form__group row\">\r\n                            <div class=\"col-lg-6\">\r\n                                <label class=\"\">\r\n                                    Unit No.:\r\n                                </label>\r\n                                <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter Unit No.\" formControlName=\"unitNo\">\r\n                                <span class=\"m-form__help\">\r\n                                    Please enter Unit No.\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"m-portlet__foot m-portlet__no-border m-portlet__foot--fit\">\r\n                        <div class=\"m-form__actions m-form__actions--solid\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-6\">\r\n                                    <button type=\"submit\" class=\"btn btn-primary\">\r\n                                        {{title}} Driver\r\n                                    </button>\r\n                                    <button type=\"reset\" class=\"btn btn-secondary\">\r\n                                        Reset\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n                <!--end::Form-->\r\n            </div>\r\n            <!--end::Portlet-->\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/pages/components/driver/adddriver/addDriver.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/theme/pages/components/driver/adddriver/addDriver.component.ts ***!
  \********************************************************************************/
/*! exports provided: AddDriverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDriverComponent", function() { return AddDriverComponent; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../_services/script-loader.service */ "./src/app/_services/script-loader.service.ts");
/* harmony import */ var _services_driverinformation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/driverinformation.service */ "./src/app/theme/pages/services/driverinformation.service.ts");
/* harmony import */ var _services_organisation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/organisation.service */ "./src/app/theme/pages/services/organisation.service.ts");
/* harmony import */ var _models_driverinformation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/driverinformation */ "./src/app/theme/pages/models/driverinformation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddDriverComponent = /** @class */ (function () {
    function AddDriverComponent(script, activeRoute, router, sanitizer, driverService, orgService, fb) {
        this.script = script;
        this.activeRoute = activeRoute;
        this.router = router;
        this.sanitizer = sanitizer;
        this.driverService = driverService;
        this.orgService = orgService;
        this.fb = fb;
        this.title = "Create";
        if (this.activeRoute.snapshot.params["id"]) {
            this.id = this.activeRoute.snapshot.params["id"];
        }
    }
    AddDriverComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.orgService.GetOrganisations().subscribe(function (organistation) {
            _this.company = organistation;
            console.log(_this.company);
        });
        this.orgService.GetSubOrganisations().subscribe(function (suborganistation) {
            _this.branch = suborganistation;
            console.log(_this.branch);
        });
        this.initializeForm();
        if (this.id > 0) {
            this.title = "Edit";
            this.driverService.getById(this.id)
                .subscribe(function (resp) {
                console.log(resp);
                _this.driverV1 = resp;
                _this.driverForm.setValue({
                    id: _this.driverV1.id,
                    orgId: _this.driverV1.orgId,
                    subOrgId: _this.driverV1.subOrgId,
                    code: _this.driverV1.code,
                    name: _this.driverV1.name,
                    dateOfBirth: _this.driverV1.dateOfBirth,
                    dateOfJoining: _this.driverV1.dateOfJoining,
                    citizenshipNo: _this.driverV1.citizenshipNo,
                    csnIssueDate: _this.driverV1.csnIssueDate,
                    licenseNo: _this.driverV1.licenseNo,
                    issueDate: _this.driverV1.issueDate,
                    validUpto: _this.driverV1.validUpto,
                    unitNo: _this.driverV1.unitNo
                });
            });
            this.driver = new _models_driverinformation__WEBPACK_IMPORTED_MODULE_7__["driverinformation"]();
        }
        else {
            this.driver = new _models_driverinformation__WEBPACK_IMPORTED_MODULE_7__["driverinformation"]();
        }
    };
    AddDriverComponent.prototype.ngAfterViewInit = function () {
        this.script.loadScripts('addDriver', ['assets/demo/default/custom/components/forms/validation/form-controls.js']);
        this.script.loadScripts('addDriver', ['assets/demo/default/custom/components/forms/widgets/datepicker.js']);
    };
    AddDriverComponent.prototype.save = function () {
        var _this = this;
        if (this.id > 0) {
            //update
            this.driver.id = this.id;
            this.driver.code = this.driverForm.value.code;
            this.driver.name = this.driverForm.value.name;
            this.driver.dateOfBirth = $("#m_datetimepicker_1").val();
            this.driver.dateOfJoining = $("#m_datetimepicker_2").val();
            this.driver.licenseNo = this.driverForm.value.licenseNo;
            this.driver.issueDate = $("#m_datetimepicker_4").val();
            this.driver.validUpto = $("#m_datetimepicker_5").val();
            this.driver.citizenshipNo = this.driverForm.value.citizenshipNo;
            this.driver.csnIssueDate = $("#m_datetimepicker_3").val();
            this.driver.unitNo = this.driverForm.value.unitNo;
            this.driver.orgId = this.driverForm.value.orgId;
            this.driver.subOrgId = this.driverForm.value.subOrgId;
            this.driver.currentUserId = this.currentUser.id;
            this.driverService.create(this.driver).subscribe(function (response) {
                _this.driverForm.reset();
                _this.router.navigate(['/driver/fetchdriver']);
            });
        }
        else {
            //create
            this.driver.id = this.id;
            this.driver.code = this.driverForm.value.code;
            this.driver.name = this.driverForm.value.name;
            this.driver.dateOfBirth = $("#m_datetimepicker_1").val();
            this.driver.dateOfJoining = $("#m_datetimepicker_2").val();
            this.driver.licenseNo = this.driverForm.value.licenseNo;
            this.driver.issueDate = $("#m_datetimepicker_4").val();
            this.driver.validUpto = $("#m_datetimepicker_5").val();
            this.driver.citizenshipNo = this.driverForm.value.citizenshipNo;
            this.driver.csnIssueDate = $("#m_datetimepicker_3").val();
            this.driver.unitNo = this.driverForm.value.unitNo;
            this.driver.orgId = this.driverForm.value.orgId;
            this.driver.subOrgId = this.driverForm.value.subOrgId;
            this.driver.currentUserId = this.currentUser.id;
            this.driverService.create(this.driver).subscribe(function (response) {
                _this.driverForm.reset();
                _this.router.navigate(['/driver/fetchdriver']);
            });
        }
    };
    AddDriverComponent.prototype.onOrgChange = function () {
        var orgid = $("#org option:selected").val();
        if (orgid != "") {
            console.log("OrgId =>", orgid);
        }
    };
    AddDriverComponent.prototype.onSubOrgChange = function () {
        var suborgid = $("#suborg option:selected").val();
        if (suborgid != "") {
            console.log("SubOrgId =>", suborgid);
        }
    };
    AddDriverComponent.prototype.initializeForm = function () {
        this.driverForm = this.fb.group({
            id: [0],
            orgId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            subOrgId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            dateOfBirth: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            dateOfJoining: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            citizenshipNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            csnIssueDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            licenseNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            issueDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            validUpto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            unitNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    AddDriverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'addDriver',
            template: __webpack_require__(/*! ./addDriver.component.html */ "./src/app/theme/pages/components/driver/adddriver/addDriver.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_4__["ScriptLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["DomSanitizer"],
            _services_driverinformation_service__WEBPACK_IMPORTED_MODULE_5__["DriverInformationService"],
            _services_organisation_service__WEBPACK_IMPORTED_MODULE_6__["OrganisationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AddDriverComponent);
    return AddDriverComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/components/driver/adddriver/addDriver.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/pages/components/driver/adddriver/addDriver.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AddDriverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDriverModule", function() { return AddDriverModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _layouts_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../layouts/layout.module */ "./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var _default_default_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../default/default.component */ "./src/app/theme/pages/default/default.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _addDriver_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addDriver.component */ "./src/app/theme/pages/components/driver/adddriver/addDriver.component.ts");
/* harmony import */ var _services_driverinformation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/driverinformation.service */ "./src/app/theme/pages/services/driverinformation.service.ts");
/* harmony import */ var _services_organisation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/organisation.service */ "./src/app/theme/pages/services/organisation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        "path": "",
        "component": _default_default_component__WEBPACK_IMPORTED_MODULE_4__["DefaultComponent"],
        "children": [
            {
                "path": "",
                "component": _addDriver_component__WEBPACK_IMPORTED_MODULE_7__["AddDriverComponent"]
            }
        ]
    }
];
var AddDriverModule = /** @class */ (function () {
    function AddDriverModule() {
    }
    AddDriverModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _layouts_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ], exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ], declarations: [
                _addDriver_component__WEBPACK_IMPORTED_MODULE_7__["AddDriverComponent"]
            ], providers: [_services_driverinformation_service__WEBPACK_IMPORTED_MODULE_8__["DriverInformationService"], _services_organisation_service__WEBPACK_IMPORTED_MODULE_9__["OrganisationService"]]
        })
    ], AddDriverModule);
    return AddDriverModule;
}());



/***/ }),

/***/ "./src/app/theme/pages/models/driverinformation.ts":
/*!*********************************************************!*\
  !*** ./src/app/theme/pages/models/driverinformation.ts ***!
  \*********************************************************/
/*! exports provided: driverinformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "driverinformation", function() { return driverinformation; });
var driverinformation = /** @class */ (function () {
    function driverinformation() {
    }
    return driverinformation;
}());



/***/ }),

/***/ "./src/app/theme/pages/services/organisation.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/theme/pages/services/organisation.service.ts ***!
  \**************************************************************/
/*! exports provided: OrganisationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationService", function() { return OrganisationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var OrganisationService = /** @class */ (function () {
    function OrganisationService(http, baseUrl) {
        this.http = http;
        this.myAppUrl = "";
        this.myAppUrl = baseUrl;
    }
    OrganisationService.prototype.GetOrganisations = function () {
        return this.http.get(this.myAppUrl + '/api/Organisation/GetOrganisations', this.jwt()).map(function (response) { return response.json(); });
    };
    OrganisationService.prototype.GetSubOrganisations = function () {
        return this.http.get(this.myAppUrl + '/api/Organisation/GetSubOrganisations', this.jwt()).map(function (response) { return response.json(); });
    };
    OrganisationService.prototype.getById = function (id) {
        return this.http.get(this.myAppUrl + '/api/Organisation/Organisation?Id=' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    OrganisationService.prototype.create = function (organisation) {
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: header });
        var saveUrl = this.myAppUrl + "/api/SaveorganisationList";
        return this
            .http
            .post(saveUrl, organisation, options);
        //  return this.http.post(this.config.apiUrl + '', driverinformation, this.jwt());
    };
    OrganisationService.prototype.jwt = function () {
        // create authorization header with jwt token
        var userObj = localStorage.getItem('currentUser');
        var currentUser = JSON.parse(userObj);
        if (currentUser && currentUser.token) {
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        }
    };
    OrganisationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], String])
    ], OrganisationService);
    return OrganisationService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-components-driver-adddriver-addDriver-module.js.map