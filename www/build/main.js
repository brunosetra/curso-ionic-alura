webpackJsonp([1],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_usuario_service_usuario_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, _alertCtrl, _usuarioService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._alertCtrl = _alertCtrl;
        this._usuarioService = _usuarioService;
        this.email = 'joao@alura.com.br';
        this.senha = 'alura123';
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        console.log(this.email, this.senha);
        this._usuarioService.efetuaLogin(this.email, this.senha)
            .subscribe(function (usuario) {
            console.log(usuario);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
        }, function () {
            _this._alertCtrl.create({
                title: 'Falha no login',
                subTitle: 'Email e/ou senha incorretos.',
                buttons: ['ok']
            }).present();
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/media/aluno/Data/curso-ionic-alura/src/pages/login/login.html"*/'<ion-content scroll="false">\n    <div class="splash-bg"></div>\n    <div class="splash-info">\n      <div class="splash-logo"></div>\n      <div class="splash-intro">\n        Aluracar\n      </div>\n    </div>\n    <div padding>\n      \n      <form (ngSubmit)="login()">\n        <!-- input email -->\n        <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input [(ngModel)]="email" name="email" type="text"></ion-input>\n        </ion-item>\n    \n        <!-- input senha -->\n        <ion-item>\n            <ion-label floating>Senha</ion-label>\n            <ion-input [(ngModel)]="senha" name="senha" type="password"></ion-input>\n        </ion-item>\n        \n        <button ion-button block type="submit" class="login">ENTRAR</button>\n      </form>\n      \n    </div>\n  </ion-content>'/*ion-inline-end:"/media/aluno/Data/curso-ionic-alura/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_usuario_service_usuario_service__["a" /* UsuarioServiceProvider */]])
], LoginPage);

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

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro/cadastro.module": [
		160,
		6
	],
	"../pages/escolha/escolha.module": [
		163,
		5
	],
	"../pages/lista-agendamentos/lista-agendamentos.module": [
		165,
		4
	],
	"../pages/login/login.module": [
		292,
		0
	],
	"../pages/perfil/perfil.module": [
		167,
		3
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
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_agendamento_service_agendamento_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_agendamento_dao_agendamento_dao__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CadastroPage = (function () {
    function CadastroPage(navCtrl, navParams, _alertCtrl, _agendamentoDao, _agendamentoService, _vibration) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._alertCtrl = _alertCtrl;
        this._agendamentoDao = _agendamentoDao;
        this._agendamentoService = _agendamentoService;
        this._vibration = _vibration;
        this.nome = '';
        this.endereco = '';
        this.email = '';
        this.data = new Date().toISOString();
        this.carro = this.navParams.get('carroSelecionado');
        this.precoTotal = this.navParams.get('precoTotal');
    }
    CadastroPage.prototype.ionViewDidLoad = function () {
    };
    CadastroPage.prototype.agenda = function () {
        var _this = this;
        if (!this.nome || !this.endereco || !this.email) {
            this._vibration.vibrate(300);
            this._alertCtrl.create({
                title: 'Preenchimento obrigatório',
                subTitle: 'Preencha todos os campos',
                buttons: ['ok']
            }).present();
        }
        var agendamento = {
            nomeCliente: this.nome,
            enderecoCliente: this.endereco,
            emailCliente: this.email,
            modeloCarro: this.carro.nome,
            precoTotal: this.precoTotal,
            data: this.data,
            enviado: false,
            confirmado: false
        };
        var alerta = this._alertCtrl.create({
            title: 'Aviso',
            buttons: [
                {
                    text: 'ok',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                    }
                }
            ]
        });
        this._agendamentoService.agenda(agendamento)
            .mergeMap(function (valor) {
            var obser$ = _this._agendamentoDao.salva(agendamento);
            if (valor instanceof Error) {
                throw valor;
            }
            return obser$;
        })
            .subscribe(function () {
            alerta.setSubTitle('Agendamento criado com sucesso!');
            alerta.present();
        }, function (error) {
            alerta.setSubTitle(error.message);
            alerta.present();
        });
    };
    return CadastroPage;
}());
CadastroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cadastro',template:/*ion-inline-start:"/media/aluno/Data/curso-ionic-alura/src/pages/cadastro/cadastro.html"*/'<!--\n  Generated template for the CadastroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>cadastro</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <h2>{{carro.nome}}</h2>\n  <p>{{precoTotal | currency }}</p>\n\n  <form (ngSubmit)="agenda()"  #formulario="ngForm">\n\n    <ion-item>\n      <ion-label stacked>Nome</ion-label>\n      <ion-input [(ngModel)]="nome" name="nome"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Endereço</ion-label>\n      <ion-input [(ngModel)]="endereco" name="endereco"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input [(ngModel)]="email" name="email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Data</ion-label>\n      <ion-datetime [(ngModel)]="data" name="data" displayFormat="DD/MM/YY"></ion-datetime>\n    </ion-item>\n  </form>\n\n  <ion-fab top right edge>\n    <button ion-fab (click)="formulario.ngSubmit.emit()">\n      <ion-icon name="send"></ion-icon>\n    </button>\n  </ion-fab>\n  \n</ion-content>\n'/*ion-inline-end:"/media/aluno/Data/curso-ionic-alura/src/pages/cadastro/cadastro.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__providers_agendamento_dao_agendamento_dao__["a" /* AgendamentoDaoProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_agendamento_dao_agendamento_dao__["a" /* AgendamentoDaoProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__providers_agendamento_service_agendamento_service__["a" /* AgendamentoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_agendamento_service_agendamento_service__["a" /* AgendamentoService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */]) === "function" && _f || Object])
], CadastroPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscolhaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cadastro_cadastro__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the EscolhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EscolhaPage = (function () {
    function EscolhaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.acessorios = [
            { nome: 'Freio ABS', preco: 800 },
            { nome: 'Ar condicionado', preco: 1000 },
            { nome: 'Central Multimidia', preco: 950 },
        ];
        this.carro = navParams.get('carroSelecionado');
        this.carro.fotos = this.carro.fotos.map(function (foto) { return foto.replace('localhost', '192.168.56.101'); });
        this._precoTotal = this.carro.preco;
    }
    Object.defineProperty(EscolhaPage.prototype, "precoTotal", {
        get: function () {
            return this._precoTotal;
        },
        enumerable: true,
        configurable: true
    });
    EscolhaPage.prototype.ionViewDidLoad = function () {
    };
    EscolhaPage.prototype.atualizarPrecoTotal = function (checked, acessorio) {
        checked ?
            this._precoTotal += acessorio.preco :
            this._precoTotal -= acessorio.preco;
    };
    EscolhaPage.prototype.avancaCadastro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__cadastro_cadastro__["a" /* CadastroPage */], { carroSelecionado: this.carro, precoTotal: this._precoTotal });
    };
    return EscolhaPage;
}());
EscolhaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-escolha',template:/*ion-inline-start:"/media/aluno/Data/curso-ionic-alura/src/pages/escolha/escolha.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Escolha</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-slides pager="true">\n    <ion-slide *ngFor="let foto of carro.fotos">\n      <img src="{{foto}}">\n    </ion-slide>\n  </ion-slides>\n\n  <ion-item-group>\n    <ion-item-divider color="light">\n      VEÍCULO\n    </ion-item-divider>\n    <ion-item>{{carro.nome}}</ion-item>\n    <ion-item>{{carro.preco | currency}}</ion-item>\n  </ion-item-group>\n\n  <ion-item-group>\n    <ion-item-divider color="light">\n      <ion-icon name="options"></ion-icon>\n      ACESSÓRIOS\n    </ion-item-divider>\n    <ion-item *ngFor="let acessorio of acessorios">\n      <ion-label>\n        <h2>{{acessorio.nome}} </h2>\n        <h4>{{acessorio.preco}}</h4>\n      </ion-label>\n\n      <ion-toggle (ionChange)="atualizarPrecoTotal(toggle.checked,acessorio)" #toggle color="secondary"></ion-toggle>\n    </ion-item>\n\n  </ion-item-group>\n\n  <ion-item-divider color="light">\n    <span item-right>TOTAL: {{precoTotal | currency}}</span>\n  </ion-item-divider>\n\n  <ion-fab top right edge>\n    <button ion-fab (click)="avancaCadastro()">\n      <ion-icon name="arrow-dropright"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/media/aluno/Data/curso-ionic-alura/src/pages/escolha/escolha.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
], EscolhaPage);

