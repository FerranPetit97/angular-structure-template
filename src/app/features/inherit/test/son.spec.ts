import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Son } from '../father/son/son';

describe('Son', () => {
  let component: Son;
  let fixture: ComponentFixture<Son>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Son],
    }).compileComponents();

    fixture = TestBed.createComponent(Son);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
