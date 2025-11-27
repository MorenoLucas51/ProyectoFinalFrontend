import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicamento } from '../models/medicamento';
import { MedicamentoCreate} from '../models/medicamento-create';
const API_BASE = 'http://localhost:5171/api';

@Injectable({ providedIn: 'root' })
export class MedicamentoService {
  private url = `${API_BASE}/Medicamento`;
  constructor(private http: HttpClient) {}

  getAll(): Observable<Medicamento[]> { return this.http.get<Medicamento[]>(this.url); }
  getById(id: number) { return this.http.get<Medicamento>(`${this.url}/${id}`); }
  create(dto: MedicamentoCreate) { return this.http.post(this.url, dto); }
  update(id: number, dto: MedicamentoCreate) { return this.http.put(`${this.url}/${id}`, dto); }
}
