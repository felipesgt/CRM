import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {
  constructor(private http: HttpClient) { }
  consultCEP(cep: string) {
    cep = cep.replace(/\D/g, '');
    if (cep !== '') {
      const validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        return this.http.get(`//viacep.com.br/ws/${cep}/json`).pipe(
        map(response =>  response),
        catchError(error => {
           return throwError(error.error)
     }))
      }
    }
    return of({});
  }
}
