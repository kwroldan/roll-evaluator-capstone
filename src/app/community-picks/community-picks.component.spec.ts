import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityPicksComponent } from './community-picks.component';

describe('CommunityPicksComponent', () => {
  let component: CommunityPicksComponent;
  let fixture: ComponentFixture<CommunityPicksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityPicksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityPicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
