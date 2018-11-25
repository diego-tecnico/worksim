import { IPlano } from './../../models/IPlano';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plano-listar',
  templateUrl: './plano-listar.component.html',
  styleUrls: ['./plano-listar.component.sass']
})
export class PlanoListarComponent implements OnInit {
  carregando = false;
  planos: IPlano[] = [];
  constructor() { }

  ngOnInit() {
  }

}
