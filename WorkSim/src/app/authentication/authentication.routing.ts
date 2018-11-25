import { Routes } from '@angular/router';
import { UsuarioEsqueciSenhaComponent } from './usuario-esqueci-senha/usuario-esqueci-senha.component';
import { UsuarioNovoComponent } from './usuario-novo/usuario-novo.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
        data: {
          breadcrumb: 'Login'
        }
      },
      {
        path: 'esqueci-senha',
        component: UsuarioEsqueciSenhaComponent,
        data: {
          hide: true
        }
      },
      {
        path: 'novo-usuario',
        component: UsuarioNovoComponent,
        data: {
          hide: true
        }
      }
    ]
  }
];
