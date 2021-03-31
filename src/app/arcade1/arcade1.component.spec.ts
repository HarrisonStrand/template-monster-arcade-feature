import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arcade1Component } from './arcade1.component';

describe('Arcade1Component', () => {
  let component: Arcade1Component;
  let fixture: ComponentFixture<Arcade1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arcade1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Arcade1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
