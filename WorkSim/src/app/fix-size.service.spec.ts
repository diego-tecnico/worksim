import { TestBed, inject } from '@angular/core/testing';

import { FixSizeService } from './fix-size.service';

describe('FixSizeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FixSizeService]
    });
  });

  it('should be created', inject([FixSizeService], (service: FixSizeService) => {
    expect(service).toBeTruthy();
  }));
});
