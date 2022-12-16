import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverViewComponent } from './discover-view.component';

describe('DiscoverViewComponent', () => {
  let component: DiscoverViewComponent;
  let fixture: ComponentFixture<DiscoverViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
