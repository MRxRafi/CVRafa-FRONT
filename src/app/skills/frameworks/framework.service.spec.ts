import { TestBed } from '@angular/core/testing';

import { FrameworkService } from './framework.service';
import { HttpClientModule } from '@angular/common/http';

describe('FrameworkService', () => {
  let service: FrameworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(FrameworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
