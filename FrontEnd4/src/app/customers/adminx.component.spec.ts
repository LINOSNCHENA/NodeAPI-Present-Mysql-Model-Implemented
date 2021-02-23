import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminxComponent } from './adminx.component';

describe('AdminxComponent', () => {
  let component: AdminxComponent;
  let fixture: ComponentFixture<AdminxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
