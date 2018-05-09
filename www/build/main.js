webpackJsonp([3],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_conversa_model__ = __webpack_require__(251);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConversaPage = /** @class */ (function () {
    function ConversaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.index_end_conteudo = 0;
        this.message = "";
        this.conversa = new __WEBPACK_IMPORTED_MODULE_2__model_conversa_model__["a" /* ConversaModel */]();
        this.messeges = new Array();
    }
    ConversaPage.prototype.ngOnInit = function () {
        var _this = this;
        this.fluxo = this.navParams.get("conversa");
        this.fluxo.once("value", function (data) {
            _this.conversa = data.val();
            //console.log(this.conversa)
            if (_this.conversa.conteudo !== undefined) {
                _this.index_end_conteudo = _this.conversa.conteudo.length;
                _this.messeges = _this.conversa.conteudo;
            }
        });
        this.fluxo.on("child_added", function (data) {
            console.log(data.val());
            _this.messeges = new Array();
            _this.messeges.push(data.val()[0]);
        });
        this.fluxo.on("child_changed", function (data) {
            _this.messeges = data.val();
        });
        this.fluxo.on("child_removed", function (data) {
            _this.messeges = undefined;
        });
    };
    ConversaPage.prototype.ngOnDestroy = function () {
    };
    ConversaPage.prototype.scrollToBottom = function (delay) {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom(delay);
        }, 1000);
    };
    ConversaPage.prototype.sendMessage = function () {
        this.index_end_conteudo++;
        if (this.conversa.conteudo === undefined) {
            this.conversa.conteudo = new Array();
        }
        this.conversa.conteudo.push({ autor: 'a', text: this.message });
        this.fluxo.update(this.conversa);
        this.message = "";
        //this.scrollToBottom(100);
    };
    ConversaPage.prototype.removeMessage = function (ind) {
        this.index_end_conteudo--;
        this.conversa.conteudo.splice(ind, 1);
        this.fluxo.update(this.conversa);
    };
    ConversaPage.prototype.recordVoice = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], ConversaPage.prototype, "content", void 0);
    ConversaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-conversa',template:/*ion-inline-start:"/home/wellida/Documentos/talk-with-firebase/src/pages/conversa/conversa.html"*/'<ion-header>\n\n  <ion-navbar [color]="\'primary\'">\n    <ion-title>Usuario</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card *ngFor="let m of messeges; index" [ngClass]="m.autor===\'a\'? \'msg-a\': \'msg-b\'">\n    <ion-card-content (click)="removeMessage(index)">{{m.text}}</ion-card-content>\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-input [(ngModel)]="message" placeholder="Mensagem"></ion-input>\n    <ion-buttons right>\n      <button (click)="recordVoice()" ion-button><ion-icon name="mic"></ion-icon></button>\n      <button (click)="sendMessage()" ion-button><ion-icon name="send"></ion-icon></button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/wellida/Documentos/talk-with-firebase/src/pages/conversa/conversa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ConversaPage);
    return ConversaPage;
}());

//# sourceMappingURL=conversa.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContatosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ContatosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContatosPage = /** @class */ (function () {
    function ContatosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContatosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContatosPage');
    };
    ContatosPage.prototype.getItems = function ($event) {
    };
    ContatosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contatos',template:/*ion-inline-start:"/home/wellida/Documentos/talk-with-firebase/src/pages/contatos/contatos.html"*/'\n<ion-header>\n\n  <ion-navbar [color]="\'primary\'">\n    <ion-title>Contatos</ion-title>\n  </ion-navbar>\n  \n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/wellida/Documentos/talk-with-firebase/src/pages/contatos/contatos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ContatosPage);
    return ContatosPage;
}());

