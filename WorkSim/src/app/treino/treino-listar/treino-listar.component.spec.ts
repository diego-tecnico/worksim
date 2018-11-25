import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinoListarComponent } from './treino-listar.component';

describe('TreinoListarComponent', () => {
  let component: TreinoListarComponent;
  let fixture: ComponentFixture<TreinoListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreinoListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreinoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
