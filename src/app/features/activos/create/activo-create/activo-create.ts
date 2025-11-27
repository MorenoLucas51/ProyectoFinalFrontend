import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivoService } from '../../../../services/activo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activo-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './activo-create.html'
})
export class ActivoCreateComponent {
  nombre = '';
  constructor(private srv: ActivoService, private router: Router) {}
  guardar() {
    if (!this.nombre) return alert('Ingrese nombre');
    this.srv.create({ nombre: this.nombre }).subscribe({
      next: _ => this.router.navigate(['/activos']),
      error: err => console.error(err)
    });
  }
}
