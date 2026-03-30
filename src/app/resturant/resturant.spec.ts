import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resturant } from './resturant';

describe('Resturant', () => {
  let component: Resturant;
  let fixture: ComponentFixture<Resturant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resturant],
    }).compileComponents();

    fixture = TestBed.createComponent(Resturant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
