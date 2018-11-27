import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadosListarComponent } from './chamados-listar.component';

describe('ChamadosListarComponent', () => {
  let component: ChamadosListarComponent ;
  let fixture: ComponentFixture<ChamadosListarComponent >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChamadosListarComponent  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadosListarComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
