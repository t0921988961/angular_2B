import { TestBed } from '@angular/core/testing';

import { ShareResolveService } from './share-resolve.service';

describe('ShareResolveService', () => {
  let service: ShareResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
