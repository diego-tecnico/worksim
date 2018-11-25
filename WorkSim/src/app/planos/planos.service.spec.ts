import { TestBed, inject } from '@angular/core/testing';

import { PlanosService } from './planos.service';

describe('PlanosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanosService]
    });
  });

  it('should be created', inject([PlanosService], (service: PlanosService) => {
    expect(service).toBeTruthy();
  }));
});
