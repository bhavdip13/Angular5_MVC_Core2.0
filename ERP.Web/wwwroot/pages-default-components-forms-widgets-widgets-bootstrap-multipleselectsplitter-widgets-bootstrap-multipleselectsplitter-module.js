(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-default-components-forms-widgets-widgets-bootstrap-multipleselectsplitter-widgets-bootstrap-multipleselectsplitter-module"],{

/***/ "./src/app/theme/pages/default/components/forms/widgets/widgets-bootstrap-multipleselectsplitter/widgets-bootstrap-multipleselectsplitter.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** ./src/app/theme/pages/default/components/forms/widgets/widgets-bootstrap-multipleselectsplitter/widgets-bootstrap-multipleselectsplitter.component.html ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\n<div class=\"m-subheader\" appunwraptag=\"\">\n\t<div class=\"d-flex align-items-center\">\n\t\t<div class=\"mr-auto\">\n\t\t\t<h3 class=\"m-subheader__title m-subheader__title--separator\">\n\t\t\t\tBootstrap Multiple Select Splitter\n\t\t\t</h3>\n\t\t\t<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\n\t\t\t\t<li class=\"m-nav__item m-nav__item--home\">\n\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\n\t\t\t\t\t\t<i class=\"m-nav__link-icon la la-home\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__separator\">\n\t\t\t\t\t-\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\tForms\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__separator\">\n\t\t\t\t\t-\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\tForm Widgets\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__separator\">\n\t\t\t\t\t-\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\tMultiple Select Splitter\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div>\n\t\t\t<div class=\"m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\" aria-expanded=\"true\">\n\t\t\t\t<a href=\"#\" class=\"m-portlet__nav-link btn btn-lg btn-secondary  m-btn m-btn--outline-2x m-btn--air m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle\">\n\t\t\t\t\t<i class=\"la la-plus m--hide\"></i>\n\t\t\t\t\t<i class=\"la la-ellipsis-h\"></i>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"m-dropdown__wrapper\">\n\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\n\t\t\t\t\t<div class=\"m-dropdown__inner\">\n\t\t\t\t\t\t<div class=\"m-dropdown__body\">\n\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\n\t\t\t\t\t\t\t\t<ul class=\"m-nav\">\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m-nav__section--first m--hide\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\n\t\t\t\t\t\t\t\t\t\t\tQuick Actions\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tActivity\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tMessages\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tFAQ\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tSupport\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\"></li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm\">\n\t\t\t\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- END: Subheader -->\n<div class=\"m-content\">\n\t<!--begin::Portlet-->\n\t<div class=\"m-portlet\">\n\t\t<div class=\"m-portlet__head\">\n\t\t\t<div class=\"m-portlet__head-caption\">\n\t\t\t\t<div class=\"m-portlet__head-title\">\n\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\n\t\t\t\t\t\tBootstrap Multiple Select Splitter Examples\n\t\t\t\t\t</h3>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--begin::Form-->\n\t\t<form class=\"m-form m-form--fit m-form--label-align-right\">\n\t\t\t<div class=\"m-portlet__body\">\n\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\tStandard Group Select\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\n\t\t\t\t\t\t<select class=\"form-control\">\n\t\t\t\t\t\t\t<optgroup label=\"Category 1\">\n\t\t\t\t\t\t\t\t<option value=\"1\">\n\t\t\t\t\t\t\t\t\tChoice 1\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"2\">\n\t\t\t\t\t\t\t\t\tChoice 2\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"3\">\n\t\t\t\t\t\t\t\t\tChoice 3\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"4\">\n\t\t\t\t\t\t\t\t\tChoice 4\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t\t<optgroup label=\"Category 2\">\n\t\t\t\t\t\t\t\t<option value=\"5\">\n\t\t\t\t\t\t\t\t\tChoice 5\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"6\">\n\t\t\t\t\t\t\t\t\tChoice 6\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"7\">\n\t\t\t\t\t\t\t\t\tChoice 7\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"8\">\n\t\t\t\t\t\t\t\t\tChoice 8\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t\t<optgroup label=\"Category 3\">\n\t\t\t\t\t\t\t\t<option value=\"5\">\n\t\t\t\t\t\t\t\t\tChoice 9\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"6\">\n\t\t\t\t\t\t\t\t\tChoice 10\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"7\">\n\t\t\t\t\t\t\t\t\tChoice 11\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"8\">\n\t\t\t\t\t\t\t\t\tChoice 12\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\tSelect Splitter 1\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\n\t\t\t\t\t\t<select class=\"form-control\" id=\"m_multipleselectsplitter_1\">\n\t\t\t\t\t\t\t<optgroup label=\"Category 1\">\n\t\t\t\t\t\t\t\t<option value=\"1\" >\n\t\t\t\t\t\t\t\t\tChoice 1\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"2\">\n\t\t\t\t\t\t\t\t\tChoice 2\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"3\">\n\t\t\t\t\t\t\t\t\tChoice 3\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"4\">\n\t\t\t\t\t\t\t\t\tChoice 4\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t\t<optgroup label=\"Category 2\">\n\t\t\t\t\t\t\t\t<option value=\"5\">\n\t\t\t\t\t\t\t\t\tChoice 5\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"6\" selected>\n\t\t\t\t\t\t\t\t\tChoice 6\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"7\">\n\t\t\t\t\t\t\t\t\tChoice 7\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"8\">\n\t\t\t\t\t\t\t\t\tChoice 8\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t\t<optgroup label=\"Category 3\">\n\t\t\t\t\t\t\t\t<option value=\"5\">\n\t\t\t\t\t\t\t\t\tChoice 9\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"6\">\n\t\t\t\t\t\t\t\t\tChoice 10\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"7\">\n\t\t\t\t\t\t\t\t\tChoice 11\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"8\">\n\t\t\t\t\t\t\t\t\tChoice 12\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\tSelect Splitter 2\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\n\t\t\t\t\t\t<select class=\"form-control\" id=\"m_multipleselectsplitter_2\">\n\t\t\t\t\t\t\t<optgroup label=\"Group 1\">\n\t\t\t\t\t\t\t\t<option value=\"1\" selected>\n\t\t\t\t\t\t\t\t\tOption 1\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"2\">\n\t\t\t\t\t\t\t\t\tOption 2\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"3\">\n\t\t\t\t\t\t\t\t\tOption 3\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"4\">\n\t\t\t\t\t\t\t\t\tOption 4\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t\t<optgroup label=\"Group 2\">\n\t\t\t\t\t\t\t\t<option value=\"5\">\n\t\t\t\t\t\t\t\t\tOption 5\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"6\">\n\t\t\t\t\t\t\t\t\tOption 6\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"7\">\n\t\t\t\t\t\t\t\t\tOption 7\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"8\">\n\t\t\t\t\t\t\t\t\tOption 8\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t\t<optgroup label=\"Group 3\">\n\t\t\t\t\t\t\t\t<option value=\"5\">\n\t\t\t\t\t\t\t\t\tOption 9\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"6\">\n\t\t\t\t\t\t\t\t\tOption 10\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"7\">\n\t\t\t\t\t\t\t\t\tOption 11\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"8\">\n\t\t\t\t\t\t\t\t\tOption 12\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t\t<optgroup label=\"Group 4\">\n\t\t\t\t\t\t\t\t<option value=\"5\">\n\t\t\t\t\t\t\t\t\tOption 13\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"6\">\n\t\t\t\t\t\t\t\t\tOption 14\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"7\">\n\t\t\t\t\t\t\t\t\tOption 15\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"8\">\n\t\t\t\t\t\t\t\t\tOption 16\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t\t<optgroup label=\"Group 5\">\n\t\t\t\t\t\t\t\t<option value=\"5\">\n\t\t\t\t\t\t\t\t\tOption 17\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"6\">\n\t\t\t\t\t\t\t\t\tOption 18\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"7\">\n\t\t\t\t\t\t\t\t\tOption 19\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t<option value=\"8\">\n\t\t\t\t\t\t\t\t\tOption 20\n\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"m-portlet__foot m-portlet__foot--fit\">\n\t\t\t\t<div class=\"m-form__actions m-form__actions\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-lg-9 ml-lg-auto\">\n\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-brand\">\n\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-secondary\">\n\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t\t<!--end::Form-->\n\t</div>\n\t<!--end::Portlet-->\n</div>\n"

/***/ }),

