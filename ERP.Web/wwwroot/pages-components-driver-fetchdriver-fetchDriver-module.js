(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-components-driver-fetchdriver-fetchDriver-module"],{

/***/ "./src/app/theme/pages/components/driver/fetchdriver/fetchDriver.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/theme/pages/components/driver/fetchdriver/fetchDriver.component.ts ***!
  \************************************************************************************/
/*! exports provided: FetchDriverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDriverComponent", function() { return FetchDriverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-toasty */ "./node_modules/ng2-toasty/index.js");
/* harmony import */ var _services_driverinformation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/driverinformation.service */ "./src/app/theme/pages/services/driverinformation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FetchDriverComponent = /** @class */ (function () {
    function FetchDriverComponent(http, _router, toastyService, driverService) {
        this.http = http;
        this._router = _router;
        this.toastyService = toastyService;
        this.driverService = driverService;
        this.getDrivers();
    }
    FetchDriverComponent.prototype.ngOnInit = function () {
    };
    FetchDriverComponent.prototype.getDrivers = function () {
        var _this = this;
        this.driverService.getAll()
            .subscribe(function (data) {
            _this.driverList = data;
            _this.DefaultDatatableDemo(data);
            console.log("DriverList", _this.driverList);
        });
    };
    FetchDriverComponent.prototype.DefaultDatatableDemo = function (data) {
        var _this = this;
        var options = {
            data: {
                type: 'local',
                source: data,
                pageSize: 10
            },
            layout: {
                theme: 'default',
                class: '',
                scroll: true,
                height: 350,
                footer: false
            },
            sortable: true,
            filterable: false,
            pagination: true,
            search: {
                input: $('#generalSearch')
            },
            // toolbar
            toolbar: {
                // toolbar items
                items: {
                    // pagination
                    pagination: {
                        pageSizeSelect: [5, 10, 20, 30, 50, 100 /*, -1*/] // display dropdown to select pagination size. -1 is used for "ALl" option
                    }
                }
            },
            columns: [
                {
                    field: 'UserId',
                    title: '#',
                    width: 40,
                    selector: { class: 'm-checkbox--solid m-checkbox--brand' },
                },
                {
                    field: 'id',
                    title: '',
                    width: 1,
                    display: "none"
                },
                {
                    field: "orgname",
                    title: "Branch Id",
                    width: 150
                },
                {
                    field: "code",
                    title: "Employee Code",
                    width: 150,
                    responsive: { visible: 'lg' }
                },
                {
                    field: "name",
                    title: "Employee Name",
                    width: 150,
                    responsive: { visible: 'lg' }
                },
                {
                    field: "dateOfBirth",
                    title: "Date of Birth",
                    width: 150,
                    type: 'date',
                    format: 'YYYY-MM-DD',
                },
                {
                    field: "licenseNo",
                    title: "License No",
                    width: 150,
                    responsive: { visible: 'lg' }
                },
                {
                    field: "citizenshipNo",
                    title: "Citizenship No",
                    width: 150,
                    responsive: { visible: 'lg' }
                },
                {
                    field: "status",
                    title: "Status",
                    width: 150,
                    responsive: { visible: 'lg' }
                }
            ]
        };
        $('.m_datatable').mDatatable('destroy');
        var datatable = $('.m_datatable').mDatatable(options);
        //get checked record and get value by column name
        $('#m_datatable_edit_get').on('click', function () {
            // select active rows
            datatable.rows('.m-datatable__row--active');
            // check selected nodes
            if (datatable.nodes().length > 0) {
                // get column by field name and get the column nodes
                var value = datatable.columns('id').nodes().text();
                _this.index = value;
                _this._router.navigate(['/driver/adddriver', value]);
                //$('#datatable_value').html(value);
            }
        });
        $('#m_datatable_delete_get').on('click', function () {
            // select active rows
            datatable.rows('.m-datatable__row--active');
            // check selected nodes
            if (datatable.nodes().length > 0) {
                // get column by field name and get the column nodes
                var value = datatable.columns('id').nodes().text();
                _this.index = value;
                _this.OnDeleteById();
                //$('#datatable_value').html(value);
            }
        });
        $('#m_datatable_approve_get').on('click', function () {
            // select active rows
            datatable.rows('.m-datatable__row--active');
            // check selected nodes
            if (datatable.nodes().length > 0) {
                // get column by field name and get the column nodes
                var value = datatable.columns('id').nodes().text();
                _this.index = value;
                _this.OnApproveById();
                //$('#datatable_value').html(value);
            }
        });
        $('#m_datatable_reject_get').on('click', function () {
            // select active rows
            datatable.rows('.m-datatable__row--active');
            // check selected nodes
            if (datatable.nodes().length > 0) {
                // get column by field name and get the column nodes
                var value = datatable.columns('id').nodes().text();
                _this.index = value;
                _this.OnRejectById();
                //$('#datatable_value').html(value);
            }
        });
    };
    FetchDriverComponent.prototype.OnDeleteById = function () {
        var _this = this;
        var userObj = localStorage.getItem('currentUser');
        var currentUser = JSON.parse(userObj);
        this.driverService.delete(this.index, currentUser.id).subscribe(function (response) {
            _this.getDrivers();
        });
    };
    FetchDriverComponent.prototype.OnApproveById = function () {
        var _this = this;
        var userObj = localStorage.getItem('currentUser');
        var currentUser = JSON.parse(userObj);
        this.driverService.approve(this.index, currentUser.id).subscribe(function (response) {
            _this.getDrivers();
        });
    };
    FetchDriverComponent.prototype.OnRejectById = function () {
        var _this = this;
        var userObj = localStorage.getItem('currentUser');
        var currentUser = JSON.parse(userObj);
        this.driverService.reject(this.index, currentUser.id).subscribe(function (response) {
            _this.getDrivers();
        });
    };
    FetchDriverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fetchdriver',
            template: __webpack_require__(/*! ./fetchdriver.component.html */ "./src/app/theme/pages/components/driver/fetchdriver/fetchdriver.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng2_toasty__WEBPACK_IMPORTED_MODULE_3__["ToastyService"],
            _services_driverinformation_service__WEBPACK_IMPORTED_MODULE_4__["DriverInformationService"]])
    ], FetchDriverComponent);
    return FetchDriverComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/components/driver/fetchdriver/fetchDriver.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/pages/components/driver/fetchdriver/fetchDriver.module.ts ***!
  \*********************************************************************************/
