import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailComponentComponent } from './book-detail-component.component';

describe('BookDetailComponentComponent', () => {
  let component: BookDetailComponentComponent;
  let fixture: ComponentFixture<BookDetailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
