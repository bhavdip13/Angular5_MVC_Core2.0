(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/rxjs/_esm5/add/observable/throw.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/add/observable/throw.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var _observable_throw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../observable/throw */ "./node_modules/rxjs/_esm5/observable/throw.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_throw PURE_IMPORTS_END */


_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"].throw = _observable_throw__WEBPACK_IMPORTED_MODULE_1__["_throw"];
//# sourceMappingURL=throw.js.map 


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/catch.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/_esm5/add/operator/catch.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var _operator_catch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/catch */ "./node_modules/rxjs/_esm5/operator/catch.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_catch PURE_IMPORTS_END */


_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.catch = _operator_catch__WEBPACK_IMPORTED_MODULE_1__["_catch"];
_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype._catch = _operator_catch__WEBPACK_IMPORTED_MODULE_1__["_catch"];
//# sourceMappingURL=catch.js.map 


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/ErrorObservable.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/observable/ErrorObservable.js ***!
  \***************************************************************/
/*! exports provided: ErrorObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorObservable", function() { return ErrorObservable; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/** PURE_IMPORTS_START .._Observable PURE_IMPORTS_END */
var __extends = (undefined && undefined.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ErrorObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(ErrorObservable, _super);
    function ErrorObservable(error, scheduler) {
        _super.call(this);
        this.error = error;
        this.scheduler = scheduler;
    }
    /**
     * Creates an Observable that emits no items to the Observer and immediately
     * emits an error notification.
     *
     * <span class="informal">Just emits 'error', and nothing else.
     * </span>
     *
     * <img src="./img/throw.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that only
     * emits the error notification. It can be used for composing with other
     * Observables, such as in a {@link mergeMap}.
     *
     * @example <caption>Emit the number 7, then emit an error.</caption>
     * var result = Rx.Observable.throw(new Error('oops!')).startWith(7);
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     * @example <caption>Map and flatten numbers to the sequence 'a', 'b', 'c', but throw an error for 13</caption>
     * var interval = Rx.Observable.interval(1000);
     * var result = interval.mergeMap(x =>
     *   x === 13 ?
     *     Rx.Observable.throw('Thirteens are bad') :
     *     Rx.Observable.of('a', 'b', 'c')
     * );
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     * @see {@link create}
     * @see {@link empty}
     * @see {@link never}
     * @see {@link of}
     *
     * @param {any} error The particular Error to pass to the error notification.
     * @param {Scheduler} [scheduler] A {@link IScheduler} to use for scheduling
     * the emission of the error notification.
     * @return {Observable} An error Observable: emits only the error notification
     * using the given error argument.
     * @static true
     * @name throw
     * @owner Observable
     */
    ErrorObservable.create = function (error, scheduler) {
        return new ErrorObservable(error, scheduler);
    };
    ErrorObservable.dispatch = function (arg) {
        var error = arg.error, subscriber = arg.subscriber;
        subscriber.error(error);
    };
    ErrorObservable.prototype._subscribe = function (subscriber) {
        var error = this.error;
        var scheduler = this.scheduler;
        subscriber.syncErrorThrowable = true;
        if (scheduler) {
            return scheduler.schedule(ErrorObservable.dispatch, 0, {
                error: error, subscriber: subscriber
            });
        }
        else {
            subscriber.error(error);
        }
    };
    return ErrorObservable;
}(_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]));
//# sourceMappingURL=ErrorObservable.js.map 


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/throw.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/_esm5/observable/throw.js ***!
  \*****************************************************/
/*! exports provided: _throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_throw", function() { return _throw; });
/* harmony import */ var _ErrorObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorObservable */ "./node_modules/rxjs/_esm5/observable/ErrorObservable.js");
/** PURE_IMPORTS_START ._ErrorObservable PURE_IMPORTS_END */

var _throw = _ErrorObservable__WEBPACK_IMPORTED_MODULE_0__["ErrorObservable"].create;
//# sourceMappingURL=throw.js.map 


/***/ }),

/***/ "./src/app/theme/pages/services/driverinformation.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/pages/services/driverinformation.service.ts ***!
  \*******************************************************************/
