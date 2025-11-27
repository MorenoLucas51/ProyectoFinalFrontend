import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MedicamentoService } from '../../../../services/medicamento';
import { ActivoService } from '../../../../services/activo';
import { LaboratorioService } from '../../../../services/laboratorio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicamento-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './medicamento-create.html'
})
export class MedicamentoCreateComponent implements OnInit {
  data = { nombreComercial: '', precio: 0, laboratorioId: 0, activosIds: [] as number[] };
  activos: any[] = [];
  laboratorios: any[] = [];

  constructor(
    private srv: MedicamentoService,
    private activoSrv: ActivoService,
    private labSrv: LaboratorioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activoSrv.getAll().subscribe(x => this.activos = x);
    this.labSrv.getAll().subscribe(x => this.laboratorios = x);
  }

  toggleActivo(id: number, ev: any) {
    if (ev.target.checked) this.data.activosIds.push(id);
    else this.data.activosIds = this.data.activosIds.filter(i => i !== id);
  }

  guardar() {
    // Validaciones básicas
    if (!this.data.nombreComercial || this.data.laboratorioId === 0) {
      alert('Completa nombre y laboratorio');
      return;
    }
    this.srv.create(this.data).subscribe({
      next: _ => {
        alert('Medicamento creado');
        this.router.navigate(['/medicamentos']);
      },
      error: err => {
        console.error(err);
        alert('Error al crear medicamento');
      }
    });
  }
}
