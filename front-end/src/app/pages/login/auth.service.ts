import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../shared/base-service';
import { Usuario } from './login/user-model';
import { environment } from '../../../environments/environment';


@Injectable()
export class AuthService extends BaseService<Usuario, number> {
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(protected http: HttpClient) {
    super(http, `${environment.api.baseUrl}/login`);
  }

}
