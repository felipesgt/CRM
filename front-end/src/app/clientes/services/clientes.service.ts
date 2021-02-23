import { Cliente } from '../models/clientes.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/base-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService extends BaseService<Cliente, number>{
  constructor(protected http: HttpClient) {
    super(http, `${environment.api.baseUrl}/customer`);
  }

}

