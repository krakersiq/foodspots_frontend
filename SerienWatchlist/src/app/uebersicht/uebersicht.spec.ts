import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uebersicht } from './uebersicht';

describe('Uebersicht', () => {
  let component: Uebersicht;
  let fixture: ComponentFixture<Uebersicht>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Uebersicht]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Uebersicht);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
