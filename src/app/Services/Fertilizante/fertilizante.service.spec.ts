import { TestBed } from '@angular/core/testing';

import { FertilizanteService } from './fertilizante.service';

describe('FertilizanteService', () => {
  let service: FertilizanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FertilizanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