/***/ "./src/app/theme/pages/default/components/forms/widgets/widgets-bootstrap-multipleselectsplitter/widgets-bootstrap-multipleselectsplitter.component.ts":
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/theme/pages/default/components/forms/widgets/widgets-bootstrap-multipleselectsplitter/widgets-bootstrap-multipleselectsplitter.component.ts ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: WidgetsBootstrapMultipleselectsplitterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsBootstrapMultipleselectsplitterComponent", function() { return WidgetsBootstrapMultipleselectsplitterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../_services/script-loader.service */ "./src/app/_services/script-loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetsBootstrapMultipleselectsplitterComponent = /** @class */ (function () {
    function WidgetsBootstrapMultipleselectsplitterComponent(_script) {
        this._script = _script;
    }
    WidgetsBootstrapMultipleselectsplitterComponent.prototype.ngOnInit = function () {
    };
    WidgetsBootstrapMultipleselectsplitterComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-widgets-bootstrap-multipleselectsplitter', ['assets/demo/default/custom/components/forms/widgets/bootstrap-multipleselectsplitter.js']);
    };
    WidgetsBootstrapMultipleselectsplitterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-widgets-bootstrap-multipleselectsplitter",
            template: __webpack_require__(/*! ./widgets-bootstrap-multipleselectsplitter.component.html */ "./src/app/theme/pages/default/components/forms/widgets/widgets-bootstrap-multipleselectsplitter/widgets-bootstrap-multipleselectsplitter.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_1__["ScriptLoaderService"]])
    ], WidgetsBootstrapMultipleselectsplitterComponent);
    return WidgetsBootstrapMultipleselectsplitterComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/components/forms/widgets/widgets-bootstrap-multipleselectsplitter/widgets-bootstrap-multipleselectsplitter.module.ts":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/theme/pages/default/components/forms/widgets/widgets-bootstrap-multipleselectsplitter/widgets-bootstrap-multipleselectsplitter.module.ts ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: WidgetsBootstrapMultipleselectsplitterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsBootstrapMultipleselectsplitterModule", function() { return WidgetsBootstrapMultipleselectsplitterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _widgets_bootstrap_multipleselectsplitter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widgets-bootstrap-multipleselectsplitter.component */ "./src/app/theme/pages/default/components/forms/widgets/widgets-bootstrap-multipleselectsplitter/widgets-bootstrap-multipleselectsplitter.component.ts");
/* harmony import */ var _layouts_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../layouts/layout.module */ "./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../default.component */ "./src/app/theme/pages/default/default.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        "path": "",
        "component": _default_component__WEBPACK_IMPORTED_MODULE_5__["DefaultComponent"],
        "children": [
            {
                "path": "",
                "component": _widgets_bootstrap_multipleselectsplitter_component__WEBPACK_IMPORTED_MODULE_3__["WidgetsBootstrapMultipleselectsplitterComponent"]
            }
        ]
    }
];
var WidgetsBootstrapMultipleselectsplitterModule = /** @class */ (function () {
    function WidgetsBootstrapMultipleselectsplitterModule() {
    }
    WidgetsBootstrapMultipleselectsplitterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _layouts_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"]
            ], exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ], declarations: [
                _widgets_bootstrap_multipleselectsplitter_component__WEBPACK_IMPORTED_MODULE_3__["WidgetsBootstrapMultipleselectsplitterComponent"]
            ]
        })
    ], WidgetsBootstrapMultipleselectsplitterModule);
    return WidgetsBootstrapMultipleselectsplitterModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-default-components-forms-widgets-widgets-bootstrap-multipleselectsplitter-widgets-bootstrap-multipleselectsplitter-module.js.map