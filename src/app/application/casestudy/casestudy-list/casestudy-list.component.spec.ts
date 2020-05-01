import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasestudyListComponent } from './casestudy-list.component';

describe('CasestudyListComponent', () => {
  let component: CasestudyListComponent;
  let fixture: ComponentFixture<CasestudyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasestudyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasestudyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
