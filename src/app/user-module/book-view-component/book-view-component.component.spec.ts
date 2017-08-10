import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookViewComponentComponent } from './book-view-component.component';

describe('BookViewComponentComponent', () => {
  let component: BookViewComponentComponent;
  let fixture: ComponentFixture<BookViewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookViewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
