import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeInformationComponent } from './real-time-information.component';

describe('RealTimeInformationComponent', () => {
  let component: RealTimeInformationComponent;
  let fixture: ComponentFixture<RealTimeInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealTimeInformationComponent]
    });
    fixture = TestBed.createComponent(RealTimeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
