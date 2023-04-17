import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurviellenceComponent } from './surviellence.component';

describe('SurviellenceComponent', () => {
  let component: SurviellenceComponent;
  let fixture: ComponentFixture<SurviellenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurviellenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurviellenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
