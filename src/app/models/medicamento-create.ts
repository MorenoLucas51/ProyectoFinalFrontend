export interface MedicamentoCreate {
  nombreComercial: string;
  laboratorioId: number;
  precio: number;
  activosIds: number[];
}
