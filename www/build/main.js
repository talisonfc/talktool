webpackJsonp([4],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscarContatoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_usuario_model__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BuscarContatoPage = /** @class */ (function () {
    function BuscarContatoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BuscarContatoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.login = this.navParams.get("login");
        this.dbusuarios = Object(__WEBPACK_IMPORTED_MODULE_2_firebase__["database"])().ref("usuarios");
        this.dbusuarios.once("value", function (snapshot) {
            _this.usuarios = new Array();
            //console.log(snapshot.val())
            snapshot.forEach(function (element) {
                //console.log(element.val())
                if (_this.login.uid !== element.key) {
                    var temp = new __WEBPACK_IMPORTED_MODULE_3__model_usuario_model__["a" /* UsuarioModel */]();
                    temp = element.val();
                    temp.key = element.key;
                    _this.usuarios.push(temp);
                }
            });
        });
    };
    /**
     * Metodo para adicionar contato
     */
    BuscarContatoPage.prototype.addContato = function (contact) {
        var _this = this;
        var dbusuario = Object(__WEBPACK_IMPORTED_MODULE_2_firebase__["database"])().ref("/usuarios/" + this.login.uid);
        var dados;
        dbusuario.once("value", function (snapshot) {
            dados = snapshot.val();
            if (!dados.contatos) {
                dados.contatos = new Array();
            }
            dados.contatos.push(contact.key);
            dbusuario.update(dados);
            _this.navCtrl.pop();
        });
    };
    BuscarContatoPage.prototype.searchItems = function ($event) {
    };
    BuscarContatoPage.prototype.find = function (event) {
        var _this = this;
        if (event.code == "Enter") {
            this.dbusuarios.orderByChild("nome").equalTo(this.busca).on("value", function (snapshot) {
                console.log(snapshot.val());
                if (snapshot.val() != undefined) {
                    _this.usuarios = new Array();
                    snapshot.forEach(function (element) {
                        if (_this.login.uid !== element.key) {
                            var temp = new __WEBPACK_IMPORTED_MODULE_3__model_usuario_model__["a" /* UsuarioModel */]();
                            temp = element.val();
                            temp.key = element.key;
                            _this.usuarios.push(temp);
                        }
                    });
                }
            });
        }
    };
    BuscarContatoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buscar-contato',template:/*ion-inline-start:"/home/wellida/Documentos/talk-with-firebase/src/pages/buscar-contato/buscar-contato.html"*/'\n<ion-header>\n\n  <ion-navbar [color]="\'primary\'">\n    <ion-title>Buscar contato</ion-title>\n  </ion-navbar>\n\n  <ion-searchbar [(ngModel)]="busca" (keypress)="find($event)"  (ionInput)="searchItems($event)"></ion-searchbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngFor="let contact of usuarios">\n    <ion-card-header (click)="addContato(contact)">\n      {{contact.nome}}\n    </ion-card-header>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/wellida/Documentos/talk-with-firebase/src/pages/buscar-contato/buscar-contato.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], BuscarContatoPage);
    return BuscarContatoPage;
}());