//# sourceMappingURL=escolha.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaAgendamentosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_agendamento_service_agendamento_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_agendamento_dao_agendamento_dao__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListaAgendamentosPage = ListaAgendamentosPage_1 = (function () {
    function ListaAgendamentosPage(navCtrl, navParams, _alertCtrl, _agendamentoDao, _agendamentoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._alertCtrl = _alertCtrl;
        this._agendamentoDao = _agendamentoDao;
        this._agendamentoService = _agendamentoService;
    }
    ListaAgendamentosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this._agendamentoDao.listaTodos()
            .subscribe(function (agendamentos) {
            _this.agendamentos = agendamentos;
        });
    };
    ListaAgendamentosPage.prototype.reenvia = function (agendamento) {
        var _this = this;
        var alerta = this._alertCtrl.create({
            title: 'Aviso',
            buttons: [
                {
                    text: 'ok',
                    handler: function () {
                        _this.navCtrl.setRoot(ListaAgendamentosPage_1);
                    }
                }
            ]
        });
        this._agendamentoService.agenda(agendamento)
            .mergeMap(function (valor) {
            var obser$ = _this._agendamentoDao.salva(agendamento);
            if (valor instanceof Error) {
                throw valor;
            }
            return obser$;
        })
            .subscribe(function () {
            alerta.setSubTitle('Agendamento reenviado!');
            alerta.present();
        }, function (error) {
            alerta.setSubTitle(error.message);
            alerta.present();
        });
    };
    return ListaAgendamentosPage;
}());
ListaAgendamentosPage = ListaAgendamentosPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-lista-agendamentos',template:/*ion-inline-start:"/media/aluno/Data/curso-ionic-alura/src/pages/lista-agendamentos/lista-agendamentos.html"*/'<!--\n  Generated template for the ListaAgendamentosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Agendamentos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item [class.falha]="!agendamento.enviado" *ngFor="let agendamento of agendamentos">\n      {{agendamento.nomeCliente}} - {{agendamento.modeloCarro}}\n      <button ion-button item-end icon-only clear\n      *ngIf="!agendamento.enviado"\n      (click)="reenvia(agendamento)">\n          <ion-icon name="refresh" ></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/media/aluno/Data/curso-ionic-alura/src/pages/lista-agendamentos/lista-agendamentos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_agendamento_dao_agendamento_dao__["a" /* AgendamentoDaoProvider */],
        __WEBPACK_IMPORTED_MODULE_0__providers_agendamento_service_agendamento_service__["a" /* AgendamentoService */]])
], ListaAgendamentosPage);

