import { TestBed } from '@angular/core/testing';

import { BkgserviceService } from './bkgservice.service';

describe('BkgserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BkgserviceService = TestBed.get(BkgserviceService);
    expect(service).toBeTruthy();
  });
});
