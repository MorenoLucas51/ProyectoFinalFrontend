import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LaboratorioService } from '../../../../services/laboratorio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laboratorio-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './labortorio-create.html'
})
export class LaboratorioCreateComponent {
  nombre = '';
  constructor(private srv: LaboratorioService, private router: Router) {}
  guardar() {
    if (!this.nombre) return alert('Ingrese nombre');
    this.srv.create({ nombre: this.nombre }).subscribe({
      next: _ => this.router.navigate(['/laboratorios']),
      error: err => console.error(err)
    });
  }
}
