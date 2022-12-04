import { TestBed } from '@angular/core/testing';

import { StockdetailsService } from './stockdetails.service';

describe('StockdetailsService', () => {
  let service: StockdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
