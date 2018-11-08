"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = require("./pages/auth/login/login.component");
var pesquisar_chamados_component_1 = require("./pages/pesquisar-chamados/pesquisar-chamados.component");
var error404_component_1 = require("./pages/error/error404/error404.component");
var error500_component_1 = require("./pages/error/error500/error500.component");
var error403_component_1 = require("./pages/error/error403/error403.component");
var detalhes_chamado_component_1 = require("./pages/detalhes-chamado/detalhes-chamado.component");
var novo_chamado_component_1 = require("./pages/novo-chamado/novo-chamado.component");
exports.AppRoutes = [
    {
        path: 'chamados',
        component: pesquisar_chamados_component_1.PesquisarChamadosComponent,
        pathMatch: 'full'
    },
    {
        path: 'chamado/novo',
        component: novo_chamado_component_1.NovoChamadoComponent,
    },
    {
        path: 'chamados/:id',
        component: detalhes_chamado_component_1.DetalhesChamadoComponent
    },
    {
        path: 'auth/login',
        component: login_component_1.LoginComponent
    },
    {
        path: '',
        component: pesquisar_chamados_component_1.PesquisarChamadosComponent
        //component: LoginComponent
    },
    {
        path: 'error/error500',
        component: error500_component_1.Error500Component
    },
    {
        path: 'error/error403',
        component: error403_component_1.Error403Component
    },
    {
        path: '**',
        component: error404_component_1.Error404Component
    }
];
//# sourceMappingURL=app.routing.js.map