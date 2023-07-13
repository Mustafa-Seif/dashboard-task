import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickStatsComponent } from './quick-stats.component';

describe('QuickStatsComponent', () => {
  let component: QuickStatsComponent;
  let fixture: ComponentFixture<QuickStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuickStatsComponent]
    });
    fixture = TestBed.createComponent(QuickStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
