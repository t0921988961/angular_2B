import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Castpro100XPComponent } from './castpro100-x-p.component';

describe('Castpro100XPComponent', () => {
  let component: Castpro100XPComponent;
  let fixture: ComponentFixture<Castpro100XPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Castpro100XPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Castpro100XPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