//# sourceMappingURL=contatos.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.login = function (user, password) {
        var _this = this;
        //console.log(user+" "+password)
        Object(__WEBPACK_IMPORTED_MODULE_2_firebase__["auth"])().signInWithEmailAndPassword(user, password).then(function (data) {
            console.log(data['user']);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
        }).catch(function (err) {
            console.error(err);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/wellida/Documentos/talk-with-firebase/src/pages/login/login.html"*/'\n\n<ion-content padding>\n  <div class="login">\n    <ion-list>\n      \n      <div style="text-align: center">\n        <img [ngClass]="\'logo\'" src="https://st2.depositphotos.com/5142301/7567/v/950/depositphotos_75677235-stock-illustration-lion-head-logo.jpg">\n      </div>\n      \n      <ion-item>\n        <ion-label floating>Usuário</ion-label>\n        <ion-input type="email" #user></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Senha</ion-label>\n        <ion-input type="password" #password></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <button ion-button full (click)="login(user.value,password.value)">Entrar</button>\n    <button ion-button full clear>Cadastrar</button>\n    <button ion-button full clear>Esqueceu a senha?</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/wellida/Documentos/talk-with-firebase/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/contatos/contatos.module": [
		292,
		2
	],
	"../pages/conversa/conversa.module": [
		291,
		1
	],
	"../pages/login/login.module": [
		293,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_usuario_model__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_conversa_conversa__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_contatos_contatos__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.db = Object(__WEBPACK_IMPORTED_MODULE_5_firebase__["database"])().ref("/usuarios/V4T3a5M0Speck6esVrDY9SkJLHL2");
        this.usuario = new __WEBPACK_IMPORTED_MODULE_2__model_usuario_model__["a" /* UsuarioModel */]();
        /*
        var db = database().ref("/usuarios")
        db.on("value", (snapshot)=>{
          console.log(snapshot.val());
        })
        */
        this.db.on('value', function (data) {
            _this.usuario = data.val();
        });
    }
    HomePage.prototype.openConversa = function (conversa_id) {
        //console.log(conversa_id)
        var conversa = Object(__WEBPACK_IMPORTED_MODULE_5_firebase__["database"])().ref("/conversas/" + conversa_id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_conversa_conversa__["a" /* ConversaPage */], { conversa: conversa });
    };
    HomePage.prototype.listContatos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_contatos_contatos__["a" /* ContatosPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/wellida/Documentos/talk-with-firebase/src/pages/home/home.html"*/'<ion-header >\n  <ion-navbar [color]="\'primary\'">\n    <ion-title>\n      <ion-icon name=""></ion-icon> Talk\n    </ion-title>\n    <ion-buttons right>\n      <button ion-button (click)="listContatos()"><ion-icon name="contact"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      {{usuario.nome}}\n    </ion-item>\n\n    <ion-item (click)="openConversa(user.conversa_id)" *ngFor="let user of usuario.conversas">\n      <ion-avatar item-start>\n        <img src="">\n      </ion-avatar>\n      <h2>{{user.destinatario_id}}</h2>\n      <button ion-button clear item-end>5</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/wellida/Documentos/talk-with-firebase/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_conversa_conversa__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contatos_contatos__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_database_database__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_conversa_conversa__["a" /* ConversaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contatos_contatos__["a" /* ContatosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/conversa/conversa.module#ConversaPageModule', name: 'ConversaPage', segment: 'conversa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contatos/contatos.module#ContatosPageModule', name: 'ContatosPage', segment: 'contatos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_conversa_conversa__["a" /* ConversaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contatos_contatos__["a" /* ContatosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_database_database__["a" /* DatabaseProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversaModel; });
var Conteudo = /** @class */ (function () {
    function Conteudo() {
    }
    return Conteudo;
}());
var ConversaModel = /** @class */ (function () {
    function ConversaModel() {
        this.conteudo = new Array();
    }
    return ConversaModel;
}());

//# sourceMappingURL=conversa.model.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioModel; });
var UsuarioModel = /** @class */ (function () {
    function UsuarioModel() {
    }
    return UsuarioModel;
}());

//# sourceMappingURL=usuario.model.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var config = {
    apiKey: "AIzaSyC6lYQ8egwo2Mb4thFBXwa9aKPN_6Cl8dU",
    authDomain: "social-network-9e613.firebaseapp.com",
    databaseURL: "https://social-network-9e613.firebaseio.com",
    projectId: "social-network-9e613",
    storageBucket: "social-network-9e613.appspot.com",
    messagingSenderId: "193226913521"
};
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        Object(__WEBPACK_IMPORTED_MODULE_4_firebase__["initializeApp"])(config);
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/wellida/Documentos/talk-with-firebase/src/app/app.html"*/'\n<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"/home/wellida/Documentos/talk-with-firebase/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider() {
        console.log("[LOG] Database de usuario iniciado");
    }
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map