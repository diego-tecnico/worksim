import {Routes} from '@angular/router';
import {ProfissionalListarComponent} from '../profissional/profissional-listar/profissional-listar.component';
import {PlanoNovoComponent} from './plano-novo/plano-novo.component';
import {PlanoListarComponent} from './plano-listar/plano-listar.component';

export const PlanosRoutes: Routes = [
  {
    path: 'novo',
    component: PlanoNovoComponent,
    data: {
      hide: true
    }
  },
  {
    path: 'listar',
    component: PlanoListarComponent,
    data: {
      hide: true
    }
  },
];
