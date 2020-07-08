import { TestBed } from '@angular/core/testing';

import { CaseContentResolveService } from './case-content-resolve.service';

describe('CaseContentResolveService', () => {
  let service: CaseContentResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaseContentResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
