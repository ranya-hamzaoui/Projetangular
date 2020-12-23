import { TestBed } from '@angular/core/testing';

import { MyproduitService } from './myproduit.service';

describe('MyproduitService', () => {
  let service: MyproduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyproduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
