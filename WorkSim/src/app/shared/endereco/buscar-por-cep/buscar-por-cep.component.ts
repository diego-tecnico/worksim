import { EnderecoService } from './../endereco.service';
import { ToastrService } from 'ngx-toastr';
import { IBuscarPorCep } from './../../../models/IBuscarPorCep';
import { DashboardService } from './../../../dashboard/dashboard.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

declare var $: any;
declare var jQuery: any;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pdg-buscar-por-cep',
  templateUrl: './buscar-por-cep.component.html',
  styleUrls: ['./buscar-por-cep.component.sass']
})
export class BuscarPorCepComponent implements OnInit {

  @Output() endereco = new EventEmitter();
  @Input() cepPerfil;
  pesquisarPorCep = false;
  @Input() cep: string;
  QUANTIDADE_DE_CARACTERES_CEP = 9;

  public maskCEP = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

  constructor(private enderecoService: EnderecoService,
              private toastrService: ToastrService) { }

  ngOnInit() {
    this.pesquisarPorCep = false;
  }

  buscarEnderecoPorCep() {
    if (this.cep.length === this.QUANTIDADE_DE_CARACTERES_CEP) {

    this.pesquisarPorCep = true;
    this.enderecoService.buscarPorCep(this.cep)
        .finally(() => {
          this.pesquisarPorCep = false;
        })
        .subscribe((endereco) => {
          endereco.cep = this.cep;
          this.endereco.emit(endereco);
        }, error => {
          this.toastrService.warning('Não conseguimos encontrar o cep informado, tente novamente !', 'Comunicação');
        });
    }
  }

}
