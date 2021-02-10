import { ClientesService } from '../services/clientes.service';
import { Cliente } from '../models/clientes.model';
import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteResolverGuard implements Resolve<Cliente> {
  constructor(private service: ClientesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Cliente> {
    if (route.params && route.params['id']) {
      return this.service.readById(route.params['id']);
    }
    return of({
      id: 0,
      nome: null,
      email: null,
      cpf: null,
      data: null,
      endereco: {
        cep: null,
        numero: null,
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      },
      phone: null
    });
  }
}
