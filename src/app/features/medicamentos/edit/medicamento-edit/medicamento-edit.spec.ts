import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoEdit } from './medicamento-edit';

describe('MedicamentoEdit', () => {
  let component: MedicamentoEdit;
  let fixture: ComponentFixture<MedicamentoEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicamentoEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicamentoEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
