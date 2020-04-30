import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Partpro100XPComponent } from './partpro100-x-p.component';

describe('Partpro100XPComponent', () => {
  let component: Partpro100XPComponent;
  let fixture: ComponentFixture<Partpro100XPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Partpro100XPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Partpro100XPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
