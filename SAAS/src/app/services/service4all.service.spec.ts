import { TestBed } from '@angular/core/testing';

import { Service4allService } from './service4all.service';

describe('Service4allService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Service4allService = TestBed.get(Service4allService);
    expect(service).toBeTruthy();
  });
});
