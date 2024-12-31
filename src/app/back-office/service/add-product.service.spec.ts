import { TestBed } from '@angular/core/testing';

import { AddProductService } from './add-product.service';
import {HttpClientModule} from "@angular/common/http";

describe('AddProductService', () => {
  let service: AddProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(AddProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
