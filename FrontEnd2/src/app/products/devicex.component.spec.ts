import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicexComponent } from './devicex.component';

describe('DevicexComponent', () => {
  let component: DevicexComponent;
  let fixture: ComponentFixture<DevicexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
