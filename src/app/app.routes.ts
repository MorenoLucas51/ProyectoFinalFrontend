import { Routes } from '@angular/router';
import { MedicamentoListComponent } from './features/medicamentos/list/medicamento-list/medicamento-list';
import { MedicamentoCreateComponent } from './features/medicamentos/create/medicamento-create/medicamento-create';
import { MedicamentoEditComponent } from './features/medicamentos/edit/medicamento-edit/medicamento-edit';
import { ActivoListComponent } from './features/activos/list/activo-list/activo-list';
import { ActivoCreateComponent } from './features/activos/create/activo-create/activo-create';
import { LaboratorioListComponent } from './features/laboratorios/list/laboratorio-list/laboratorio-list';
import { LaboratorioCreateComponent } from './features/laboratorios/create/labortorio-create/labortorio-create';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'medicamentos', pathMatch: 'full' },

  // Medicamentos
  { path: 'medicamentos', component: MedicamentoListComponent },
  { path: 'medicamentos/crear', component: MedicamentoCreateComponent },
  { path: 'medicamentos/editar/:id', component: MedicamentoEditComponent },

  // Activos
  { path: 'activos', component: ActivoListComponent },
  { path: 'activos/crear', component: ActivoCreateComponent },

  // Laboratorios
  { path: 'laboratorios', component: LaboratorioListComponent },
  { path: 'laboratorios/crear', component: LaboratorioCreateComponent },

  // Fallback
  { path: '**', redirectTo: 'medicamentos' }
];
