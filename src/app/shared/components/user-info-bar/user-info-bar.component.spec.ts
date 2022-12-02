import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoBarComponent } from './user-info-bar.component';

describe('UserInfoBarComponent', () => {
  let component: UserInfoBarComponent;
  let fixture: ComponentFixture<UserInfoBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInfoBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInfoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
