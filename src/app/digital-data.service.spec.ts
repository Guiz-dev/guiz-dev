import { TestBed } from '@angular/core/testing';

import { DigitalDataService } from './digital-data.service';

describe('DigitalDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DigitalDataService = TestBed.get(DigitalDataService);
    expect(service).toBeTruthy();
  });
});
