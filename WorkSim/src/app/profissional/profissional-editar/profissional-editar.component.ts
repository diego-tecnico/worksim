import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { GruposService } from '../../grupos/grupos.service';
import { EnderecoService } from '../../shared/endereco/endereco.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { IGrupo } from '../../models/IGrupo';
import { IProfissional } from '../../models/IProfissional';
import { IBairros } from '../../models/IBairros';
import { IGS_municipio } from '../../models/IGS_municipio';
import { IUF } from '../../models/IUF';
import { ProfissionalService } from '../profissional.service';

@Component({
  selector: 'app-profissional-editar',
  templateUrl: './profissional-editar.component.html',
  styleUrls: ['./profissional-editar.component.sass']
})
export class ProfissionalEditarComponent implements OnInit {

  ID = 0;
  carregando = false;
  APENAS_UM_MUNICIPIO = 1;
  GRUPO_FUNCIONARIO = 3;
  PESSOA_FISICA = 'F';
  ufs: IUF[] = [];
  municipios: IGS_municipio[] = [];
  bairros: IBairros[] = [];
  profissional: IProfissional = {
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
      nr_endereco: ''
    },
    gs_pessoa_fisica: {
      cd_pessoa: 0,
      dt_nascimento: '',
      ir_estado_civil: '',
      nr_cpf: '',
      ir_sexo: ''
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
      telefoneResidencial: ''
    },
    gs_grupo: {
      no_grupo: '',
      sq_grupo: 0
    }
  }

  public maskTelefone = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskFixo = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskCPF = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];


  grupos: IGrupo[] = [];

  constructor(private toastrService: ToastrService,
    private router: Router,
    private enderecoService: EnderecoService,
    private gruposService: GruposService,
    private profissionalService: ProfissionalService,
    private usuarioService: UsuariosService,
    private location: Location,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.obterUfs();
    this.obterGrupos();
    this.activeRoute.params.subscribe((n) => {
      this.buscarDadosFuncionario(n.id);
    })
  }

  obterUfs() {
    this.enderecoService.obterUfs()
      .subscribe((ufs) => {
        this.ufs = ufs;
      });
  }

  obterMunicipios(uf: string) {
    console.log(uf);
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
          this.profissional.gs_endereco.cd_bairro = this.bairros[0].cd_bairro;
        }
      });
  }

  verificarCpf(cpf: string) {

    cpf = this.removerCaracteresEspeciais(cpf);

    this.usuarioService.verificarCpf(cpf)
      .subscribe((x) => {
        const msg = x.okMessage;
        if (msg) {
          console.log(msg);
        }
      });
  }

  editarProfissional() {
    this.carregando = true;
    this.profissional.gs_pessoa.ir_pessoa = this.PESSOA_FISICA;
    this.profissional.gs_pessoa_fisica.nr_cpf = this.removerCaracteresEspeciais(this.profissional.gs_pessoa_fisica.nr_cpf);
    this.profissionalService.editarProfissional(this.profissional.gs_pessoa.cd_pessoa,this.profissional)
      .finally(() => {
        this.carregando = false;
      })
      .subscribe((x) => {
        this.toastrService.success(x.message);
        this.router.navigateByUrl('/profissional/listar');
      })
  }

  verificarEmail(email: string) {
    this.usuarioService.verificarEmailNovoCadastro(email)
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
  obterGrupos(){
    this.gruposService.obterGruposFiltrados()
      .subscribe((x) => {
        this.grupos = x;
        console.log(this.grupos);
      })
  }
  private buscarDadosFuncionario(id) {
    this.carregando = true;

    this.profissionalService.obterProfissional(id)
      .finally(() => {
        this.carregando = false;
      })
      .subscribe((x) => {
        this.profissional = x.profissional as IProfissional;
      });
  }

}
