import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicLibComponent } from './public-lib.component';

describe('PublicLibComponent', () => {
  let component: PublicLibComponent;
  let fixture: ComponentFixture<PublicLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
