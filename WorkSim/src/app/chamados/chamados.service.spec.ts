import { TestBed, inject } from '@angular/core/testing';

import { ChamadosService } from './chamados.service';

describe('ChamadosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChamadosService]
    });
  });

  it('should be created', inject([ChamadosService], (service: ChamadosService) => {
    expect(service).toBeTruthy();
  }));
});
