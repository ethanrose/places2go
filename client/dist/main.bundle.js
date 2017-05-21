webpackJsonp([1,4],{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)(false);
// imports


// module
exports.push([module.i, ".thumbnail {\r\n\theight: 90px;\r\n\tmargin: 5px auto;\r\n}\r\n.thumbnail-container {\r\n\tposition: absolute;\r\n\ttop: 0; left: 0;\r\n\twidth: 160px;\r\n\theight: 100px;\r\n\tborder-right: 1px solid #999;\r\n\tbackground-color: black;\r\n}\r\n.flex-list-container {\r\n\tposition: relative;\r\n\theight: 101px;\r\n}\r\n.list-group-item-text {\r\n\tposition: absolute;\r\n\ttop: 20px; left: 180px;\r\n\toverflow: hidden;\r\n}\r\n.going-button {\r\n\tposition: absolute;\r\n\ttop: 0; right:0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 135:
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center container\">\n\t<h3>Places2go</h3>\n\t<h5>Most popular places near you!</h5>\n\t<div *ngIf=\"user\"><a href=\"#\" class=\"btn btn-warning\" (click)=\"this.logout()\">Logout</a><br/><br/></div>\n\t<div *ngIf=\"!user\"><a href=\"#\" class=\"btn btn-warning\" (click)=\"this.showLogin='true'\">Login/Signup</a><br/><br/></div>\n\t<div *ngIf=\"showLogin\" class=\"login-form\" style=\"width:300px;margin:0 auto;\">\n\t\t<form #f=\"ngForm\" (ngSubmit)=\"handleSignup(f)\" method=\"post\" action=\"/api/signup\">\n\t\t\t<input type=\"text\" ngModel name=\"username\" placeholder=\"username\" class=\"form-control\"><br/>\n\t\t\t<div id=\"pass-container\"><input type=\"password\" id=\"password\" ngModel name=\"password\" placeholder=\"password\" class=\"form-control\"></div><br/>\n\t\t\t<button type=\"submit\" class=\"btn btn-success\">Submit</button>\n\t\t</form><br/><br/>\n\t</div>\n</div>\n\n<div *ngIf=\"locations\" class=\"container\">\n\t<div class=\"list-group\">\n\t\t<div *ngFor=\"let location of locations; let i = index\">\n\t\t\t  <a href={{location.url}} target=\"_blank\" class=\"list-group-item flex-list-container\">\n\t\t\t  \t<div class=\"thumbnail-container\"><img src={{location.image_url}} class=\"img-responsive thumbnail\"/></div>\n\t\t\t    <div class=\"list-group-item-text\">\n\t\t\t    \t<h5 class=\"list-group-item-heading\">{{location.name}}</h5>\n\t\t\t    \tRating: {{location.rating}}<br/>\n\t\t\t    \tPhone: {{location.phone}}<br/>\n\t\t\t    </div>\n\t\t\t    <a *ngIf=\"user\" href=\"#\" (click)=\"this.handleGoing(location.id, i)\" id={{location.id}} class=\"going-button btn btn-primary\">\n\t\t\t    \t{{location.going}} going <div *ngIf=\"this.user.going.indexOf(location.id) !== -1\" style=\"color:green;\" class='fa fa-check'></div>\n\t\t\t    </a>\n\t\t\t    <a *ngIf=\"!user\" href=\"#\" class=\"going-button btn btn-primary\" disabled=\"disabled\">\n\t\t\t    \t{{location.going}} going\n\t\t\t    </a>\n\t\t\t  </a>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(71);


/***/ }),

/***/ 70:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 70;


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(79);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.locations = [];
        this.user = false;
    }
    AppComponent.prototype.getUserData = function () {
        var _this = this;
        this.http.get('/api/userdata')
            .toPromise()
            .then(function (res) { return _this.user = res.json(); })
            .catch(function (err) { return console.error(err); });
    };
    AppComponent.prototype.getLocationsAuto = function (position) {
        var _this = this;
        return this.http.get('/api/getplaces/' + position.coords.latitude + "/" + position.coords.longitude)
            .toPromise()
            .then(function (res) { _this.locations = res.json(); })
            .catch(function (err) { return console.log(err); });
    };
    AppComponent.prototype.handleSignup = function (f) {
        var _this = this;
        this.http.post("/api/signup", f.value)
            .toPromise()
            .then(function (res) { return _this.handleLogin(f); })
            .catch(function (err) { return console.error(err); });
    };
    AppComponent.prototype.handleLogin = function (f) {
        this.http.post("/api/login", f.value)
            .toPromise()
            .then(function (res) { return window.location.href = '/'; })
            .catch(function (err) { return document.getElementById('pass-container').className += " has-error"; });
    };
    AppComponent.prototype.logout = function () {
        this.http.get('/api/logout')
            .toPromise()
            .then(function (res) { return window.location.href = '/'; })
            .catch(function (err) { return console.error(err); });
    };
    AppComponent.prototype.handleGoing = function (id, i) {
        this.http.get('/api/updateGoing/' + this.locations[i].id)
            .toPromise()
            .then(function (res) { console.log(res.json()); })
            .catch(function (err) { console.log(err); });
        if (this.user.going.indexOf(this.locations[i].id) !== -1) {
            this.locations[i].going--;
            this.user.going.splice(this.user.going.indexOf(id), 1);
        }
        else {
            this.locations[i].going++;
            this.user.going.push(id);
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            _this.getLocationsAuto(position);
        });
        this.getUserData();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(135),
        styles: [__webpack_require__(133)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AppComponent);

var _a;
/*

categories
:
Array(2)
coordinates
:
Object
display_phone
:
"(206) 684-4075"
distance
:
1883.5166575059998
id
:
"kerry-park-seattle"
image_url
:
"https://s3-media3.fl.yelpcdn.com/bphoto/DOejrsx8yu3Ppl7PWxnCqw/o.jpg"
is_closed
:
false
location
:
Object
name
:
"Kerry Park"
phone
:
"+12066844075"
rating
:
4.5
review_count
:
717
transactions
:
Array(0)
url
:
"https://www.yelp.com/biz/kerry-park-seattle?adjust_creative=MhdFl-xPlygTy6L9mnJ_oQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=MhdFl-xPlygTy6L9mnJ_oQ"


*/ 
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[162]);
//# sourceMappingURL=main.bundle.js.map