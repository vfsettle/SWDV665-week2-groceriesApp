import { TestBed } from '@angular/core/testing';

import { GroceriesDataService } from './groceries-data.service';

describe('GroceriesDataService', () => {
  let service: GroceriesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroceriesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