var ListaAgendamentosPage_1;
//# sourceMappingURL=lista-agendamentos.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_usuario_service_usuario_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PerfilPage = (function () {
    function PerfilPage(navCtrl, navParams, _usuarioService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._usuarioService = _usuarioService;
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
    };
    Object.defineProperty(PerfilPage.prototype, "usuarioLogado", {
        get: function () {
            return this._usuarioService.usuarioLogado();
        },
        enumerable: true,
        configurable: true
    });
    return PerfilPage;
}());
PerfilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-perfil',template:/*ion-inline-start:"/media/aluno/Data/curso-ionic-alura/src/pages/perfil/perfil.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Perfil</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-item no-lines>\n    <div class="avatar-wrapper">\n\n      <ion-avatar>\n        <img src="assets/img/avatar-padrao.jpg">\n      </ion-avatar>\n\n      <button class="btn-tirar-foto" ion-button icon-only round>\n        <ion-icon name="camera"></ion-icon>\n      </button>\n\n    </div>\n  </ion-item>\n\n\n  <ion-card>\n    <ion-item>\n      <ion-icon name="contact" item-left></ion-icon>\n      <p>{{usuarioLogado.nome}}</p>\n    </ion-item> \n\n    <ion-item>\n        <ion-icon name="calendar" item-left></ion-icon>\n        <p>{{usuarioLogado.dataNascimento}}</p>\n    </ion-item> \n\n    <ion-item>\n        <ion-icon name="at" item-left></ion-icon>\n        <p>{{usuarioLogado.email}}</p>\n    </ion-item> \n    <ion-item>\n        <ion-icon name="call" item-left></ion-icon>\n        <p>{{usuarioLogado.telefone}}</p>\n    </ion-item> \n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/media/aluno/Data/curso-ionic-alura/src/pages/perfil/perfil.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_usuario_service_usuario_service__["a" /* UsuarioServiceProvider */]])
], PerfilPage);

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrosServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the CarrosServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CarrosServiceProvider = (function () {
    function CarrosServiceProvider(_http) {
        this._http = _http;
    }
    CarrosServiceProvider.prototype.lista = function () {
        return this._http.get('http://192.168.56.101:8080/api/carro/listaTodos');
    };
    return CarrosServiceProvider;
}());
CarrosServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
], CarrosServiceProvider);