//# sourceMappingURL=buscar-contato.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContatosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buscar_contato_buscar_contato__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContatosPage = /** @class */ (function () {
    function ContatosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContatosPage.prototype.ngOnInit = function () {
        var _this = this;
        this.login = this.navParams.get("login");
        this.dbusuario = this.navParams.get("db");
        this.contatos = new Array();
        this.dbusuario.on("value", function (snapshot) {
            _this.usuario = snapshot.val();
            _this.getDadosContatos(_this.usuario);
        });
    };
    ContatosPage.prototype.getDadosContatos = function (usuario) {
        var _this = this;
        //Obter informações dos contatos
        if (usuario.contatos == undefined)
            return;
        this.usuario.contatos.forEach(function (uid) {
            Object(__WEBPACK_IMPORTED_MODULE_2_firebase__["database"])().ref("/usuarios/" + uid).once("value", function (snapshot) {
                _this.contatos.push(snapshot.val());
            });
        });
    };
    ContatosPage.prototype.searchContatos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__buscar_contato_buscar_contato__["a" /* BuscarContatoPage */], { login: this.login });
    };
    /**
     *
     * @param contato key do contato
     */
    ContatosPage.prototype.createConversa = function (index) {
        var _this = this;
        var contato = this.usuario.contatos[index];
        var dbconversa = Object(__WEBPACK_IMPORTED_MODULE_2_firebase__["database"])().ref("/conversas");
        dbconversa.push({ criador: this.login.uid }).then(function (data) {
            if (_this.usuario.conversas == undefined) {
                _this.usuario.conversas = new Array();
            }
            _this.usuario.conversas.push({ conversa_id: data.key, destinatario_id: contato });
            _this.dbusuario.update(_this.usuario);
            var dbdestinatario = Object(__WEBPACK_IMPORTED_MODULE_2_firebase__["database"])().ref("/usuarios/" + contato);
            dbdestinatario.once("value", function (snapshot) {
                var destinatario = snapshot.val();
                if (destinatario.conversas == undefined) {
                    destinatario.conversas = new Array();
                }
                destinatario.conversas.push({ conversa_id: data.key, destinatario_id: _this.login.uid });
                dbdestinatario.update(destinatario);
                _this.navCtrl.pop();
            });
        });
    };
    ContatosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contatos',template:/*ion-inline-start:"/home/wellida/Documentos/talk-with-firebase/src/pages/contatos/contatos.html"*/'\n<ion-header>\n\n  <ion-navbar [color]="\'primary\'">\n    <ion-title>Contatos</ion-title>\n    <ion-buttons right>\n      <button ion-button (click)="searchContatos()"><ion-icon name="search"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card (click)="createConversa(uide)" *ngFor="let contato of contatos; index as uide">\n    <ion-card-header>\n      {{contato.nome}}\n    </ion-card-header>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/wellida/Documentos/talk-with-firebase/src/pages/contatos/contatos.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(160);
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
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */], { login: data['user'] });
        }).catch(function (err) {
            console.error(err);
        });
    };
    LoginPage.prototype.entrar = function (user, password, event) {
        if (event.key == "Enter") {
            this.login(user, password);
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/wellida/Documentos/talk-with-firebase/src/pages/login/login.html"*/'\n\n<ion-content padding>\n  <div class="login">\n    <ion-list>\n      \n      <div style="text-align: center">\n        <img [ngClass]="\'logo\'" src="https://st2.depositphotos.com/5142301/7567/v/950/depositphotos_75677235-stock-illustration-lion-head-logo.jpg">\n      </div>\n      \n      <ion-item>\n        <ion-label floating>Usuário</ion-label>\n        <ion-input type="email" #user value="talisonfer@ufrn.com.br"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Senha</ion-label>\n        <ion-input (keypress)="entrar(user.value,password.value, $event)" type="password" #password value="123456"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <button ion-button full (click)="login(user.value,password.value)">Entrar</button>\n    <button ion-button full clear>Cadastrar</button>\n    <button ion-button full clear>Esqueceu a senha?</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/wellida/Documentos/talk-with-firebase/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_conversa_model__ = __webpack_require__(264);
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
    }
    ConversaPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log("[ngOnInit]");
        this.fluxo = this.navParams.get("conversa");
        this.uid = this.navParams.get("uid");
        this.fluxo.on("value", function (data) {
            console.log("[ONCE FIREBASE EVENT]");
            _this.conversa = data.val();
            console.log(_this.conversa);
            if (_this.conversa.conteudo !== undefined) {
                console.log("[CONVERSA CONTEUDO != undefined]");
                _this.index_end_conteudo = _this.conversa.conteudo.length;
                //this.scrollToBottom(200);
            }
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
        if (this.uid == this.conversa.criador) {
            this.conversa.conteudo.push({ autor: 'a', text: this.message });
        }
        else {
            this.conversa.conteudo.push({ autor: 'b', text: this.message });
        }
        this.fluxo.update(this.conversa);
        this.message = "";
        //this.scrollToBottom(100);
    };
    ConversaPage.prototype.confirme = function (event) {
        if (event.key == "Enter") {
            this.sendMessage();
        }
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
            selector: 'page-conversa',template:/*ion-inline-start:"/home/wellida/Documentos/talk-with-firebase/src/pages/conversa/conversa.html"*/'<ion-header>\n\n  <ion-navbar [color]="\'primary\'">\n    <ion-title>Usuario</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  {{messeges | json}}\n  <ion-card *ngFor="let m of conversa.conteudo; index as i" [ngClass]="m.autor===\'a\'? \'msg-a\': \'msg-b\'">\n    <ion-card-content (click)="removeMessage(i)">{{m.text}}</ion-card-content>\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-input [(ngModel)]="message" (keypress)="confirme($event)" placeholder="Mensagem"></ion-input>\n    <ion-buttons right>\n      <button (click)="recordVoice()" ion-button><ion-icon name="mic"></ion-icon></button>\n      <button (click)="sendMessage()" ion-button><ion-icon name="send"></ion-icon></button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/wellida/Documentos/talk-with-firebase/src/pages/conversa/conversa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ConversaPage);
    return ConversaPage;
}());

//# sourceMappingURL=conversa.js.map

/***/ }),

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/buscar-contato/buscar-contato.module": [
		294,
		3
	],
	"../pages/contatos/contatos.module": [
		295,
		2
	],
	"../pages/conversa/conversa.module": [
		297,
		1
	],
	"../pages/login/login.module": [
		296,
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
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 159:
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

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_usuario_model__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_conversa_conversa__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_contatos_contatos__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(106);
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
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_2__model_usuario_model__["a" /* UsuarioModel */]();
        /*
        var db = database().ref("/usuarios")
        db.on("value", (snapshot)=>{
          console.log(snapshot.val());
        })
        */
    }
    HomePage.prototype.ngOnInit = function () {
        this.login = this.navParams.get("login");
        //console.log(this.login.uid)
        this.db = Object(__WEBPACK_IMPORTED_MODULE_5_firebase__["database"])().ref("/usuarios/" + this.login.uid);
        this.init();
    };
    // Carrega dados do banco
    HomePage.prototype.init = function () {
        var _this = this;
        this.contatos = new Array();
        this.db.on('value', function (data) {
            _this.usuario = data.val();
            _this.getDadosContatos(_this.usuario);
        });
    };
    HomePage.prototype.getDadosContatos = function (usuario) {
        var _this = this;
        //Obter informações dos contatos
        if (usuario.conversas == undefined)
            return;
        this.usuario.conversas.forEach(function (conversa) {
            Object(__WEBPACK_IMPORTED_MODULE_5_firebase__["database"])().ref("/usuarios/" + conversa.destinatario_id).once("value", function (snapshot) {
                _this.contatos.push(snapshot.val());
            });
        });
    };
    HomePage.prototype.openConversa = function (index) {
        // console.log(index)
        // console.log(this.usuario.conversas[index])
        var conversa = Object(__WEBPACK_IMPORTED_MODULE_5_firebase__["database"])().ref("/conversas/" + this.usuario.conversas[index]['conversa_id']);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_conversa_conversa__["a" /* ConversaPage */], { conversa: conversa, uid: this.login.uid });
    };
    HomePage.prototype.listContatos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_contatos_contatos__["a" /* ContatosPage */], { login: this.login, db: this.db });
    };
    HomePage.prototype.exit = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/wellida/Documentos/talk-with-firebase/src/pages/home/home.html"*/'<ion-header >\n  <ion-navbar [color]="\'primary\'">\n    <ion-title>\n      <ion-icon name=""></ion-icon> Talk\n    </ion-title>\n    <ion-buttons right>\n      <button ion-button>{{usuario.nome}}</button>\n      <button ion-button (click)="listContatos()"><ion-icon name="contact"></ion-icon></button>\n      <button ion-button (click)="exit()"><ion-icon name="exit"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n  \n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item (click)="openConversa(cid)" *ngFor="let contato of contatos; index as cid">\n      <ion-avatar item-start>\n        <img src="">\n      </ion-avatar>\n      <h2>{{contato.nome}}</h2>\n      <button ion-button clear item-end>5</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/wellida/Documentos/talk-with-firebase/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_conversa_conversa__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contatos_contatos__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_buscar_contato_buscar_contato__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_database_database__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_pipes_module__ = __webpack_require__(292);
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
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_buscar_contato_buscar_contato__["a" /* BuscarContatoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/buscar-contato/buscar-contato.module#BuscarContatoPageModule', name: 'BuscarContatoPage', segment: 'buscar-contato', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contatos/contatos.module#ContatosPageModule', name: 'ContatosPage', segment: 'contatos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/conversa/conversa.module#ConversaPageModule', name: 'ConversaPage', segment: 'conversa', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__pipes_pipes_module__["a" /* PipesModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_conversa_conversa__["a" /* ConversaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contatos_contatos__["a" /* ContatosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_buscar_contato_buscar_contato__["a" /* BuscarContatoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_database_database__["a" /* DatabaseProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
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

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(35);
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

/***/ 291:
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

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__info_user_info_user__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__info_user_info_user__["a" /* InfoUserPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__info_user_info_user__["a" /* InfoUserPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoUserPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var InfoUserPipe = /** @class */ (function () {
    function InfoUserPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    InfoUserPipe.prototype.transform = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.find(value).then(function (data) {
                    console.log(data);
                    return data;
                });
                return [2 /*return*/];
            });
        });
    };
    InfoUserPipe.prototype.find = function (value) {
        var p = new Promise(function (resolve) {
            var dbusuario = Object(__WEBPACK_IMPORTED_MODULE_1_firebase__["database"])().ref('/usuarios/' + value);
            dbusuario.once("value", function (snapshot) {
                // console.log(snapshot.val().nome);
                resolve(snapshot.val().nome);
            });
        });
        return p;
    };
    InfoUserPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'infoUser',
        })
    ], InfoUserPipe);
    return InfoUserPipe;
}());

//# sourceMappingURL=info-user.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map