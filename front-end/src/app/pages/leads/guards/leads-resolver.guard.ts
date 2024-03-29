import { LeadsService } from '../services/leads.service';
import { Lead } from '../models/leads.model';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeadsResolverGuard implements Resolve<Lead> {
  constructor(private service: LeadsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Lead> {
    if (route.params && route.params.id) {
      return this.service.readById(route.params.id);
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
