import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Startseite } from './startseite';

describe('Startseite', () => {
  let component: Startseite;
  let fixture: ComponentFixture<Startseite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Startseite]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Startseite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
