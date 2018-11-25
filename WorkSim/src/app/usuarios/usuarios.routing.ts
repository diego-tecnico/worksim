import { Routes } from '@angular/router';
import { UsuarioPainelComponent } from './usuario-perfil/usuario-perfil.component';
import { UsuarioSenhaComponent } from './usuario-senha/usuario-senha.component';
import { UsuarioConfiguracaoComponent } from './usuario-configuracao/usuario-configuracao.component';
import { UsuarioFinalizarCadastroComponent } from './usuario-finalizar-cadastro/usuario-finalizar-cadastro.component';

export const UsuariosRoutes: Routes = [
  // {
  //     path: '',
  //     redirectTo: 'perfil',
  //     pathMatch: 'full'
  // },
  {
    path: 'finalizar-cadastro',
    component: UsuarioFinalizarCadastroComponent,
    data: {
      hide: true
    }
  },
  {
    path: 'editar',
    component: UsuarioPainelComponent,
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
