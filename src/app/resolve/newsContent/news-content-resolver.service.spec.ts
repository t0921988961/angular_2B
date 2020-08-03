import { TestBed } from '@angular/core/testing';

import { NewsContentResolverService } from './news-content-resolver.service';

describe('NewsContentResolverService', () => {
  let service: NewsContentResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsContentResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
