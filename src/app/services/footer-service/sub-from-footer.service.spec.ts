import { TestBed } from '@angular/core/testing';

import { SubFromFooterService } from './sub-from-footer.service';
import {HttpClientModule} from "@angular/common/http";

describe('SubFromFooterService', () => {
  let service: SubFromFooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(SubFromFooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
