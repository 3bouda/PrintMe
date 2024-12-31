import { TestBed } from '@angular/core/testing';

import { SettingService } from './setting.service';
import {HttpClientModule} from "@angular/common/http";

describe('SettingService', () => {
  let service: SettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(SettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
