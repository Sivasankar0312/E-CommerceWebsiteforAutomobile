import { TestBed } from '@angular/core/testing';

import { GooleApiService } from './goole-api.service';

describe('GooleApiService', () => {
  let service: GooleApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GooleApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
