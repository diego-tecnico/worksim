import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fornecedor-listar',
  templateUrl: './fornecedor-listar.component.html',
  styleUrls: ['./fornecedor-listar.component.sass']
})
export class FornecedorListarComponent implements OnInit {
  carregando = false;
  constructor() { }

  ngOnInit() {
  }

}
