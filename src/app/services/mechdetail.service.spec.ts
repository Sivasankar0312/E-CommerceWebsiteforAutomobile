import { TestBed } from '@angular/core/testing';

import { MechdetailService } from './mechdetail.service';

describe('MechdetailService', () => {
  let service: MechdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MechdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
