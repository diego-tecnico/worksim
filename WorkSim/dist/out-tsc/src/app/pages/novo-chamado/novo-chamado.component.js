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
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var NovoChamadoComponent = /** @class */ (function () {
    function NovoChamadoComponent() {
        this.mostrarArquivos = false;
        this.updateTrumbowyg = new rxjs_1.Subject();
        this.opcoesTrumbowyg = {
            autogrow: true,
            removeformatPasted: true,
            semantic: false,
            lang: 'pt'
        };
        this.textoTrumbowyg = "";
        this.arquivos = [];
    }
    NovoChamadoComponent.prototype.ngOnInit = function () {
    };
    NovoChamadoComponent.prototype.onChange = function (event) {
        var _a;
        if (this.arquivos.length > 0) {
            (_a = this.arquivos).push.apply(_a, [].slice.call(event.target.files));
        }
        else {
            this.arquivos = [].slice.call(event.target.files);
        }
        this.existeArquivos();
    };
    NovoChamadoComponent.prototype.removerArquivo = function (arquivo) {
        var posicaoArquivo = this.arquivos.map(function (n) { return n.name; }).indexOf(arquivo.name);
        this.arquivos.splice(posicaoArquivo, 1);
        this.existeArquivos();
    };
    NovoChamadoComponent.prototype.existeArquivos = function () {
        if (this.arquivos.length > 0) {
            this.mostrarArquivos = true;
        }
        else {
            this.mostrarArquivos = false;
        }
    };
    NovoChamadoComponent.prototype.buscarBeneficiarioPorCodigo = function () {
        console.log('buscar beneficiario por codigo');
    };
    NovoChamadoComponent.prototype.buscarPorCep = function () {
        console.log('buscar endereço por cep');
    };
    NovoChamadoComponent = __decorate([
        core_1.Component({
            selector: 'app-novo-chamado',
            templateUrl: './novo-chamado.component.html',
            styleUrls: ['./novo-chamado.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], NovoChamadoComponent);
    return NovoChamadoComponent;
}());
exports.NovoChamadoComponent = NovoChamadoComponent;
//# sourceMappingURL=novo-chamado.component.js.map