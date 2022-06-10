import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollEvaluatorComponent } from './roll-evaluator.component';

describe('RollEvaluatorComponent', () => {
  let component: RollEvaluatorComponent;
  let fixture: ComponentFixture<RollEvaluatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RollEvaluatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RollEvaluatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
