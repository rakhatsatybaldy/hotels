import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HookSecondComponent } from './hook-second.component';

describe('HookSecondComponent', () => {
  let component: HookSecondComponent;
  let fixture: ComponentFixture<HookSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HookSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HookSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
