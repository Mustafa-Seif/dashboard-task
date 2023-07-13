import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RationComponent } from './ration.component';

describe('RationComponent', () => {
  let component: RationComponent;
  let fixture: ComponentFixture<RationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RationComponent]
    });
    fixture = TestBed.createComponent(RationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
