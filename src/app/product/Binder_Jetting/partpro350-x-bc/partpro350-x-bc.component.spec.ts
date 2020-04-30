import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Partpro350XBCComponent } from './partpro350-x-bc.component';

describe('Partpro350XBCComponent', () => {
  let component: Partpro350XBCComponent;
  let fixture: ComponentFixture<Partpro350XBCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Partpro350XBCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Partpro350XBCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
