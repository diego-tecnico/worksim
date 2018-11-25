import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUsuario } from '../../models/IUsuario';
import 'rxjs/add/operator/finally';
import { Location } from '@angular/common';
import { window } from 'rxjs/operators';
import { IUsuarios, ISetor } from '../../models/IFiltroUsuario';
import { UsuariosService } from '../usuarios.service';
import { SetorService } from '../../setor/setor.service';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'usuarios-editar',
  templateUrl: './usuarios-editar.component.html',
  styleUrls: ['./usuarios-editar.component.sass']
})
export class UsuariosEditarComponent implements OnInit {

  carregando = false;
  usuario: IUsuarios = {};
  setores: ISetor[] = [];

  constructor(private usuariosService: UsuariosService,
    private setorService: SetorService,
    private toastrService: ToastrService,
    private router: Router,
    private location: Location,
    private activeRoute: ActivatedRoute) { }

  public maskTelefone = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskFixo = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskCPF = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  ngOnInit() {
    this.carregando = true;
    this.obterSetores();
    this.activeRoute.params.subscribe((n) => {
      this.obterUsuario(n.id);
    })
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

  obterUsuario(Id: number) {
    this.usuariosService.obterColaborador(Id)
          .subscribe((x) => {
            this.usuario = x.usuario;
            console.log(this.usuario);
          })
  }


  editarUsuario() {
    this.carregando = true;

    this.usuariosService.editarColaborador(this.usuario)
      .finally(() => {
        this.carregando = false;
      })
      .subscribe((x) => {
        console.log(x);
          this.toastrService.success(x.message);
          this.router.navigateByUrl('/usuarios/listar');

      })
  }

  //verificarEmail(email: string) {
  //  this.usuariosService.verificarEmailNovoCadastro(email)
  //    .subscribe((x) => {
  //      const msg = x.okMessage;
  //      if (msg) {
  //        console.log(msg);
  //      }
  //    });
  //}

  cancelar() {
    this.location.back();
  }
}
