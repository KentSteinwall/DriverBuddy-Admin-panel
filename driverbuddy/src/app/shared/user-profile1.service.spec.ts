import { TestBed } from '@angular/core/testing';

import { DriverService  } from './user-profile1.service';

describe('UserProfile1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DriverService  = TestBed.get(DriverService );
    expect(service).toBeTruthy();
  });
});
