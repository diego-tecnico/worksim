import { TestBed, inject } from '@angular/core/testing';

import { TreinoService } from './treino.service';

describe('TreinoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TreinoService]
    });
  });

  it('should be created', inject([TreinoService], (service: TreinoService) => {
    expect(service).toBeTruthy();
  }));
});
