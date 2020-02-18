import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightPinkComponent } from './light-pink.component';

describe('LightPinkComponent', () => {
  let component: LightPinkComponent;
  let fixture: ComponentFixture<LightPinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightPinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightPinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
