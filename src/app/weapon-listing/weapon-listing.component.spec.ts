import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponListingComponent } from './weapon-listing.component';

describe('WeaponListingComponent', () => {
  let component: WeaponListingComponent;
  let fixture: ComponentFixture<WeaponListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaponListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
