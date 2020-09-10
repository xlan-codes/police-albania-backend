import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingLocationComponent } from './tracking-location.component';

describe('TrackingLocationComponent', () => {
  let component: TrackingLocationComponent;
  let fixture: ComponentFixture<TrackingLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
