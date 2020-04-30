import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Partpro300XTComponent } from './partpro300-x-t.component';

describe('Partpro300XTComponent', () => {
  let component: Partpro300XTComponent;
  let fixture: ComponentFixture<Partpro300XTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Partpro300XTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Partpro300XTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
