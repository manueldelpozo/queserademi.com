import { TestBed, inject } from '@angular/core/testing';

import { QsdmServiceService } from './qsdm-service.service';

describe('QsdmServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QsdmServiceService]
    });
  });

  it('should be created', inject([QsdmServiceService], (service: QsdmServiceService) => {
    expect(service).toBeTruthy();
  }));
});
