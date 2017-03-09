webpackJsonp([1,4],{

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vs_socket__ = __webpack_require__(406);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VSApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VSApiService = (function () {
    function VSApiService(http) {
        this.http = http;
    }
    Object.defineProperty(VSApiService.prototype, "connection", {
        get: function () {
            return this._connection;
        },
        enumerable: true,
        configurable: true
    });
    VSApiService.prototype.connect = function (name) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2__vs_socket__["a" /* VSSocketConnection */]
            .init('ws://localhost:5000/connection', name)
            .do(function (client) {
            _this._connection = client;
        });
    };
    VSApiService.ApiPath = 'api/v1.0/';
    VSApiService.SocketPath = 'connection/';
    VSApiService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], VSApiService);
    return VSApiService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Giedre/projektas/vs-client/src/vs-api.service.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__connect_form_component__ = __webpack_require__(570);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__connect_form_component__["a"]; });

//# sourceMappingURL=C:/Users/Giedre/projektas/vs-client/src/index.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connect_form__ = __webpack_require__(403);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConnectModule = (function () {
    function ConnectModule() {
    }
    ConnectModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormsModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__connect_form__["a" /* ConnectFormComponent */],
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ConnectModule);
    return ConnectModule;
}());
//# sourceMappingURL=C:/Users/Giedre/projektas/vs-client/src/connect.module.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_vs_socket__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_vs_api_service__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewPageComponent = (function () {
    function ViewPageComponent(_router, _api) {
        this._router = _router;
        this._api = _api;
        this.isPlaying = false;
    }
    ViewPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this._api.connection) {
            this._router.navigate(['connect']);
            return;
        }
        this._api.connection.message
            .filter(function (_) { return _.data.Action === __WEBPACK_IMPORTED_MODULE_1__services_vs_socket__["b" /* Actions */].Play; })
            .subscribe(function (_) {
            _this.playVideo();
        });
        this._api.connection.message
            .filter(function (_) { return _.data.Action === __WEBPACK_IMPORTED_MODULE_1__services_vs_socket__["b" /* Actions */].Pause; })
            .subscribe(function (_) {
            _this.pauseVideo();
        });
        this._api.connection.message
            .filter(function (_) { return _.data.Action === __WEBPACK_IMPORTED_MODULE_1__services_vs_socket__["b" /* Actions */].Rewind; })
            .subscribe(function (_) {
            _this.rewindVideo();
        });
    };
    ViewPageComponent.prototype.play = function () {
        this._api.connection.send(__WEBPACK_IMPORTED_MODULE_1__services_vs_socket__["b" /* Actions */].Play);
    };
    ViewPageComponent.prototype.pause = function () {
        this._api.connection.send(__WEBPACK_IMPORTED_MODULE_1__services_vs_socket__["b" /* Actions */].Pause);
    };
    ViewPageComponent.prototype.rewind = function () {
        this._api.connection.send(__WEBPACK_IMPORTED_MODULE_1__services_vs_socket__["b" /* Actions */].Rewind);
    };
    ViewPageComponent.prototype.playVideo = function () {
        this.video.nativeElement.play();
        this.isPlaying = true;
    };
    ViewPageComponent.prototype.pauseVideo = function () {
        this.video.nativeElement.pause();
        this.isPlaying = false;
    };
    ViewPageComponent.prototype.rewindVideo = function () {
        this.video.nativeElement.currentTime = 0;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Q" /* ViewChild */])('video'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_core__["C" /* ElementRef */]) === 'function' && _a) || Object)
    ], ViewPageComponent.prototype, "video", void 0);
    ViewPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["R" /* Component */])({
            selector: 'app-view-page',
            template: __webpack_require__(635),
            styles: [__webpack_require__(631)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_vs_api_service__["a" /* VSApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_vs_api_service__["a" /* VSApiService */]) === 'function' && _c) || Object])
    ], ViewPageComponent);
    return ViewPageComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Giedre/projektas/vs-client/src/view-page.component.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vs_socket__ = __webpack_require__(576);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__vs_socket__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vs_socket_message__ = __webpack_require__(407);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__vs_socket_message__["a"]; });


//# sourceMappingURL=C:/Users/Giedre/projektas/vs-client/src/index.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Actions; });
var Actions = (function () {
    function Actions() {
    }
    Actions.Connected = 'connected';
    Actions.Join = 'joined';
    Actions.Left = 'left';
    Actions.Play = 'play';
    Actions.Pause = 'pause';
    Actions.Rewind = 'rewind';
    return Actions;
}());
//# sourceMappingURL=C:/Users/Giedre/projektas/vs-client/src/vs-socket-message.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    host: 'localhost:5000/'
};
//# sourceMappingURL=C:/Users/Giedre/projektas/vs-client/src/environment.js.map

/***/ }),

/***/ 451:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 451;


/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(408);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Giedre/projektas/vs-client/src/main.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_vs_api_service__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConnectFormComponent = (function () {
    function ConnectFormComponent(_router, _api) {
        this._router = _router;
        this._api = _api;
        this.username = '';
    }
    ConnectFormComponent.prototype.connect = function () {
        var _this = this;
        // TODO loding animation here
        console.log('conneting...');
        this._api.connect(this.username).subscribe(function (_) {
            console.log("connetced as " + _.name + " with id: " + _.id + ".");
            _this._router.navigate(['view']);
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], ConnectFormComponent.prototype, "username", void 0);
    ConnectFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["R" /* Component */])({
            selector: 'connect-form',
            template: __webpack_require__(634),
            styles: [__webpack_require__(630)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_vs_api_service__["a" /* VSApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__services_vs_api_service__["a" /* VSApiService */]) === 'function' && _b) || Object])
    ], ConnectFormComponent);
    return ConnectFormComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Giedre/projektas/vs-client/src/connect-form.component.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__connect_module__ = __webpack_require__(404);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__connect_form__ = __webpack_require__(403);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__connect_form__["a"]; });


