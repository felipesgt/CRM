import { ProdutosService } from '../services/produtos.service';
import { Produtos } from '../models/produtos.model';
import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosResolverGuard implements Resolve<Produtos> {
  constructor(private service: ProdutosService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Produtos> {
    if (route.params && route.params['id']) {
      return this.service.readById(route.params['id']);
    }
    return of({
      id: 0,
      nome: null,
      preco: null,
      quantidade: null,
      categoria: null,
    });
  }
}
