import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasestudyContentComponent } from './casestudy-content.component';

describe('CasestudyContentComponent', () => {
  let component: CasestudyContentComponent;
  let fixture: ComponentFixture<CasestudyContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasestudyContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasestudyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
