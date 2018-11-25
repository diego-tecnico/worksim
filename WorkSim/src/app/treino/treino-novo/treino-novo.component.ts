import { ITipo } from './../../models/ITipo';
import { Location } from '@angular/common';
import { ITreino } from './../../models/ITreino';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treino-novo',
  templateUrl: './treino-novo.component.html',
  styleUrls: ['./treino-novo.component.sass']
})
export class TreinoNovoComponent implements OnInit {
  treino:ITreino;
  tipoTreino:ITipo [] = [];
  carregando = false;

  constructor() { }

  ngOnInit() {
  }
  novoTreino(){
    
  }
  cancelar(){
  }
}