//# sourceMappingURL=C:/Users/Giedre/projektas/vs-client/src/index.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_page_view_page_component__ = __webpack_require__(405);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewModule = (function () {
    function ViewModule() {
    }
    ViewModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__view_page_view_page_component__["a" /* ViewPageComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], ViewModule);
    return ViewModule;
}());
//# sourceMappingURL=C:/Users/Giedre/projektas/vs-client/src/view.module.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
    function AppComponent() {
        this.data = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].host;
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(636),
            styles: [__webpack_require__(632)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Giedre/projektas/vs-client/src/app.component.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_vs_api_service__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_view_module__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routes__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connect_connect_module__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(573);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__connect_connect_module__["a" /* ConnectModule */],
                __WEBPACK_IMPORTED_MODULE_1__view_view_module__["a" /* ViewModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_routes__["a" /* AppRoutes */])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_0__services_vs_api_service__["a" /* VSApiService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Giedre/projektas/vs-client/src/app.module.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view_view_page_view_page_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__connect__ = __webpack_require__(571);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });


var AppRoutes = [
    { path: 'connect', component: __WEBPACK_IMPORTED_MODULE_1__connect__["a" /* ConnectFormComponent */] },
    { path: 'view', component: __WEBPACK_IMPORTED_MODULE_0__view_view_page_view_page_component__["a" /* ViewPageComponent */] },
    {
        path: '',
        redirectTo: '/connect',
        pathMatch: 'full'
    },
    { path: '**', redirectTo: '/' }
];
//# sourceMappingURL=C:/Users/Giedre/projektas/vs-client/src/app.routes.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vs_socket_message__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VSSocketConnection; });



var VSSocketConnection = (function () {
    function VSSocketConnection(url, name) {
        this.open = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["G" /* EventEmitter */]();
        this.client = new WebSocket(url + "?name=" + name);
        this.name = name;
        this.setup();
    }
    Object.defineProperty(VSSocketConnection.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    VSSocketConnection.init = function (url, name) {
        var client = new VSSocketConnection(url, name);
        return client.open;
    };
    VSSocketConnection.prototype.send = function (action, params) {
        this.client.send(JSON.stringify({
            SenderId: this.id,
            SenderName: this.name,
            Action: action,
            Params: params
        }));
    };
    VSSocketConnection.prototype.setup = function () {
        var _this = this;
        this.message = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].fromEvent(this.client, 'message')
            .map(function (event) { return {
            client: _this,
            data: JSON.parse(event.data)
        }; });
        this.message.filter(function (_) { return _.data.Action === __WEBPACK_IMPORTED_MODULE_0__vs_socket_message__["a" /* Actions */].Connected; })
            .take(1)
            .subscribe(function (_) {
            _.client._id = _.data.SenderId;
            _this.open.emit(_.client);
        });
        this.error = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].fromEvent(this.client, 'error')
            .map(function (event) { return { client: _this, data: event }; });
    };
    return VSSocketConnection;
}());
//# sourceMappingURL=C:/Users/Giedre/projektas/vs-client/src/vs-socket.js.map

/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(109)();
// imports


// module
exports.push([module.i, ".container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.jumbotron {\n  width: 60rem;\n  padding: 4rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(109)();
// imports


// module
exports.push([module.i, ".player {\n  width: 100%; }\n\n.player-controlls {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(109)();
// imports


// module
exports.push([module.i, ".container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 10rem;\n  width: 100vw;\n  height: 100vh;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center; }\n  .container .content {\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 634:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"jumbotron\">\r\n    <h2>Join Group Watch</h2>\r\n    <form #form=\"ngForm\" (submit)=\"connect()\">\r\n      <div class=\"form-group\">\r\n        <label for=\"username\">Username</label>\r\n        <input [(ngModel)]=\"username\"\r\n          type=\"text\" \r\n          class=\"form-control\" \r\n          id=\"username\"\r\n          name=\"username\" \r\n          placeholder=\"Mr.Awesome\"\r\n          required\r\n        >\r\n      </div>\r\n      <button (click)=\"connect()\"\r\n        [disabled]=\"!form.valid\"\r\n        type=\"button\" \r\n        class=\"btn btn-primary pull-right\"\r\n      >\r\n        Connect\r\n      </button>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 635:
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\r\n    <div id=\"container\">\r\n        <video #video \r\n            class=\"player\" \r\n            src=\"http://2.bp.blogspot.com/jUiEVhBt0Vpe6tQd_OW1uJBfF2scSy7BbCCifQc4RaKtKVqw3O5X_485E1il3NCIIo_X5468orIbI5LYZ3NkecGS4pUYmIhd=m22\" >\r\n        </video>\r\n        <div class=\"player-controlls\">\r\n            <button *ngIf=\"!isPlaying\" class=\"btn btn-primary\" (click)=\"play();\"><span class=\"fa fa-play-circle\"></span></button>\r\n            <button *ngIf=\"isPlaying\" class=\"btn btn-primary\" (click)=\"pause();\"><span class=\"fa fa-pause-circle\"></span></button>\r\n            <button class=\"btn btn-primary\" (click)=\"rewind();\">Back to beginning</button> \r\n            <!--<div class=\"progress\">\r\n                <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n            </div>          -->\r\n            <p class=\"ngb-progressbar\" type=\"success\" value=\"25\"></p>\r\n            \r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 636:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"content\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 901:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(452);


/***/ })

},[901]);
//# sourceMappingURL=main.bundle.js.map