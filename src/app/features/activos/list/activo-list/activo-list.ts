import { Component, OnInit } from '@angular/core';
import { ActivoService } from '../../../../services/activo';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-activo-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './activo-list.html'
})
export class ActivoListComponent implements OnInit {
  activos: any[] = [];
  constructor(private srv: ActivoService) {}
  ngOnInit(): void {
    this.srv.getAll().subscribe(x => this.activos = x);
  }
}