//# sourceMappingURL=carros-service.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_carros_service_carros_service__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_agendamentos_service_agendamentos_service__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_agendamentos_service_agendamentos_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__providers_agendamentos_service_agendamentos_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_finally__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_do__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_mergeMap__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_catch__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_observable_fromPromise__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_observable_of__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_agendamento_dao_agendamento_dao__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_usuarios_service_usuarios_service__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_usuarios_service_usuarios_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__providers_usuarios_service_usuarios_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_vibration__ = __webpack_require__(293);
throw new Error("Cannot find module \"@ionic-native/date-picker\"");
throw new Error("Cannot find module \"@ionic-native/camera\"");
throw new Error("Cannot find module \"@ionic-native/onesignal\"");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/escolha/escolha.module#EscolhaPageModule', name: 'EscolhaPage', segment: 'escolha', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/lista-agendamentos/lista-agendamentos.module#ListaAgendamentosPageModule', name: 'ListaAgendamentosPage', segment: 'lista-agendamentos', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                name: 'aluracar',
                storeName: 'agendamentos',
                driverOrder: ['indexeddb']
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_8__providers_carros_service_carros_service__["a" /* CarrosServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_agendamentos_service_agendamentos_service__["AgendamentosServiceProvider"],
            __WEBPACK_IMPORTED_MODULE_17__providers_agendamento_dao_agendamento_dao__["a" /* AgendamentoDaoProvider */],
            __WEBPACK_IMPORTED_MODULE_19__providers_usuarios_service_usuarios_service__["UsuariosServiceProvider"],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_date_picker__["DatePicker"],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__["Camera"],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_onesignal__["OneSignal"]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_lista_agendamentos_lista_agendamentos__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_perfil_perfil__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_usuarios_service_usuarios_service__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_usuarios_service_usuarios_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__providers_usuarios_service_usuarios_service__);
throw new Error("Cannot find module \"@ionic-native/onesignal\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_agendamento_dao_agendamento_dao__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, _usuariosService, _onesignal, _agendamentoDao) {
        var _this = this;
        this._usuariosService = _usuariosService;
        this._onesignal = _onesignal;
        this._agendamentoDao = _agendamentoDao;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.paginas = [
            { titulo: 'Agendamentos', componente: __WEBPACK_IMPORTED_MODULE_4__pages_lista_agendamentos_lista_agendamentos__["a" /* ListaAgendamentosPage */].name, icone: 'calendar' },
            { titulo: 'Perfil', componente: __WEBPACK_IMPORTED_MODULE_6__pages_perfil_perfil__["a" /* PerfilPage */].name, icone: 'person' }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            //configurar onesignal
            var iosConfigs = {
                kOSSettingsKeyAutoPrompt: true,
                kOSSettingsKeyInAppLaunchURL: false
            };
            _this._onesignal
                .startInit('e53f5d24-40e4-458f-99db-5230cf3f8bc0', '97629632146')
                .iosSettings(iosConfigs);
            _this._onesignal.inFocusDisplaying(_this._onesignal.OSInFocusDisplayOption.Notification);
            _this._onesignal.handleNotificationReceived()
                .subscribe(function (notificacao) {
                var dadosAdicionais = notificacao.payload
                    .additionalData;
                var agendamentoId = dadosAdicionais['agendamento-id'];
                _this._agendamentoDao.recupera(agendamentoId)
                    .subscribe(function (agendamento) {
                    agendamento.confirmado = true;
                    _this._agendamentoDao.salva(agendamento);
                });
            });
            _this._onesignal.endInit();
        });
    }
    MyApp.prototype.irParaPagina = function (componente) {
        this.nav.push(componente);
    };
    Object.defineProperty(MyApp.prototype, "avatar", {
        get: function () {
            return this._usuariosService.obtemAvatar();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyApp.prototype, "usuarioLogado", {
        get: function () {
            return this._usuariosService.obtemUsuarioLogado();
        },
        enumerable: true,
        configurable: true
    });
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]) === "function" && _a || Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'myapp',template:/*ion-inline-start:"/media/aluno/Data/curso-ionic-alura/src/app/app.html"*/'<ion-split-pane>\n    <ion-menu [content]="conteudo" *ngIf="usuarioLogado">\n        <ion-content>\n            <ion-item id="cabecalho-menu" class="cabecalho-menu">\n                <div>\n                    <ion-avatar item-start>\n                        <img [src]="avatar">\n                    </ion-avatar>\n                </div>\n                <h2>{{ usuarioLogado.nome }}</h2>\n                <p>{{ usuarioLogado.email }}</p>\n            </ion-item>\n\n            <ion-list>\n                    \n                <button ion-item menuClose *ngFor="let pagina of paginas"\n                    (click)="irParaPagina(pagina.componente)">\n\n                    <ion-icon [name]="pagina.icone" item-left></ion-icon>\n                    {{ pagina.titulo }}\n                </button>\n            </ion-list>\n        </ion-content>\n    </ion-menu>\n    <ion-nav [root]="rootPage" main #conteudo swipeBackEnabled="false"></ion-nav>\n</ion-split-pane>'/*ion-inline-end:"/media/aluno/Data/curso-ionic-alura/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__providers_usuarios_service_usuarios_service__["UsuariosServiceProvider"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_usuarios_service_usuarios_service__["UsuariosServiceProvider"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__["OneSignal"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__["OneSignal"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_9__providers_agendamento_dao_agendamento_dao__["a" /* AgendamentoDaoProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__providers_agendamento_dao_agendamento_dao__["a" /* AgendamentoDaoProvider */]) === "function" && _g || Object])
], MyApp);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 294:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/media/aluno/Data/curso-ionic-alura/src/providers/usuarios-service/usuarios-service.js'");

