import { TestBed } from '@angular/core/testing';

import { FlisService } from './flis.service';

describe('FlisService', () => {
  let service: FlisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
