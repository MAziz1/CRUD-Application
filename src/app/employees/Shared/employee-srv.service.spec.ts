import { TestBed, inject } from '@angular/core/testing';

import { EmployeeSrvService } from './employee-srv.service';

describe('EmployeeSrvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeSrvService]
    });
  });

  it('should be created', inject([EmployeeSrvService], (service: EmployeeSrvService) => {
    expect(service).toBeTruthy();
  }));
});
