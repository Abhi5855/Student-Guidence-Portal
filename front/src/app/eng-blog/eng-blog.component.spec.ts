import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngBlogComponent } from './eng-blog.component';

describe('EngBlogComponent', () => {
  let component: EngBlogComponent;
  let fixture: ComponentFixture<EngBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
