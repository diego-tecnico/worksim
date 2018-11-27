import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadosNovoComponent } from './chamados-novo.component';

describe('ChamadosNovoComponent', () => {
  let component: ChamadosNovoComponent;
  let fixture: ComponentFixture<ChamadosNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChamadosNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadosNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
