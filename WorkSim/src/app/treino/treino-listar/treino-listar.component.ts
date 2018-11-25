import { Component, OnInit } from '@angular/core';
import {ITreino} from '../../models/ITreino';
@Component({
  selector: 'app-treino-listar',
  templateUrl: './treino-listar.component.html',
  styleUrls: ['./treino-listar.component.sass']
})
export class TreinoListarComponent implements OnInit {
  treinos:ITreino [] = [];
  carregando = false;
  constructor() { }

  ngOnInit() {
  }

}
