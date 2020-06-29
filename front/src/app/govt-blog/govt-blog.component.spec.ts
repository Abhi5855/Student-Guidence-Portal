import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovtBlogComponent } from './govt-blog.component';

describe('GovtBlogComponent', () => {
  let component: GovtBlogComponent;
  let fixture: ComponentFixture<GovtBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovtBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovtBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
