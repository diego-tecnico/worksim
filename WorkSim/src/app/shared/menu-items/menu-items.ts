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
    label: 'Chamado',
    state: 'worksim',
    icon: 'fa-th-large',
    main: [
      {
        main_state: 'chamados',
        state: 'listar',
        name: 'Chamados',
        title: 'Chamados',
        type: 'link',
        icon: 'fa-users'
      }
    ]
  },
  {
    label: 'Gerenciar',
    icon: 'fa-pencil-square-o',
    main: [
      {
        main_state: 'usuarios',
        state: 'listar',
        name: 'Colaboradores',
        title: 'Colaboradores',
        type: 'link',
        icon: 'fa-users'
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
      .filter(x => x.label !== 'Gerenciar' && x.label !== 'Chamado');
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
