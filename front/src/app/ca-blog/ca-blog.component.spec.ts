import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaBlogComponent } from './ca-blog.component';

describe('CaBlogComponent', () => {
  let component: CaBlogComponent;
  let fixture: ComponentFixture<CaBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