/***/ }),

/***/ 295:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/media/aluno/Data/curso-ionic-alura/src/providers/agendamentos-service/agendamentos-service.js'");

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsuarioServiceProvider = (function () {
    function UsuarioServiceProvider(_http) {
        this._http = _http;
    }
    UsuarioServiceProvider.prototype.efetuaLogin = function (email, senha) {
        var _this = this;
        return this._http
            .post('http://192.168.56.101:8080/api/login', { email: email, senha: senha })
            .do(function (usuario) { return _this._usuarioLogado = usuario; });
    };
    UsuarioServiceProvider.prototype.usuarioLogado = function () {
        return this._usuarioLogado;
    };
    return UsuarioServiceProvider;
}());
UsuarioServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
], UsuarioServiceProvider);

//# sourceMappingURL=usuario-service.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_carros_service_carros_service__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__escolha_escolha__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, _carroService, _loadingCtrl, _alertCtrl) {
        this.navCtrl = navCtrl;
        this._carroService = _carroService;
        this._loadingCtrl = _loadingCtrl;
        this._alertCtrl = _alertCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this._loadingCtrl.create({ content: 'Carregando carros...' });
        loading.present();
        this._carroService.lista().subscribe(function (carros) {
            _this.carros = carros;
            loading.dismiss();
        }, function (err) {
            loading.dismiss();
            _this._alertCtrl.create({
                title: 'Falha na conexão',
                subTitle: 'Não foi possível carregar a lista. Tente novamente mais tarde.',
                buttons: [{ text: 'OK' }]
            }).present();
        });
    };
    HomePage.prototype.selecionaCarro = function (carro) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__escolha_escolha__["a" /* EscolhaPage */], { carroSelecionado: carro });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/media/aluno/Data/curso-ionic-alura/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Aluracar\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list >\n    <ion-item *ngFor="let carro of carros" (click)="selecionaCarro(carro)">\n      <h2>{{carro.nome}}</h2>\n      <p>{{carro.preco | currency}}</p>\n      \n    </ion-item>\n\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/media/aluno/Data/curso-ionic-alura/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_carros_service_carros_service__["a" /* CarrosServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendamentoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AgendamentoService = (function () {
    function AgendamentoService(_http) {
        this._http = _http;
        this._url = 'http://192.168.56.101:8080/api';
    }
    AgendamentoService.prototype.agenda = function (agendamento) {
        return this._http
            .post(this._url + "/agendamento/agenda", agendamento)
            .do(function () { return agendamento.enviado = true; })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of(new Error('Não foi possível realizar o agendamento. Tente novamente mais tarde.')); });
    };
    return AgendamentoService;
}());
AgendamentoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], AgendamentoService);

//# sourceMappingURL=agendamento-service.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendamentoDaoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AgendamentoDaoProvider = (function () {
    function AgendamentoDaoProvider(_storage) {
        this._storage = _storage;
    }
    AgendamentoDaoProvider.prototype.salva = function (agendamento) {
        var chave = agendamento.emailCliente + agendamento.data.substr(0, 10);
        var promise = this._storage.set(chave, agendamento);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromPromise(promise);
    };
    AgendamentoDaoProvider.prototype.listaTodos = function () {
        var agendamentos = [];
        var promise = this._storage
            .forEach(function (agendamento) { agendamentos.push(agendamento); })
            .then(function () { return agendamentos; });
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromPromise(promise);
    };
    return AgendamentoDaoProvider;
}());
AgendamentoDaoProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], AgendamentoDaoProvider);

//# sourceMappingURL=agendamento-dao.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map