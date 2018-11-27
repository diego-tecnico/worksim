import { Routes } from '@angular/router';
import { UsuarioPainelComponent } from './usuario-perfil/usuario-perfil.component';
import { UsuarioSenhaComponent } from './usuario-senha/usuario-senha.component';
import { UsuarioConfiguracaoComponent } from './usuario-configuracao/usuario-configuracao.component';
import { UsuarioListarComponent } from './usuario-listar/usuario-listar.component';
import { UsuarioNovoComponent } from './usuario-novo/usuario-novo.component';
import { UsuariosEditarComponent } from './usuarios-editar/usuarios-editar.component';

export const UsuariosRoutes: Routes = [
  // {
  //     path: '',
  //     redirectTo: 'perfil',
  //     pathMatch: 'full'
  // },

  {
    path: 'listar',
    component: UsuarioListarComponent,
    data: {
      hide: true
    }
  },
  {
    path: 'novo',
    component: UsuarioNovoComponent,
    data: {
      hide: true
    }
  },
  {
    path: ':id/editar',
    component: UsuariosEditarComponent,
    data: {
      hide: true
    }
  },
  {
    path: 'senha',
    component: UsuarioSenhaComponent,
    data: {
      hide: true
    }
  },
  {
    path: 'config',
    component: UsuarioConfiguracaoComponent,
    data: {
      hide: true
    }
  }
 
];
