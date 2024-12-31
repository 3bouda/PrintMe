import { TestBed } from '@angular/core/testing';

import { ShopService } from './shop.service';
import {HttpClientModule} from "@angular/common/http";

describe('ShopService', () => {
  let service: ShopService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ShopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
