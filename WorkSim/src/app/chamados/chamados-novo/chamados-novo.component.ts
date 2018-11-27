import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import 'rxjs/add/operator/finally';
import { Location } from '@angular/common';
import { IUsuarios, ISetor } from '../../models/IFiltroUsuario';
import { SetorService } from '../../setor/setor.service';

declare var $: any;
declare var jQuery: any;


@Component({
  selector: 'pdg-chamados-novo',
  templateUrl: './chamados-novo.component.html',
  styleUrls: ['./chamados-novo.component.sass']
})
export class ChamadosNovoComponent implements OnInit {

  carregando = false;
  usuario: IUsuarios = {};
  setores: ISetor[] = [];


  constructor(private toastrService: ToastrService,
    private router: Router,
    private setorService: SetorService,
    private location: Location) { }

  public maskTelefone = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskFixo = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskCPF = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  ngOnInit() {
    //this.obterSetores();
  }


  obterSetores() {
    this.carregando = true;

    this.setorService.obterSetores()
      .finally(() => {
        this.carregando = false;
      })
      .subscribe((x) => {
        this.setores = x.setores;
      })
  }


  novoUsuario() {
    this.carregando = true;

    //this.usuariosService.inserirUsuario(this.usuario)
    //  .finally(() => {
    //    this.carregando = false;
    //  })
    //  .subscribe((resultado) => {
    //    this.toastrService.success("Usuário cadastrado com sucesso.");
    //    this.router.navigateByUrl('usuarios/listar');
    //  });
  }
  cancelar() {
    this.location.back();
  }
}
