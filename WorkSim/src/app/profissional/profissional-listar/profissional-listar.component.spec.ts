import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionalListarComponent } from './profissional-listar.component';

describe('ProfissionalListarComponent', () => {
  let component: ProfissionalListarComponent;
  let fixture: ComponentFixture<ProfissionalListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfissionalListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfissionalListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
