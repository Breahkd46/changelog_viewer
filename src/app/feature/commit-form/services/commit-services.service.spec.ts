import { TestBed } from '@angular/core/testing';

import { CommitServicesService } from './commit-services.service';

describe('CommitServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommitServicesService = TestBed.get(CommitServicesService);
    expect(service).toBeTruthy();
  });
});
