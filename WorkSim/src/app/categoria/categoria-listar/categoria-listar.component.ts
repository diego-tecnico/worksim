import { Component, OnInit } from '@angular/core';
import { ICategoria } from '../../models/ICategoria';

@Component({
  selector: 'app-categoria-listar',
  templateUrl: './categoria-listar.component.html',
  styleUrls: ['./categoria-listar.component.sass']
})
export class CategoriaListarComponent implements OnInit {
  categorias:ICategoria[] = [];
  constructor() { }

  ngOnInit() {
  }

}
