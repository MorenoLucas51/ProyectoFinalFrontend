import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Laboratorio } from '../models/laboratorio';

const API_BASE = 'http://localhost:5171/api';

@Injectable({ providedIn: 'root' })
export class LaboratorioService {
  private url = `${API_BASE}/Laboratorio`;
  constructor(private http: HttpClient) {}

  getAll(): Observable<Laboratorio[]> { return this.http.get<Laboratorio[]>(this.url); }
  getById(id: number) { return this.http.get<Laboratorio>(`${this.url}/${id}`); }
  create(dto: { nombre: string }) { return this.http.post(this.url, dto); }
}
