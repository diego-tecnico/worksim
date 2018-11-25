import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioConfiguracaoComponent } from './usuario-configuracao.component';

describe('UsuarioConfiguracaoComponent', () => {
  let component: UsuarioConfiguracaoComponent;
  let fixture: ComponentFixture<UsuarioConfiguracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioConfiguracaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioConfiguracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
