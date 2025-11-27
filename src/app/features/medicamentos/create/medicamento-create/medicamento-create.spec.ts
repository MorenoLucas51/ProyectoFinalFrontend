import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoCreate } from './medicamento-create';

describe('MedicamentoCreate', () => {
  let component: MedicamentoCreate;
  let fixture: ComponentFixture<MedicamentoCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicamentoCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicamentoCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
