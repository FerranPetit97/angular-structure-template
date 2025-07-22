import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Father } from '../father/father';

describe('Father', () => {
  let component: Father;
  let fixture: ComponentFixture<Father>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Father],
    }).compileComponents();

    fixture = TestBed.createComponent(Father);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
