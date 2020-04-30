import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mfgpro230XSComponent } from './mfgpro230-x-s.component';

describe('Mfgpro230XSComponent', () => {
  let component: Mfgpro230XSComponent;
  let fixture: ComponentFixture<Mfgpro230XSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mfgpro230XSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mfgpro230XSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
