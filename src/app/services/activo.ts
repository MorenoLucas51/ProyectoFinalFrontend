import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activo } from '../models/activo';

const API_BASE = 'http://localhost:5171/api'; // <-- ajustar si hace falta

@Injectable({ providedIn: 'root' })
export class ActivoService {
  private url = `${API_BASE}/Activo`;
  constructor(private http: HttpClient) {}

  getAll(): Observable<Activo[]> { return this.http.get<Activo[]>(this.url); }
  getById(id: number) { return this.http.get<Activo>(`${this.url}/${id}`); }
  create(dto: { nombre: string }) { return this.http.post(this.url, dto); }
}
