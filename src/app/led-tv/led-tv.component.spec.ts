import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedTvComponent } from './led-tv.component';

describe('LedTvComponent', () => {
  let component: LedTvComponent;
  let fixture: ComponentFixture<LedTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedTvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LedTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
