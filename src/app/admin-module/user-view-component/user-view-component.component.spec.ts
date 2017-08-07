import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewComponentComponent } from './user-view-component.component';

describe('UserViewComponentComponent', () => {
  let component: UserViewComponentComponent;
  let fixture: ComponentFixture<UserViewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserViewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
