import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eeezcure180Component } from './eeezcure180.component';

describe('Eeezcure180Component', () => {
  let component: Eeezcure180Component;
  let fixture: ComponentFixture<Eeezcure180Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eeezcure180Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eeezcure180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
