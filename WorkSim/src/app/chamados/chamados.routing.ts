import { Routes } from '@angular/router';
import { ChamadosListarComponent } from './chamados-listar/chamados-listar.component';
import { ChamadosNovoComponent } from './chamados-novo/chamados-novo.component';

export const ChamadosRoutes: Routes = [
  {
    path: 'listar',
    component: ChamadosListarComponent,
    data: {
      hide: true
    }
  },
  {
    path: 'novo',
    component: ChamadosNovoComponent,
    data: {
      hide: true
    }
  }
];
