import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioFinalizarCadastroComponent } from './usuario-finalizar-cadastro.component';

describe('UsuarioFinalizarCadastroComponent', () => {
  let component: UsuarioFinalizarCadastroComponent;
  let fixture: ComponentFixture<UsuarioFinalizarCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioFinalizarCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioFinalizarCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
