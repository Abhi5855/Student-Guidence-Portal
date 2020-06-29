import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocBlogComponent } from './doc-blog.component';

describe('DocBlogComponent', () => {
  let component: DocBlogComponent;
  let fixture: ComponentFixture<DocBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
