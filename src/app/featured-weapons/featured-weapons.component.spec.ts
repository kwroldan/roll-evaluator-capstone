import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedWeaponsComponent } from './featured-weapons.component';

describe('FeaturedWeaponsComponent', () => {
  let component: FeaturedWeaponsComponent;
  let fixture: ComponentFixture<FeaturedWeaponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedWeaponsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedWeaponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
