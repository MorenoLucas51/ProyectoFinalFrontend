import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicamentoService } from '../../../../services/medicamento';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-medicamento-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './medicamento-list.html'
})
export class MedicamentoListComponent implements OnInit {
  medicamentos: any[] = [];
  constructor(private srv: MedicamentoService) {}
  ngOnInit(): void {
    this.srv.getAll().subscribe({
      next: data => this.medicamentos = data,
      error: err => console.error(err)
    });
  }

  nombreActivos(m: any) {
    return m.activos ? m.activos.map((a:any) => a.nombre).join(', ') : '';
  }
}
