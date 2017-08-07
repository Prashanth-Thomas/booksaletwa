import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserItemComponentComponent } from './user-item-component.component';

describe('UserItemComponentComponent', () => {
  let component: UserItemComponentComponent;
  let fixture: ComponentFixture<UserItemComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserItemComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
