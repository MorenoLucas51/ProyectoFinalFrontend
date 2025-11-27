import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivoList } from './activo-list';

describe('ActivoList', () => {
  let component: ActivoList;
  let fixture: ComponentFixture<ActivoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivoList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivoList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
