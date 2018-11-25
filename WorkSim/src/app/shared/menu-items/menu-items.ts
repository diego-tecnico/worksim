import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

// fa-ravelry - RADAR
// fa-connectdevelop - INFINITY

const MENUITEMS = [
  {
    label: 'Módulos do Cross',
    state: 'cross',
    icon: 'fa-th-large',
    main: [
      {
        main_state: 'usuarios',
        state: 'listar',
        name: 'Colaboradores',
        title: 'Colaboradores',
        type: 'link',
        icon: 'fa-users'
      }
      //{
      //  main_state: 'treino',
      //  state: 'tipo-treino',
      //  name: 'TipoTreino',
      //  title: 'Tipo treino',
      //  type: 'link',
      //  icon: 'fa-users'
      //},
      //{
      //  main_state: 'profissional',
      //  state: 'listar',
      //  name: 'Profissional',
      //  title: 'Profissional',
      //  type: 'link',
      //  icon: 'fa-users'
      //},
      //{
      //  main_state: 'planos',
      //  state: 'listar',
      //  name: 'Planos',
      //  title: 'Planos',
      //  type: 'link',
      //  icon: 'fa-columns'
      //},
      //{
      //  main_state: 'tipo',
      //  state: 'listar',
      //  name: 'Tipo de treinos',
      //  title: 'Tipo de Treinos',
      //  type: 'link',
      //  icon: 'fa-archive'
      //},
      //{
      //  main_state: 'treino',
      //  state: 'listar',
      //  name: 'Treinos',
      //  title: 'Treinos',
      //  type: 'link',
      //  icon: 'fa-crosshairs'
      //},
      //{
      //  main_state: 'usuarios',
      //  state: 'finalizar-cadastro',
      //  name: 'Finalizar Cadastro',
      //  title: 'Finalizar Cadastro',
      //  type: 'link',
      //  icon: 'fa-users'
      //},
      //{
      //  main_state: 'categoria',
      //  state: 'listar',
      //  name: 'Categoria',
      //  title: 'Categoria',
      //  type: 'link',
      //  icon: 'fa-users'
      //}
    ]
  },
  {
    label: 'Loja',
    icon: 'fa-pencil-square-o',
    main: [
      {
        main_state: 'cross',
        state: 'dashboard',
        name: 'Itens Cantina',
        title: 'Itens Cantina',
        type: 'link',
        icon: 'fa-list-ul'
      },
      {
        main_state: 'fornecedor',
        state: 'listar',
        name: 'Fornecedor',
        title: 'Fornecedor',
        type: 'link',
        icon: 'fa-building'
      },
      {
        main_state: 'produto',
        state: 'listar',
        name: 'Produtos',
        title: 'Produtos',
        type: 'link',
        icon: 'fa-gift'
      },
      {
        main_state: 'cross',
        state: '',
        name: 'Vendas Antecipada',
        title: 'Vendas Antecipada',
        type: 'link',
        icon: 'fa-list-ol'
      }
    ]
  },
  {
    label: 'Check-IN',
    icon: 'fa-pencil-square-o',
    main: [
      {
        main_state: 'cross',
        state: 'dashboard',
        name: 'Conclusão',
        title: 'Conclusão',
        type: 'link',
        icon: 'fa-list-ul'
      },
      {
        main_state: 'cross',
        state: '',
        name: `Check-IN's do dia`,
        title: 'Registro Manual',
        type: 'link',
        icon: 'fa-list-ol'
      },
      {
        main_state: 'cross',
        state: '',
        name: 'Aula Experimental',
        title: 'Aula Experimental',
        type: 'link',
        icon: 'fa-list-ol'
      }
    ]
  },
  {
    label: 'Gerenciar',
    icon: 'fa-pencil-square-o',
    main: [
      {
        main_state: 'cross',
        state: 'dashboard',
        name: 'Estoque',
        title: 'Estoque',
        type: 'link',
        icon: 'fa-list-ul'
      },
      {
        main_state: 'financeiro',
        state: 'listar',
        name: 'Financeiro',
        title: 'Financeiro',
        type: 'link',
        icon: 'fa-dollar'
      }
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
  getDefault(): Menu[] {
    return MENUITEMS
      .filter(x => x.label !== 'Gerenciar' && x.label !== 'Parametrizar');
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
