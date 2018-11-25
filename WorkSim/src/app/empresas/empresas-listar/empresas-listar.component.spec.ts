import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasListarComponent } from './empresas-listar.component';

describe('EmpresasListarComponent', () => {
  let component: EmpresasListarComponent;
  let fixture: ComponentFixture<EmpresasListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmpresasListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresasListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
