import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcadePageComponent } from './arcade-page.component';

describe('ArcadePageComponent', () => {
  let component: ArcadePageComponent;
  let fixture: ComponentFixture<ArcadePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArcadePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcadePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
