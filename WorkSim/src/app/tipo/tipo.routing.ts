import {Routes} from '@angular/router';
import {TipoNovoComponent} from './tipo-novo/tipo-novo.component';
import {TipoListarComponent} from './tipo-listar/tipo-listar.component';

export const TipoRoutes: Routes = [
  {
    path: 'novo',
    component: TipoNovoComponent,
    data: {
      hide: true
    }
  },
  {
    path: 'listar',
    component: TipoListarComponent,
    data: {
      hide: true
    }
  },
];
