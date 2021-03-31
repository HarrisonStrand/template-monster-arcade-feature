import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arcade2Component } from './arcade2.component';

describe('Arcade2Component', () => {
  let component: Arcade2Component;
  let fixture: ComponentFixture<Arcade2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arcade2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Arcade2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
