"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var home_service_1 = require("./home.service");
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(homeService) {
        this.homeService = homeService;
        this.filtros = {};
        this.chamados = [];
        this.tipos = [];
        this.grupos = [];
        this.sla = {
            foraDoPrazo: 'F',
            dentroDoprazo: 'P'
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.obterFiltros();
    };
    HomeComponent.prototype.obterChamados = function () {
        var _this = this;
        this.homeService.obterChamados(this.filtros)
            .subscribe(function (x) {
            _this.chamados = x.chamados;
            console.dir(_this.chamados);
        });
    };
    HomeComponent.prototype.limpar = function () {
        this.filtros = {};
        this.chamados = [];
    };
    HomeComponent.prototype.obterSla = function (estaNoPrazo) {
        if (estaNoPrazo)
            return this.sla.dentroDoprazo;
        return this.sla.foraDoPrazo;
    };
    HomeComponent.prototype.obterCor = function (estaNoPrazo) {
        return {
            'EstaNoPrazo': estaNoPrazo,
            'ForaDoPrazo': !estaNoPrazo
        };
    };
    HomeComponent.prototype.obterChamado = function () {
        //this.homeService.obterChamado()
        //                .subscribe((x) => {
        //                  this.chamados = <IChamados[]>x.chamados;
        //                });
    };
    HomeComponent.prototype.obterFiltros = function () {
        var _this = this;
        this.homeService.obterFiltros()
            .subscribe(function (x) {
            _this.tipos = x.tipos;
            _this.grupos = x.grupos;
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [home_service_1.HomeService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map