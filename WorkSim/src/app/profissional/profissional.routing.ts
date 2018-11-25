import { Routes } from '@angular/router';
import { ProfissionalListarComponent } from './profissional-listar/profissional-listar.component';
import { ProfissionalNovoComponent } from './profissional-novo/profissional-novo.component';
import { ProfissionalEditarComponent } from './profissional-editar/profissional-editar.component';

export const ProfissionalRoutes: Routes = [
  {
    path: 'listar',
    component: ProfissionalListarComponent,
    data: {
      hide: true
    }
  },
  {
    path: 'novo',
    component: ProfissionalNovoComponent,
    data: {
      hide: true
    }
  },
  {
    path: ':id/editar',
    component: ProfissionalEditarComponent,
    data: {
      hide: true
    }
  }
];
