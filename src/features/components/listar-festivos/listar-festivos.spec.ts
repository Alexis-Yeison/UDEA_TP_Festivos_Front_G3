import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFestivos } from './listar-festivos';

describe('ListarFestivos', () => {
  let component: ListarFestivos;
  let fixture: ComponentFixture<ListarFestivos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarFestivos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarFestivos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
