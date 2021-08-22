import { BaseService } from '../../../shared/base-service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pedido } from '../models/pedidos.model';

@Injectable({
  providedIn: 'root'
})
export class PedidosService extends BaseService<Pedido, number> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.api.baseUrl}/demand`);
  }
}
