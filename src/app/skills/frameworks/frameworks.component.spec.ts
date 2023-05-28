import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworksComponent } from './frameworks.component';
import { HttpClientModule } from '@angular/common/http';

describe('FrameworksComponent', () => {
  let component: FrameworksComponent;
  let fixture: ComponentFixture<FrameworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameworksComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
