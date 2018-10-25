import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { PesquisarChamadosComponent } from './pages/pesquisar-chamados/pesquisar-chamados.component';
import { Error404Component } from './pages/error/error404/error404.component';
import { Error500Component } from './pages/error/error500/error500.component';
import { Error403Component } from './pages/error/error403/error403.component';
import { DetalhesChamadoComponent } from './pages/detalhes-chamado/detalhes-chamado.component';
import { NovoChamadoComponent } from './pages/novo-chamado/novo-chamado.component';
export const AppRoutes: Routes = [
  {
    path: 'chamados',
    component: PesquisarChamadosComponent,
    pathMatch: 'full'
  },
  {
    path: 'chamado/novo',
    component: NovoChamadoComponent,
  },
  {
    path: 'chamados/:id',
    component: DetalhesChamadoComponent
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: '',
    component: PesquisarChamadosComponent
    //component: LoginComponent
  },
  {
    path: 'error/error500',
    component: Error500Component
  },
  {
    path: 'error/error403',
    component: Error403Component
  },
  {
    path: '**',
    component: Error404Component
  }
];
