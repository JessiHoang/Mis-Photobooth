import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Photosession } from './photosession';

describe('Photosession', () => {
  let component: Photosession;
  let fixture: ComponentFixture<Photosession>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Photosession]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Photosession);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
