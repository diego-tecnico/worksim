import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//const swal = require('sweetalert');

@Component({
  selector: 'empresas-listar',
  templateUrl: './empresas-listar.component.html',
  styleUrls: ['./empresas-listar.component.sass']
})
export class EmpresasListarComponent implements OnInit {

  carregando = false;
  constructor() {
  }

  ngOnInit() {
  }

}
