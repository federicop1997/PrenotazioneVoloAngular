import { TestBed } from '@angular/core/testing';

import { AutenticazioneAmministratoreService } from './autenticazione-amministratore.service';

describe('AutenticazioneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutenticazioneAmministratoreService = TestBed.get(AutenticazioneAmministratoreService);
    expect(service).toBeTruthy();
  });
});
