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
var pesquisar_chamados_service_1 = require("./pesquisar-chamados.service");
var core_1 = require("@angular/core");
var PesquisarChamadosComponent = /** @class */ (function () {
    function PesquisarChamadosComponent(pesquisarChamadosService) {
        this.pesquisarChamadosService = pesquisarChamadosService;
        this.filtros = {};
        this.chamados = [];
        this.tipos = [];
        this.grupos = [];
        this.sla = {
            foraDoPrazo: 'F',
            dentroDoprazo: 'P'
        };
    }
    PesquisarChamadosComponent.prototype.ngOnInit = function () {
        // this.obterFiltros();
    };
    PesquisarChamadosComponent.prototype.obterChamados = function () {
        var _this = this;
        this.pesquisarChamadosService.obterChamados(this.filtros)
            .subscribe(function (x) {
            _this.chamados = x.chamados;
            console.dir(_this.chamados);
        });
    };
    PesquisarChamadosComponent.prototype.limpar = function () {
        this.filtros = {};
        this.chamados = [];
    };
    PesquisarChamadosComponent.prototype.obterSla = function (estaNoPrazo) {
        if (estaNoPrazo)
            return this.sla.dentroDoprazo;
        return this.sla.foraDoPrazo;
    };
    PesquisarChamadosComponent.prototype.obterCor = function (estaNoPrazo) {
        return {
            'EstaNoPrazo': estaNoPrazo,
            'ForaDoPrazo': !estaNoPrazo
        };
    };
    PesquisarChamadosComponent.prototype.obterChamado = function () {
        //this.homeService.obterChamado()
        //                .subscribe((x) => {
        //                  this.chamados = <IChamados[]>x.chamados;
        //                });
    };
    PesquisarChamadosComponent.prototype.obterFiltros = function () {
        var _this = this;
        this.pesquisarChamadosService.obterFiltros()
            .subscribe(function (x) {
            _this.tipos = x.tipos;
            _this.grupos = x.grupos;
        });
    };
    PesquisarChamadosComponent = __decorate([
        core_1.Component({
            selector: 'app-chamados',
            templateUrl: './pesquisar-chamados.component.html',
            styleUrls: ['./pesquisar-chamados.component.css']
        }),
        __metadata("design:paramtypes", [pesquisar_chamados_service_1.PesquisarChamadosService])
    ], PesquisarChamadosComponent);
    return PesquisarChamadosComponent;
}());
exports.PesquisarChamadosComponent = PesquisarChamadosComponent;
//# sourceMappingURL=pesquisar-chamados.component.js.map