import { TestBed } from '@angular/core/testing';

import { FeaturedWeaponService } from './featured-weapon.service';

describe('FeaturedWeaponService', () => {
  let service: FeaturedWeaponService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturedWeaponService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
