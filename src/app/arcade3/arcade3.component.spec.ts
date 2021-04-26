import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arcade3Component } from './arcade3.component';

describe('Arcade3Component', () => {
  let component: Arcade3Component;
  let fixture: ComponentFixture<Arcade3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Arcade3Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Arcade3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
