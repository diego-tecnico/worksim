import {Component, OnInit} from '@angular/core';
import {PlanosService} from '../planos.service';
import {Location} from '@angular/common';
import {IPlano} from '../../models/IPlano';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'planos-novo',
  templateUrl: './plano-novo.component.html',
  styleUrls: ['./plano-novo.component.sass']
})
export class PlanoNovoComponent implements OnInit {

  carregando = false;

  plano: IPlano = {
    no_plano: "",
    ee_ativo:true,
    sq_plano: 0,
  cd_pessoa_filial:0
  }

  constructor(private planosService: PlanosService ,
              private location: Location) { }

  ngOnInit() {
  }

  novoPlano(){
    this.planosService.novoPlano(this.plano);
  }

  cancelar(){
    this.location.back();
  }
}
