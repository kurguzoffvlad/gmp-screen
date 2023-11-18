import { TestBed } from '@angular/core/testing';

import { GmpScreenService } from './gmp-screen.service';

describe('GmpScreenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GmpScreenService = TestBed.get(GmpScreenService);
    expect(service).toBeTruthy();
  });
});
