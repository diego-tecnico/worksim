import { Component, OnInit } from '@angular/core';
import { PesquisarChamadosService } from '../pages/pesquisar-chamados/pesquisar-chamados.service';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  constructor(public pesquisarChamadosService: PesquisarChamadosService) { }

  setores = [];

  ngOnInit() {
    this.pesquisarChamadosService.obterSetores()
      .subscribe(x => this.setores = x.setores);
  }

}
