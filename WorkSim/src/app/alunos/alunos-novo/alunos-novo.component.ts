import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import 'rxjs/add/operator/finally';
import { Location } from '@angular/common';
import { EnderecoService } from '../../shared/endereco/endereco.service';
import { IUF } from '../../models/IUF';
import { IGS_municipio } from '../../models/IGS_municipio';
import { IBairros } from '../../models/IBairros';
import { IAluno } from '../../models/IAluno';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { AlunosService } from '../alunos.service';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'alunos-novo',
  templateUrl: './alunos-novo.component.html',
  styleUrls: ['./alunos-novo.component.sass']
})
export class AlunosNovoComponent implements OnInit {

  carregando = false;
  APENAS_UM_MUNICIPIO = 1;
  GRUPO_ALUNO = 3;
  PESSOA_FISICA = 'F';
  ufs: IUF[] = [];
  municipios: IGS_municipio[] = [];
  bairros: IBairros[] = [];
  aluno: IAluno = {
    gs_contato: {
      cd_pessoa: 0,
      nr_celular: '',
      nr_residencial: '',
      sq_contato: 0
    },
    gs_endereco: {
      cd_bairro: '',
      cd_municipio: '',
      cd_pessoa_endereco: 0,
      cd_uf: '',
      ds_complemento: '',
      ds_endereco: '',
      nr_cep: '',
      nr_endereco:''
    },
    gs_pessoa_fisica: {
      cd_pessoa: 0,
      dt_nascimento: '',
      ir_estado_civil: '',  
      nr_cpf: '',
      ir_sexo:''
    },
    gs_pessoa: {
      cd_pessoa: 0,
      img_pessoa: '',
      ir_pessoa: '',
      no_pessoa: ''
    },
    gs_usuario: {
      caminhoFoto: '',
      cd_pessoa: 0,
      cpf: '',
      dicaSenha: '',
      email: '',
      ir_pessoa: '',
      login: '',
      nome: '',
      no_email: '',
      no_login: '',
      no_pessoa: '',
      nr_senha: '',
      senha: '',
      sobrenome: '',
      telefone: '',
      telefoneResidencial:''
    }
  }

  constructor(private usuariosService: UsuariosService,
    private alunosService: AlunosService,
    private toastrService: ToastrService,
    private router: Router,
    private location: Location,
    private enderecoService: EnderecoService,
    private usuarioService: UsuariosService) { }

  public maskTelefone = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskFixo = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskCPF = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  ngOnInit() {
    this.obterUfs();
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

    this.usuarioService.verificarCpf(cpf)
      .subscribe((x) => {});
  }

  novoAluno() {
    this.carregando = true;
    this.aluno.gs_pessoa.ir_pessoa = this.PESSOA_FISICA;
    this.aluno.gs_pessoa_fisica.nr_cpf = this.removerCaracteresEspeciais(this.aluno.gs_pessoa_fisica.nr_cpf);

    this.alunosService.novoAluno(this.aluno)
      .finally(() => {
        this.carregando = false;
      })
      .subscribe((resultado) => {
        this.toastrService.success('Aluno cadastrado com sucesso');
        this.router.navigateByUrl('/alunos/listar');
      })
  }

  verificarEmail(email: string) {
    this.usuarioService.verificarEmailNovoCadastro(email)
      .subscribe((x) => {});
  }

  removerCaracteresEspeciais(valor) {
    if (valor)
      return valor.replace(/[^\w\s]/gi, '');
  }

  cancelar() {
    this.location.back();
  }
}

