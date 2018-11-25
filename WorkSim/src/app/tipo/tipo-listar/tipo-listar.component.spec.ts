import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoListarComponent } from './tipo-listar.component';

describe('TipoListarComponent', () => {
  let component: TipoListarComponent;
  let fixture: ComponentFixture<TipoListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
