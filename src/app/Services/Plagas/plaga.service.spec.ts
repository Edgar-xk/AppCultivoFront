import { TestBed } from '@angular/core/testing';

import { PlagaService } from './plaga.service';

describe('PlagaService', () => {
  let service: PlagaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlagaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
