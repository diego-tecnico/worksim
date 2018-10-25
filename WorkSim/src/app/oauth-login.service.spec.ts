import { TestBed, inject } from '@angular/core/testing';

import { OAuthLoginService } from './oauth-login.service';

describe('OAuthLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OAuthLoginService]
    });
  });

  it('should be created', inject([OAuthLoginService], (service: OAuthLoginService) => {
    expect(service).toBeTruthy();
  }));
});
