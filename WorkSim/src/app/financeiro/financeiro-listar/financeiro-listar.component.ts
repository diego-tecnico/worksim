import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financeiro-listar',
  templateUrl: './financeiro-listar.component.html',
  styleUrls: ['./financeiro-listar.component.sass']
})
export class FinanceiroListarComponent implements OnInit {
  carregando = false;
  
  constructor() { }

  ngOnInit() {
  }

}
