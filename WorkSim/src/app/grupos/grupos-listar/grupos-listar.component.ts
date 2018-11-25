import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//const swal = require('sweetalert');

@Component({
  selector: 'grupos-listar',
  templateUrl: './grupos-listar.component.html',
  styleUrls: ['./grupos-listar.component.sass']
})
export class GruposListarComponent implements OnInit {
  quantidadeGrupos = 0;
  carregando = false;
  constructor() {
  }

  ngOnInit() {
  }

}
