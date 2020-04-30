import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Multicure180Component } from './multicure180.component';

describe('Multicure180Component', () => {
  let component: Multicure180Component;
  let fixture: ComponentFixture<Multicure180Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Multicure180Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Multicure180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
