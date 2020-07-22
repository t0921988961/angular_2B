import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintServiceContentComponent } from './print-service-content.component';

describe('PrintServiceContentComponent', () => {
  let component: PrintServiceContentComponent;
  let fixture: ComponentFixture<PrintServiceContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintServiceContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintServiceContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
