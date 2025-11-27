import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MedicamentoService } from '../../../../services/medicamento';
import { ActivoService } from '../../../../services/activo';
import { LaboratorioService } from '../../../../services/laboratorio';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-medicamento-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './medicamento-edit.html'
})
export class MedicamentoEditComponent implements OnInit {
  id = 0;
  data: any = { nombreComercial: '', precio: 0, laboratorioId: 0, activosIds: [] as number[] };
  activos: any[] = [];
  laboratorios: any[] = [];

  constructor(
    private srv: MedicamentoService,
    private activoSrv: ActivoService,
    private labSrv: LaboratorioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.activoSrv.getAll().subscribe(x => this.activos = x);
    this.labSrv.getAll().subscribe(x => this.laboratorios = x);

    this.srv.getById(this.id).subscribe({
      next: (m: any) => {
        this.data.nombreComercial = m.nombreComercial;
        this.data.precio = m.precio;
        this.data.laboratorioId = m.laboratorioId;
        this.data.activosIds = m.activos?.map((a:any) => a.id) ?? [];
        console.log(this.data);
      },
      error: err => console.error(err)
    });
  }

  toggleActivo(id: number, ev: any) {
    if (ev.target.checked) this.data.activosIds.push(id);
    else this.data.activosIds = this.data.activosIds.filter((i:number) => i !== id);
  }

  guardar() {
    console.log(this.data)
    this.srv.update(this.id, this.data).subscribe({
      next: _ => {
        alert('Medicamento actualizado');
        this.router.navigate(['/medicamentos']);
      },
      error: err => {
        console.error(err);
        alert('Error al actualizar');
      }
    });
  }
}
