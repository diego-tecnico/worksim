import { Component, OnInit } from '@angular/core';
import { IProduto } from '../../models/IProduto';
import { ICategoria } from '../../models/ICategoria';

@Component({
  selector: 'app-produto-editar',
  templateUrl: './produto-editar.component.html',
  styleUrls: ['./produto-editar.component.sass']
})
export class ProdutoEditarComponent implements OnInit {
  produto: IProduto = {};
  carregando = false;
  categorias: ICategoria[] = [];
  constructor() { }

  ngOnInit() {
  }

}
