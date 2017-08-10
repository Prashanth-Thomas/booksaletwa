import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookItemComponentComponent } from './book-item-component.component';

describe('BookItemComponentComponent', () => {
  let component: BookItemComponentComponent;
  let fixture: ComponentFixture<BookItemComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookItemComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
