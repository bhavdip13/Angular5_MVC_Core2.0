(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-components-feature-userfeatureaccess-userfeatureaccess-module"],{

/***/ "./src/app/theme/pages/components/feature/userfeatureaccess/userfeatureaccess.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/theme/pages/components/feature/userfeatureaccess/userfeatureaccess.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n    <div class=\"d-flex align-items-center\">\r\n        <div class=\"mr-auto\">\r\n            <h3 class=\"m-subheader__title m-subheader__title--separator\">\r\n                Users Feature\r\n            </h3>\r\n            <ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n                <li class=\"m-nav__item m-nav__item--home\">\r\n                    <a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\r\n                        <i class=\"m-nav__link-icon la la-home\"></i>\r\n                    </a>\r\n                </li>\r\n                <li class=\"m-nav__separator\">\r\n                    -\r\n                </li>\r\n                <li class=\"m-nav__item\">\r\n                    <span class=\"m-nav__link-text\">\r\n                        Users Feature Mapping\r\n                    </span>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<div class=\"m-content\">\r\n    <div class=\"m-portlet m-portlet--mobile\">\r\n        <div class=\"m-portlet__body\">\r\n            <!--begin: Search Form -->\r\n            <div class=\"m-form m-form--label-align-right m--margin-top-20 m--margin-bottom-30\">\r\n                <div class=\"row align-items-center\">\r\n                    <div class=\"col-xl-8 order-2 order-xl-1\">\r\n                        <div class=\"form-group m-form__group row align-items-center\">\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"m-input-icon m-input-icon--left\">\r\n                                    <select id=\"menuModule\" class=\"hideLabel form-control\" (change)=\"onModuleChange();\">\r\n                                        <option value=\"\">All Module</option>\r\n                                        <option *ngFor=\"let m of moduleList\" value=\"{{m}}\">\r\n                                            {{m}}\r\n                                        </option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"m-input-icon m-input-icon--left\">\r\n                                    <select id=\"userFeature\" class=\"hideLabel form-control\" (change)=\"onUserChange();\">\r\n                                        <option value=\"\">Select User</option>\r\n                                        <option *ngFor=\"let k of userList\" value=\"{{k.id}}\">\r\n                                            {{k.name}}\r\n                                        </option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xl-4 order-1 order-xl-2 m--align-right\">\r\n                        <button class=\"btn btn-outline-primary m-btn m-btn--icon m-btn--air\" type=\"button\" id=\"m_datatable_get\">\r\n                            <span>\r\n                                <i class=\"fa fa-users\"></i>\r\n                                <span>\r\n                                    Save Access\r\n                                </span>\r\n                            </span>\r\n                        </button>\r\n                        <div class=\"m-separator m-separator--dashed d-xl-none\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--end: Search Form -->  \t\t<!--begin: Datatable -->\r\n            <div class=\"m_datatable\" id=\"scrolling_both\"></div>\r\n            <!--end: Datatable -->\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/pages/components/feature/userfeatureaccess/userfeatureaccess.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/theme/pages/components/feature/userfeatureaccess/userfeatureaccess.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: UserFeatureAccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFeatureAccessComponent", function() { return UserFeatureAccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../_services/script-loader.service */ "./src/app/_services/script-loader.service.ts");
/* harmony import */ var _services_userfeatureaccess_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/userfeatureaccess.service */ "./src/app/theme/pages/services/userfeatureaccess.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';



var UserFeatureAccessComponent = /** @class */ (function () {
    function UserFeatureAccessComponent(_script, _featureAccessService, router) {
        this._script = _script;
        this._featureAccessService = _featureAccessService;
        this.router = router;
    }
    UserFeatureAccessComponent.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.currentUserId = this.currentUser.UserId;
        this.getMasterList();
    };
    UserFeatureAccessComponent.prototype.ngAfterViewInit = function () { };
    // Get User and Feature List
    UserFeatureAccessComponent.prototype.getMasterList = function () {
        var _this = this;
        this._featureAccessService.getMasterList().subscribe(function (data) {
            _this.userList = data.userAccessList;
            _this.featureList = data.featureList;
            //let existModule = this.featureList.filter(p => p.moduleName);
            var existModule = _this.featureList.map(function (p) { return p.moduleName; });
            _this.moduleList = Array.from(new Set(existModule));
        });
    };
    // Get UserFeatureList by UserId
    UserFeatureAccessComponent.prototype.getUserFeaturesAccess = function (uid) {
        var _this = this;
        this._featureAccessService.getUserFeaturesById(uid)
            .subscribe(function (data) {
            _this.FeatureAccessList = data;
            _this.bindMenu();
        });
    };
    UserFeatureAccessComponent.prototype.onModuleChange = function () {
        var moduleVal = $("#menuModule option:selected").val();
        if (moduleVal != "") {
            console.log(moduleVal);
        }
    };
    UserFeatureAccessComponent.prototype.onUserChange = function () {
        var userid = $("#userFeature option:selected").val();
        if (userid != "") {
            this.getUserFeaturesAccess(userid);
        }
    };
    UserFeatureAccessComponent.prototype.bindMenu = function () {
        var _this = this;
        //
        var arrList = [];
        this.featureList.forEach(function (item) {
            var fId = item.id;
            var exist = _this.FeatureAccessList.filter(function (f) { return f.featureID == fId; });
            if (exist.length > 0) {
                arrList.push({
                    "featureID": item.id,
                    "moduleName": item.moduleName,
                    "name": item.name,
                    "deny": exist[0].deny,
                    "edit": exist[0].edit,
                    "view": exist[0].view,
                    "delete": exist[0].delete,
                    "print": exist[0].print,
                    "copy": exist[0].copy,
                    "dataflow": exist[0].dataflow
                });
            }
            else {
                arrList.push({
                    "featureID": item.id,
                    "moduleName": item.moduleName,
                    "name": item.name,
                    "deny": 0,
                    "edit": 0,
                    "view": 0,
                    "delete": 0,
                    "print": 0,
                    "copy": 0,
                    "dataflow": 0
                });
            }
        });
        this.FeatureAccessListV1 = arrList;
        console.log("Access List", this.FeatureAccessListV1);
        this.DefaultDatatableDemo();
    };
    UserFeatureAccessComponent.prototype.DefaultDatatableDemo = function () {
        var _this = this;
        var options = {
            data: {
                type: 'local',
                source: this.FeatureAccessListV1,
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
                //{
                //    field: "FeatureID",
                //    title: "",
                //    sortable: false,
                //    responsive: { hidden: 'md' }
                //},
                //{
                //    field: "UserId",
                //    title: "UserId",
                //    sortable: false,
                //    responsive: { hidden: 'md' }
                //},
                {
                    field: "featureID",
                    title: " ",
                    width: 1,
                    template: function (row) {
                        return '<input type="hidden" value="' + row.featureID + '" />';
                    }
                },
                {
                    field: "moduleName",
                    title: "Module Name",
                    sortable: true,
                    width: 120
                },
                {
                    field: "name",
                    title: "Menu Name",
                    width: 120
                },
                {
                    field: "deny",
                    title: "Deny",
                    textAlign: 'center',
                    sortable: false,
                    width: 40,
                    // callback function support for column rendering
                    template: function (row) {
                        if (row.deny == 1) {
                            return '<label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" checked value="1"><span></span></label>';
                        }
                        else {
                            return '<label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" value="0"><span></span></label>';
                        }
                    }
                },
                {
                    field: "edit",
                    title: "Edit",
                    textAlign: 'center',
                    sortable: false,
                    width: 40,
                    template: function (row) {
                        if (row.edit == 1) {
                            return '<label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" checked value="1"><span></span></label>';
                        }
                        else {
                            return '<label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" value="0"><span></span></label>';
                        }
                    }
                },
                {
                    field: "view",
                    title: "View",
                    textAlign: 'center',
                    sortable: false,
                    width: 40,
                    template: function (row) {
                        if (row.view == 1) {
                            return '<label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" checked value="1"><span></span></label>';
                        }
                        else {
                            return '<label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" value="0"><span></span></label>';
                        }
                    }
                },
                {
                    field: "delete",
                    title: "Delete",
                    textAlign: 'center',
                    sortable: false,
                    width: 50,
                    template: function (row) {
                        if (row.delete == 1) {
                            return '<label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" checked value="1"><span></span></label>';
                        }
                        else {
                            return '<label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" value="0"><span></span></label>';
                        }
                    }
                },
                {
                    field: "print",
                    title: "Print",
                    textAlign: 'center',
                    sortable: false,
                    width: 40,
                    template: function (row) {
                        if (row.print == 1) {
                            return '<label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" checked value="1"><span></span></label>';
                        }
                        else {
                            return '<label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" value="0"><span></span></label>';
                        }
                    }
                },
                {
                    field: "copy",
                    title: "Copy",
                    textAlign: 'center',
                    sortable: false,
                    width: 40,
                    template: function (row) {
                        if (row.copy == 1) {
                            return '<label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" checked value="1"><span></span></label>';
                        }
                        else {
                            return '<label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" value="0"><span></span></label>';
                        }
                    }
                },
                {
                    field: "dataflow",
                    title: "Dataflow",
                    textAlign: 'center',
                    sortable: false,
                    width: 70,
                    template: function (row) {
                        if (row.dataflow == 1) {
                            return '<label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" checked value="1"><span></span></label>';
                        }
                        else {
                            return '<label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand"><input type="checkbox" value="0"><span></span></label>';
                        }
                    }
                }
            ]
        };
        $('.m_datatable').mDatatable('destroy');
        var datatable = $('.m_datatable').mDatatable(options);
        $('#m_datatable_get').on('click', function () {
            var userid = $("#userFeature option:selected").val();
            var featureArray = [];
            $('.m_datatable tr').each(function () {
                var tdVal = $(this).find('td');
                if (tdVal.length > 0) {
                    var Deny, Edit, View, Delete, Print, Copy, Dataflow;
                    var featureId = tdVal[0].children[0].children[0].value;
                    if (tdVal[3].children["0"].children["0"].children["0"].checked) {
                        Deny = 1;
                    }
                    else {
                        Deny = 0;
                    }
                    if (tdVal[4].children["0"].children["0"].children["0"].checked) {
                        Edit = 1;
                    }
                    else {
                        Edit = 0;
                    }
                    if (tdVal[5].children["0"].children["0"].children["0"].checked) {
                        View = 1;
                    }
                    else {
                        View = 0;
                    }
                    if (tdVal[6].children["0"].children["0"].children["0"].checked) {
                        Delete = 1;
                    }
                    else {
                        Delete = 0;
                    }
                    if (tdVal[7].children["0"].children["0"].children["0"].checked) {
                        Print = 1;
                    }
                    else {
                        Print = 0;
                    }
                    if (tdVal[8].children["0"].children["0"].children["0"].checked) {
                        Copy = 1;
                    }
                    else {
                        Copy = 0;
                    }
                    if (tdVal[9].children["0"].children["0"].children["0"].checked) {
                        Dataflow = 1;
                    }
                    else {
                        Dataflow = 0;
                    }
                    featureArray.push({
                        "UserId": userid,
                        "FeatureId": featureId,
                        "Deny": Deny,
                        "Edit": Edit,
                        "View": View,
                        "Delete": Delete,
                        "Print": Print,
                        "Copy": Copy,
                        "Dataflow": Dataflow
                    });
                }
            });
            _this.userFeatureMappingList = featureArray;
            console.log(_this.userFeatureMappingList);
            _this.saveUserFeature();
        });
    };
    UserFeatureAccessComponent.prototype.saveUserFeature = function () {
        var _this = this;
        this._featureAccessService.saveUserFeature(this.userFeatureMappingList)
            .subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['/']);
        }, function (error) { return console.log(error); });
    };
    UserFeatureAccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'userfeatureaccess',
            template: __webpack_require__(/*! ./userfeatureaccess.component.html */ "./src/app/theme/pages/components/feature/userfeatureaccess/userfeatureaccess.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_2__["ScriptLoaderService"],
            _services_userfeatureaccess_service__WEBPACK_IMPORTED_MODULE_3__["UserFeatureAccessService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserFeatureAccessComponent);
    return UserFeatureAccessComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/components/feature/userfeatureaccess/userfeatureaccess.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/theme/pages/components/feature/userfeatureaccess/userfeatureaccess.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: UserFeatureAccessModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFeatureAccessModule", function() { return UserFeatureAccessModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _layouts_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../layouts/layout.module */ "./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var _default_default_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../default/default.component */ "./src/app/theme/pages/default/default.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _userfeatureaccess_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userfeatureaccess.component */ "./src/app/theme/pages/components/feature/userfeatureaccess/userfeatureaccess.component.ts");
/* harmony import */ var _services_userfeatureaccess_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/userfeatureaccess.service */ "./src/app/theme/pages/services/userfeatureaccess.service.ts");
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
                "component": _userfeatureaccess_component__WEBPACK_IMPORTED_MODULE_7__["UserFeatureAccessComponent"]
            }
        ]
    }
];
var UserFeatureAccessModule = /** @class */ (function () {
    function UserFeatureAccessModule() {
    }
    UserFeatureAccessModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _layouts_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"]
            ], exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ], declarations: [
                _userfeatureaccess_component__WEBPACK_IMPORTED_MODULE_7__["UserFeatureAccessComponent"]
            ],
            providers: [_services_userfeatureaccess_service__WEBPACK_IMPORTED_MODULE_8__["UserFeatureAccessService"]]
        })
    ], UserFeatureAccessModule);
    return UserFeatureAccessModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-components-feature-userfeatureaccess-userfeatureaccess-module.js.map