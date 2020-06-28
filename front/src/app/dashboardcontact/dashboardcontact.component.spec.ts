import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardcontactComponent } from './dashboardcontact.component';

describe('DashboardcontactComponent', () => {
  let component: DashboardcontactComponent;
  let fixture: ComponentFixture<DashboardcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
