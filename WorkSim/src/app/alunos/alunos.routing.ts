import { Routes } from '@angular/router';
import { AlunosNovoComponent } from './alunos-novo/alunos-novo.component';
import { AlunosListarComponent } from './alunos-listar/alunos-listar.component';
import { AlunosEditarComponent } from './alunos-editar/alunos-editar.component';

export const AlunosRoutes: Routes = [
  // {
  //     path: '',
  //     redirectTo: 'perfil',
  //     pathMatch: 'full'
  // },
  {
    path: 'listar',
    component: AlunosListarComponent,
    data: {
      hide: true
    }
  },
  {
    path: 'novo',
    component: AlunosNovoComponent,
    data: {
      hide: true
    }
  },
  {
    path: ':id/editar',
    component: AlunosEditarComponent,
    data: {
      hide: true
    }
  }
];
