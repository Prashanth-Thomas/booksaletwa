import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalLibComponent } from './personal-lib.component';

describe('PersonalLibComponent', () => {
  let component: PersonalLibComponent;
  let fixture: ComponentFixture<PersonalLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
