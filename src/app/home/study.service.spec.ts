import { TestBed } from '@angular/core/testing';

import { StudyService } from './study.service';
import { HttpClientModule } from '@angular/common/http';

describe('StudyService', () => {
  let service: StudyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(StudyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
