import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardgalleryComponent } from './dashboardgallery.component';

describe('DashboardgalleryComponent', () => {
  let component: DashboardgalleryComponent;
  let fixture: ComponentFixture<DashboardgalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardgalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
