"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var pesquisar_chamados_service_1 = require("./pages/pesquisar-chamados/pesquisar-chamados.service");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var http_2 = require("@angular/http");
var app_component_1 = require("./app.component");
require("rxjs/add/operator/finally");
var footer_component_1 = require("./componentes/footer/footer.component");
var header_component_1 = require("./componentes/header/header.component");
var loader_component_1 = require("./componentes/loader/loader.component");
var login_component_1 = require("./pages/auth/login/login.component");
var pesquisar_chamados_component_1 = require("./pages/pesquisar-chamados/pesquisar-chamados.component");
var router_1 = require("@angular/router");
var app_routing_1 = require("./app.routing");
var error404_component_1 = require("./pages/error/error404/error404.component");
var error500_component_1 = require("./pages/error/error500/error500.component");
var styles_component_1 = require("./componentes/styles/styles.component");
var error403_component_1 = require("./pages/error/error403/error403.component");
var http_app_client_service_1 = require("./shared/http-app-client.service");
var forms_1 = require("@angular/forms");
var detalhes_chamado_component_1 = require("./pages/detalhes-chamado/detalhes-chamado.component");
var detalhes_chamado_service_1 = require("./pages/detalhes-chamado/detalhes-chamado.service");
var ngx_toastr_1 = require("ngx-toastr");
var animations_1 = require("@angular/platform-browser/animations");
var menu_component_1 = require("./componentes/menu/menu.component");
var novo_chamado_component_1 = require("./pages/novo-chamado/novo-chamado.component");
var ng2_lazy_trumbowyg_1 = require("ng2-lazy-trumbowyg");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                footer_component_1.FooterComponent,
                header_component_1.HeaderComponent,
                loader_component_1.LoaderComponent,
                login_component_1.LoginComponent,
                pesquisar_chamados_component_1.PesquisarChamadosComponent,
                error404_component_1.Error404Component,
                error500_component_1.Error500Component,
                styles_component_1.StylesComponent,
                error403_component_1.Error403Component,
                detalhes_chamado_component_1.DetalhesChamadoComponent,
                menu_component_1.MenuComponent,
                novo_chamado_component_1.NovoChamadoComponent
            ],
            imports: [
                ng2_lazy_trumbowyg_1.TrumbowygModule.forRoot({ plugins: ['colors', 'preformatted', 'pasteimage', 'upload'], version: '2.8.0' }),
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                http_2.HttpModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(app_routing_1.AppRoutes),
                ngx_toastr_1.ToastrModule.forRoot()
            ],
            exports: [router_1.RouterModule],
            providers: [http_app_client_service_1.HttpAppClient, pesquisar_chamados_service_1.PesquisarChamadosService, detalhes_chamado_service_1.DetalhesChamadoService, ngx_toastr_1.ToastrService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map