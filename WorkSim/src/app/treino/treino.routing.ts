import {Routes} from '@angular/router';
import {TreinoNovoComponent} from './treino-novo/treino-novo.component';
import {TreinoListarComponent} from './treino-listar/treino-listar.component';

export const TreinoRoute: Routes = [
  {
    path: 'novo',
    component: TreinoNovoComponent,
    data: {
      hide: true
    }
  },
  {
    path: 'listar',
    component: TreinoListarComponent,
    data: {
      hide: true
    }
  },
];
