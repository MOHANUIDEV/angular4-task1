import { TestBed, inject } from '@angular/core/testing';

import { DataSoreService } from './data-sore.service';

describe('DataSoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataSoreService]
    });
  });

  it('should be created', inject([DataSoreService], (service: DataSoreService) => {
    expect(service).toBeTruthy();
  }));
});
