import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyUsageComponent } from './daily-usage.component';

describe('DailyUsageComponent', () => {
  let component: DailyUsageComponent;
  let fixture: ComponentFixture<DailyUsageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyUsageComponent]
    });
    fixture = TestBed.createComponent(DailyUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
