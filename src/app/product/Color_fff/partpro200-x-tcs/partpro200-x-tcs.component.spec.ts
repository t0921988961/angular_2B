import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Partpro200XTCSComponent } from './partpro200-x-tcs.component';

describe('Partpro200XTCSComponent', () => {
  let component: Partpro200XTCSComponent;
  let fixture: ComponentFixture<Partpro200XTCSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Partpro200XTCSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Partpro200XTCSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
