import { TestBed } from '@angular/core/testing';

import { ConsumerAnalyticsDataService } from './consumer-analytics-data.service';

describe('ConsumerAnalyticsDataService', () => {
  let service: ConsumerAnalyticsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumerAnalyticsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
