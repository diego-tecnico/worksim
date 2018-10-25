import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarChamadosComponent } from './pesquisar-chamados.component';

describe('PesquisarChamadosComponent', () => {
  let component: PesquisarChamadosComponent;
  let fixture: ComponentFixture<PesquisarChamadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PesquisarChamadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarChamadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
