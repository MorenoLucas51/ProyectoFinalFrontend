import { Activo } from "./activo";
import { Laboratorio } from "./laboratorio";

export interface Medicamento {
  id: number;
  nombreComercial: string;
  precio: number;
  laboratorioId: number;
  laboratorio: Laboratorio;
  activos: Activo[];
}
