import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerHeaderComponent } from './server-header.component';

describe('ServerHeaderComponent', () => {
  let component: ServerHeaderComponent;
  let fixture: ComponentFixture<ServerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
