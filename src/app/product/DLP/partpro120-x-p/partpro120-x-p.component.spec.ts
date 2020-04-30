import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Partpro120XPComponent } from './partpro120-x-p.component';

describe('Partpro120XPComponent', () => {
  let component: Partpro120XPComponent;
  let fixture: ComponentFixture<Partpro120XPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Partpro120XPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Partpro120XPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