/*! exports provided: FetchDriverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDriverModule", function() { return FetchDriverModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _layouts_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../layouts/layout.module */ "./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var _default_default_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../default/default.component */ "./src/app/theme/pages/default/default.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _fetchDriver_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fetchDriver.component */ "./src/app/theme/pages/components/driver/fetchdriver/fetchDriver.component.ts");
/* harmony import */ var _services_driverinformation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/driverinformation.service */ "./src/app/theme/pages/services/driverinformation.service.ts");
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
                "component": _fetchDriver_component__WEBPACK_IMPORTED_MODULE_7__["FetchDriverComponent"]
            }
        ]
    }
];
var FetchDriverModule = /** @class */ (function () {
    function FetchDriverModule() {
    }
    FetchDriverModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _layouts_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ], exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ], declarations: [
                _fetchDriver_component__WEBPACK_IMPORTED_MODULE_7__["FetchDriverComponent"]
            ],
            providers: [_services_driverinformation_service__WEBPACK_IMPORTED_MODULE_8__["DriverInformationService"]]
        })
    ], FetchDriverModule);
    return FetchDriverModule;
}());



/***/ }),

/***/ "./src/app/theme/pages/components/driver/fetchdriver/fetchdriver.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/theme/pages/components/driver/fetchdriver/fetchdriver.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n    <div class=\"d-flex align-items-center\">\r\n        <div class=\"mr-auto\">\r\n            <h3 class=\"m-subheader__title m-subheader__title--separator\">\r\n                Drivers List\r\n            </h3>\r\n            <ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n                <li class=\"m-nav__item m-nav__item--home\">\r\n                    <a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\r\n                        <i class=\"m-nav__link-icon la la-home\"></i>\r\n                    </a>\r\n                </li>\r\n                <li class=\"m-nav__separator\">\r\n                    -\r\n                </li>\r\n                <li class=\"m-nav__item\">\r\n                    <span class=\"m-nav__link-text\">\r\n                        Drivers List\r\n                    </span>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<div class=\"m-content\">\r\n    <div class=\"m-portlet m-portlet--mobile\">\r\n        <div class=\"m-portlet__body\">\r\n            <!--begin: Search Form -->\r\n            <div class=\"m-form m-form--label-align-right m--margin-top-20 m--margin-bottom-30\">\r\n                <div class=\"row align-items-center\">\r\n                    <div class=\"col-xl-4 order-2 order-xl-1\">\r\n                        <div class=\"form-group m-form__group row align-items-center\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"m-input-icon m-input-icon--left\">\r\n                                    <input type=\"text\" class=\"form-control m-input\" placeholder=\"Search...\" id=\"generalSearch\">\r\n                                    <span class=\"m-input-icon__icon m-input-icon__icon--left\">\r\n                                        <span>\r\n                                            <i class=\"la la-search\"></i>\r\n                                        </span>\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xl-8 order-1 order-xl-2 m--align-right\">\r\n                        <a href=\"/driver/adddriver\" class=\"btn btn-outline-primary m-btn m-btn--icon btn-lg m-btn--icon-only m-btn--air\" data-toggle=\"m-tooltip\" title=\"Create Driver\">\r\n                            <i class=\"la la-user-plus\"></i>\r\n                        </a>\r\n                        <div class=\"m-separator m-separator--dashed d-xl-none\"></div>\r\n                        <button class=\"btn btn-outline-success m-btn m-btn--icon btn-lg m-btn--icon-only m-btn--air\" type=\"button\" id=\"m_datatable_edit_get\" data-toggle=\"m-tooltip\" title=\"Edit Driver\">\r\n                            <i class=\"la la-edit\"></i>\r\n                        </button>\r\n                        <div class=\"m-separator m-separator--dashed d-xl-none\"></div>\r\n                        <button class=\"btn btn-outline-danger m-btn m-btn--icon btn-lg m-btn--icon-only m-btn--air\" type=\"button\" id=\"m_datatable_delete_get\" data-toggle=\"m-tooltip\" title=\"Delete Driver\">\r\n                            <i class=\"la la-trash\"></i>\r\n                        </button>\r\n                        <div class=\"m-separator m-separator--dashed d-xl-none\"></div>\r\n                        <button class=\"btn btn-outline-info m-btn m-btn--icon btn-lg m-btn--icon-only m-btn--air\" type=\"button\" id=\"m_datatable_approve_get\" data-toggle=\"m-tooltip\" title=\"Approve Driver\">\r\n                            <i class=\"la la-check-circle\"></i>\r\n                        </button>\r\n                        <div class=\"m-separator m-separator--dashed d-xl-none\"></div>\r\n                        <button class=\"btn btn-outline-danger m-btn m-btn--icon btn-lg m-btn--icon-only m-btn--air\" type=\"button\" id=\"m_datatable_reject_get\" data-toggle=\"m-tooltip\" title=\"Reject Driver\">\r\n                            <i class=\"la la-ban\"></i>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--end: Search Form -->\r\n            <!--begin: Datatable -->\r\n            <div class=\"m_datatable\" id=\"scrolling_both\"></div>\r\n            <!--end: Datatable -->\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ })

}]);
//# sourceMappingURL=pages-components-driver-fetchdriver-fetchDriver-module.js.map