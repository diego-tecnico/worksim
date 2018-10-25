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
var router_1 = require("@angular/router");
var detalhes_chamados_service_1 = require("./detalhes-chamados.service");
var moment = require("moment");
var ngx_toastr_1 = require("ngx-toastr");
var DetalhesChamadosComponent = /** @class */ (function () {
    function DetalhesChamadosComponent(detalhesChamados, activeRoute, toastrService) {
        this.detalhesChamados = detalhesChamados;
        this.activeRoute = activeRoute;
        this.toastrService = toastrService;
        this.mostrarAudio = false;
        this.pathAudio = "http://192.168.1.19:1000/gravacao_asterisk/";
        this.acoes = [];
        this.anexos = [];
        this.chamado = {};
    }
    DetalhesChamadosComponent.prototype.ngOnInit = function () {
        //this.activeRoute
        //  .params
        //  .subscribe(chamado => {
        //    this.obterAcoesChamado(+chamado.id);
        //  });
    };
    DetalhesChamadosComponent.prototype.obterAcoesChamado = function (id_Chamado) {
        var _this = this;
        this.detalhesChamados.obterChamado(id_Chamado)
            .subscribe(function (x) {
            _this.acoes = x.acoes || [];
            _this.anexos = x.anexos || [];
            _this.chamado = x.chamado || {};
            _this.UniqueId();
            if (_this.chamado.uniqueid)
                _this.obterAudioChamado();
        });
    };
    DetalhesChamadosComponent.prototype.obterAudioChamado = function () {
        var data_chamado = moment(this.chamado.data_criacao).format('YYYYMMDD');
        this.pathAudio += data_chamado + "/" + this.chamado.uniqueid + ".ogg";
        console.log(this.pathAudio);
        this.mostrarAudio = true;
    };
    DetalhesChamadosComponent.prototype.obterDescricao = function (descricao) {
        if (!descricao)
            return descricao;
    };
    DetalhesChamadosComponent.prototype.UniqueId = function () {
        this.chamado.uniqueid = this.chamado.uniqueid.replace(",", ".");
    };
    DetalhesChamadosComponent.prototype.downloadAnexo = function (id_Chamado, arquivoAnexo) {
        var _this = this;
        this.detalhesChamados.downloadAnexo(id_Chamado, arquivoAnexo)
            .subscribe(function (x) {
            console.log(x);
            _this.toastrService.success(x.message);
        });
    };
    DetalhesChamadosComponent.prototype.corDoIconePorAcao = function (acao) {
        switch (acao) {
            case 'ABRIU':
                return 'fas fa-envelope icon bg-green';
            case 'ENCAMINHOU':
                return 'fas fa-share icon bg-blue';
            case 'ASSUMIU':
                return 'fas fa-thumbs-up icon bg-green';
            case 'FECHOU':
                return 'fas fa-times icon bg-red';
            case 'COMPLEMENTOU':
                return 'fas fa-edit icon bg-gray';
            case 'AGUARDO':
                return 'fas fa-pause icon bg-purple';
            case 'ALTEROU':
                return 'fas fa-edit icon bg-yellow';
            case 'REABRIU':
                return 'fas fa-folder-open icon bg-green';
        }
    };
    DetalhesChamadosComponent = __decorate([
        core_1.Component({
            selector: 'app-detalhes-chamados',
            templateUrl: './detalhes-chamados.component.html',
            styleUrls: ['./detalhes-chamados.component.css']
        }),
        __metadata("design:paramtypes", [detalhes_chamados_service_1.DetalhesChamadosService,
            router_1.ActivatedRoute,
            ngx_toastr_1.ToastrService])
    ], DetalhesChamadosComponent);
    return DetalhesChamadosComponent;
}());
exports.DetalhesChamadosComponent = DetalhesChamadosComponent;
//# sourceMappingURL=detalhes-chamados.component.js.map