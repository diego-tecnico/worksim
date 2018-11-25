import { TipoListarComponent } from './../tipo-listar/tipo-listar.component';
import { Component, OnInit } from '@angular/core';
import { ITipo } from '../../models/ITipo';

@Component({
  selector: 'app-tipo-novo',
  templateUrl: './tipo-novo.component.html',
  styleUrls: ['./tipo-novo.component.sass']
})
export class TipoNovoComponent implements OnInit {
  tipo: ITipo[] = [];

  carregando = false;
  constructor() { }

  ngOnInit() {
  }
  novoTipo(){
    
  }
  cancelar(){

  }

}

