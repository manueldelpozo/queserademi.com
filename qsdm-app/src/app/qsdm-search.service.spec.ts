import { TestBed, inject } from '@angular/core/testing';

import { QsdmSearchService } from './qsdm-search.service';

describe('QsdmSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QsdmSearchService]
    });
  });

  it('should be created', inject([QsdmSearchService], (service: QsdmSearchService) => {
    expect(service).toBeTruthy();
  }));
});
