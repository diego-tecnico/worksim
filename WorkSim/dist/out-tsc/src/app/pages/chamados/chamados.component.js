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
var chamados_service_1 = require("./chamados.service");
var core_1 = require("@angular/core");
var ChamadosComponent = /** @class */ (function () {
    function ChamadosComponent(chamadosService) {
        this.chamadosService = chamadosService;
        this.filtros = {};
        this.chamados = [];
        this.tipos = [];
        this.grupos = [];
        this.sla = {
            foraDoPrazo: 'F',
            dentroDoprazo: 'P'
        };
    }
    ChamadosComponent.prototype.ngOnInit = function () {
        this.obterFiltros();
    };
    ChamadosComponent.prototype.obterChamados = function () {
        var _this = this;
        this.chamadosService.obterChamados(this.filtros)
            .subscribe(function (x) {
            _this.chamados = x.chamados;
            console.dir(_this.chamados);
        });
    };
    ChamadosComponent.prototype.limpar = function () {
        this.filtros = {};
        this.chamados = [];
    };
    ChamadosComponent.prototype.obterSla = function (estaNoPrazo) {
        if (estaNoPrazo)
            return this.sla.dentroDoprazo;
        return this.sla.foraDoPrazo;
    };
    ChamadosComponent.prototype.obterCor = function (estaNoPrazo) {
        return {
            'EstaNoPrazo': estaNoPrazo,
            'ForaDoPrazo': !estaNoPrazo
        };
    };
    ChamadosComponent.prototype.obterChamado = function () {
        //this.homeService.obterChamado()
        //                .subscribe((x) => {
        //                  this.chamados = <IChamados[]>x.chamados;
        //                });
    };
    ChamadosComponent.prototype.obterFiltros = function () {
        var _this = this;
        this.chamadosService.obterFiltros()
            .subscribe(function (x) {
            _this.tipos = x.tipos;
            _this.grupos = x.grupos;
        });
    };
    ChamadosComponent = __decorate([
        core_1.Component({
            selector: 'app-chamados',
            templateUrl: './chamados.component.html',
            styleUrls: ['./chamados.component.css']
        }),
        __metadata("design:paramtypes", [chamados_service_1.ChamadosService])
    ], ChamadosComponent);
    return ChamadosComponent;
}());
exports.ChamadosComponent = ChamadosComponent;
//# sourceMappingURL=chamados.component.js.map