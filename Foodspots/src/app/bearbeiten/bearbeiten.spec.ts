import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bearbeiten } from './bearbeiten';

describe('Bearbeiten', () => {
  let component: Bearbeiten;
  let fixture: ComponentFixture<Bearbeiten>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bearbeiten]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bearbeiten);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
