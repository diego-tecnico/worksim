import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AlunosService } from '../alunos.service';
import { IUsuario } from '../../models/IUsuario';
import 'rxjs/add/operator/finally';
import {Location} from '@angular/common';
import { EnderecoService } from '../../shared/endereco/endereco.service';
import { IUF } from '../../models/IUF';
import { IGS_municipio } from '../../models/IGS_municipio';
import { IBairros } from '../../models/IBairros';
import { IPessoa } from '../../models/IPessoa';
import { IAluno } from '../../models/IAluno';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { window } from 'rxjs/operators';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'alunos-editar',
  templateUrl: './alunos-editar.component.html',
  styleUrls: ['./alunos-editar.component.sass']
})
export class AlunosEditarComponent implements OnInit {

  carregando = false;
  APENAS_UM_MUNICIPIO = 1;
  GRUPO_ALUNO = 3;
  PESSOA_FISICA = 'F';
  ufs: IUF[] = [];
  municipios: IGS_municipio[] = [];
  bairros: IBairros[] = [];
  aluno: IAluno = {
    gs_contato: {},
    gs_endereco: {},
    gs_pessoa_fisica: {},
    gs_pessoa: {},
    gs_usuario: {}
  }

  constructor(private usuariosService: UsuariosService,
    private alunoService: AlunosService,
    private toastrService: ToastrService,
    private router: Router,
    private location: Location,
    private enderecoService: EnderecoService,
    private activeRoute: ActivatedRoute) { }

  public maskTelefone = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskFixo = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskCPF = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  ngOnInit() {
    this.carregando = true;
      this.obterUfs();
      this.activeRoute.params.subscribe((n) => {
      this.obterAluno(n.id);
    })
  }

    obterAluno(Id: number) {
        this.usuariosService.obterAluno(Id)
            .subscribe((x) => {
                this.aluno = x.aluno;
                this.carregando = false;
            })
  }

  obterUfs() {
    this.enderecoService.obterUfs()
      .subscribe((ufs) => {
        this.ufs = ufs;
      });
  }

  obterMunicipios(uf: string) {
    this.enderecoService.obterMunicipios(uf)
      .subscribe((municipios) => {
        this.municipios = municipios;
        if (this.municipios.length == this.APENAS_UM_MUNICIPIO) {
          this.obterBairros(this.municipios[0].cd_municipio);
        }
      });
  }

  obterBairros(municipio: string) {
    this.enderecoService.obterBairros(municipio)
      .subscribe((bairros) => {
        this.bairros = bairros;
        if (this.bairros) {
           this.aluno.gs_endereco.cd_bairro = this.bairros[0].cd_bairro;
        }
      });
  }

  verificarCpf(cpf: string) {
    cpf = this.removerCaracteresEspeciais(cpf);

      this.usuariosService.verificarCpf(cpf)
      .subscribe((x) => {
        const msg = x.okMessage;
        if (msg) {
          console.log(msg);
        }
      });
  }

  editarAluno() {
    this.carregando = true;
    this.aluno.gs_pessoa.ir_pessoa = this.PESSOA_FISICA;
    this.aluno.gs_pessoa_fisica.nr_cpf = this.removerCaracteresEspeciais(this.aluno.gs_pessoa_fisica.nr_cpf);

    this.alunoService.editarAluno(this.aluno.gs_pessoa.cd_pessoa, this.aluno)
      .finally(() => {
        this.carregando = false;
      })
      .subscribe((x) => {
        if (x.ok == true) {
          this.toastrService.success(x.message);
          this.router.navigateByUrl('/alunos/listar');
        }
        else {
          this.toastrService.error(x);
        }
      })
  }
  verificarEmail(email: string) {
    this.usuariosService.verificarEmailNovoCadastro(email)
      .subscribe((x) => {
        const msg = x.okMessage;
        if (msg) {
          console.log(msg);
        }
      });
  }

  removerCaracteresEspeciais(valor) {
    if (valor)
      return valor.replace(/[^\w\s]/gi, '');
  }

  cancelar() {
    this.location.back();
  }
}
