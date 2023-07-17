import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGridComponent } from './test-grid.component';

describe('TestGridComponent', () => {
  let component: TestGridComponent;
  let fixture: ComponentFixture<TestGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestGridComponent]
    });
    fixture = TestBed.createComponent(TestGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});