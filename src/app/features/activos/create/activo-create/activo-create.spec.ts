import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivoCreate } from './activo-create';

describe('ActivoCreate', () => {
  let component: ActivoCreate;
  let fixture: ComponentFixture<ActivoCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivoCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivoCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
