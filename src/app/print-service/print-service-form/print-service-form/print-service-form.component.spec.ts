import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintServiceFormComponent } from './print-service-form.component';

describe('PrintServiceFormComponent', () => {
  let component: PrintServiceFormComponent;
  let fixture: ComponentFixture<PrintServiceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintServiceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
