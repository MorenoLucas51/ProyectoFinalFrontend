import { Component, OnInit } from '@angular/core';
import { LaboratorioService } from '../../../../services/laboratorio';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-laboratorio-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './laboratorio-list.html'
})
export class LaboratorioListComponent implements OnInit {
  labs: any[] = [];
  constructor(private srv: LaboratorioService) {}
  ngOnInit(): void { this.srv.getAll().subscribe(x => this.labs = x); }
}
