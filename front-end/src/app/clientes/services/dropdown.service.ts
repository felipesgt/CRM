import { map } from 'rxjs/operators';
import { Cidade } from '../models/cidades.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstadoBr } from '../models/estados.model';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {
  constructor(private http: HttpClient) {}

  getEstadosBr() {
    return this.http.get<EstadoBr[]>('assets/data/estados.json')
  }

  getCidades(idEstado: number) {
    return this.http.get<Cidade[]>('assets/data/cidades.json')
    .pipe(
      map((cidades: Cidade[]) => cidades.filter(c => c.estado == idEstado))
    );
  }
}