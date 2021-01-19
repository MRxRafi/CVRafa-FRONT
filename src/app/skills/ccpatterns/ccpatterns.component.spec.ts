import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcpatternsComponent } from './ccpatterns.component';

describe('CcpatternsComponent', () => {
  let component: CcpatternsComponent;
  let fixture: ComponentFixture<CcpatternsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcpatternsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CcpatternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
