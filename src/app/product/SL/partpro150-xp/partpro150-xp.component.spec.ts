import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Partpro150XpComponent } from './partpro150-xp.component';

describe('Partpro150XpComponent', () => {
  let component: Partpro150XpComponent;
  let fixture: ComponentFixture<Partpro150XpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Partpro150XpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Partpro150XpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
