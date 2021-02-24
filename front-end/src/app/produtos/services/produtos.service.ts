import { Produtos } from '../models/produtos.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/base-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService extends BaseService<Produtos, Number>{
  constructor(protected http: HttpClient) {
    super(http, `${environment.api.baseUrl}/Product`);
  }

}

