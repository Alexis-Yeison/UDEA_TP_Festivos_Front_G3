import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarFestivo } from './verificar-festivo';

describe('VerificarFestivo', () => {
  let component: VerificarFestivo;
  let fixture: ComponentFixture<VerificarFestivo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificarFestivo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificarFestivo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