/*! exports provided: DriverInformationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverInformationService", function() { return DriverInformationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs/_esm5/add/observable/throw.js");
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





var DriverInformationService = /** @class */ (function () {
    function DriverInformationService(http, baseUrl) {
        this.http = http;
        this.myAppUrl = "";
        this.myAppUrl = baseUrl;
    }
    DriverInformationService.prototype.getAll = function () {
        return this.http.get(this.myAppUrl + 'api/GetDriverInformations', this.jwt()).map(function (response) { return response.json(); });
    };
    DriverInformationService.prototype.getById = function (id) {
        return this.http.get(this.myAppUrl + 'api/GetDriverInformation?Id=' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    DriverInformationService.prototype.create = function (driver) {
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: header });
        var saveUrl = this.myAppUrl + "/api/SaveDriverInformation";
        return this
            .http
            .post(saveUrl, driver, options);
        //  return this.http.post(this.config.apiUrl + '', driverinformation, this.jwt());
    };
    DriverInformationService.prototype.update = function (driverinformation) {
        return this.http.put(this.myAppUrl + 'api/UpdateDriverInformation/' + driverinformation.id, driverinformation, this.jwt());
    };
    DriverInformationService.prototype.delete = function (id, currentUserId) {
        return this.http.post(this.myAppUrl + 'api/Delete?Id=' + id + '&currentUserId=' + currentUserId, this.jwt());
    };
    DriverInformationService.prototype.approve = function (id, currentUserId) {
        return this.http.post(this.myAppUrl + 'api/Approve?Id=' + id + '&currentUserId=' + currentUserId, this.jwt());
    };
    DriverInformationService.prototype.reject = function (id, currentUserId) {
        return this.http.post(this.myAppUrl + 'api/Reject?Id=' + id + '&currentUserId=' + currentUserId, this.jwt());
    };
    // private helper methods
    DriverInformationService.prototype.jwt = function () {
        // create authorization header with jwt token
        var userObj = localStorage.getItem('currentUser');
        var currentUser = JSON.parse(userObj);
        if (currentUser && currentUser.token) {
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        }
    };
    DriverInformationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], String])
    ], DriverInformationService);
    return DriverInformationService;
}());



/***/ }),

/***/ "./src/app/theme/pages/services/user.service.ts":
/*!******************************************************!*\
  !*** ./src/app/theme/pages/services/user.service.ts ***!
  \******************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs/_esm5/add/observable/throw.js");
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






var UserService = /** @class */ (function () {
    function UserService(_http, baseUrl) {
        this._http = _http;
        this.myAppUrl = "";
        this.myAppUrl = baseUrl;
    }
    UserService.prototype.getUsers = function () {
        return this._http.get(this.myAppUrl + 'api/Users/GetUsers', this.jwt()).map(function (response) { return response.json(); });
    };
    //getUsers() {
    //   
    //    return this._http.get(this.myAppUrl + 'api/Users/GetUsers')
    //        .map((response: Response) => response.json())
    //        .catch(this.errorHandler);
    //}
    UserService.prototype.getUserById = function (id) {
        return this._http.get(this.myAppUrl + "api/Users/Details?id=" + id, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.saveUser = function (user) {
        debugger;
        return this._http.post(this.myAppUrl + '/api/Users/SaveUser', user, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.create = function (user) {
        return this._http.post(this.myAppUrl + '/api/users', user, this.jwt()).map(function (response) { return response.json(); });
    };
    //update(user: User) {
    //    return this._http.put(this.myAppUrl + '/api/Users/Update' + user.id, driverinformation, this.jwt());
    //}
    UserService.prototype.deleteUser = function (id) {
        return this._http.delete(this.myAppUrl + "api/Users/" + id)
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    UserService.prototype.errorHandler = function (error) {
        console.log(error);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
    };
    // private helper methods
    UserService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        }
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], String])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/theme/pages/services/userfeatureaccess.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/pages/services/userfeatureaccess.service.ts ***!
  \*******************************************************************/
/*! exports provided: UserFeatureAccessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFeatureAccessService", function() { return UserFeatureAccessService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs/_esm5/add/observable/throw.js");
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






var UserFeatureAccessService = /** @class */ (function () {
    function UserFeatureAccessService(_http, baseUrl) {
        this._http = _http;
        this.myAppUrl = "";
        this.myAppUrl = baseUrl;
    }
    UserFeatureAccessService.prototype.getUserFeaturesById = function (id) {
        return this._http.get(this.myAppUrl + 'api/UserFeatureAccess/GetUserFeaturesAccessList?id=' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    UserFeatureAccessService.prototype.getMasterList = function () {
        return this._http.get(this.myAppUrl + 'api/UserFeatureAccess/GetMasterList', this.jwt()).map(function (response) { return response.json(); });
    };
    UserFeatureAccessService.prototype.getDefaultData = function () {
        return this._http.get('https://keenthemes.com/metronic/preview/inc/api/datatables/demos/default.php').map(function (response) { return response.json(); });
    };
    UserFeatureAccessService.prototype.saveUserFeature = function (userFeatureMappingModel) {
        return this._http.post(this.myAppUrl + 'api/UserFeatureAccess/SaveUserFeature', userFeatureMappingModel, this.jwt()).map(function (response) { return response.json(); });
    };
    //getUserList() {
    //    return this._http.get(this.myAppUrl + 'api/UserFeatureAccess/GetUserFeaturesAccessList', this.jwt()).map((response: Response) => response.json());
    //}
    UserFeatureAccessService.prototype.errorHandler = function (error) {
        console.log(error);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
    };
    // private helper methods
    UserFeatureAccessService.prototype.jwt = function () {
        // create authorization header with jwt token
        var userObj = localStorage.getItem('currentUser');
        var currentUser = JSON.parse(userObj);
        if (currentUser && currentUser.token) {
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        }
    };
    UserFeatureAccessService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], String])
    ], UserFeatureAccessService);
    return UserFeatureAccessService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map