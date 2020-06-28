import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardaboutComponent } from './dashboardabout.component';

describe('DashboardaboutComponent', () => {
  let component: DashboardaboutComponent;
  let fixture: ComponentFixture<DashboardaboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardaboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
