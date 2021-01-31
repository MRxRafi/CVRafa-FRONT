import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {HEADERS} from './navbar.model';
import {ERROR} from '../shared/errors.model';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have navbar model after construct', () => {
    expect(component.headers).toBe(HEADERS);
  });
  it('should initialize values correctly', () => {
    expect(component.lastActiveLink).toBe(0);
    expect(component.headers[0].active).toBe(HEADERS[0].active);
  });
  it('test given headers when changeHeader with out of bounds value then throws error', () => {
    expect(() => component.changeHeader(-1)).toThrow(new Error(ERROR.OUT_OF_BOUNDS));
    expect(() => component.changeHeader(HEADERS.length)).toThrow(new Error(ERROR.OUT_OF_BOUNDS));
  });
  it('test given headers when changeHeader with correct value then is changed correctly', () => {
    component.changeHeader(1);
    expect(component.lastActiveLink).toBe(1);
    expect(component.headers[0].active).toBeFalse();
    expect(component.headers[1].active).toBeTrue();
  });
});
