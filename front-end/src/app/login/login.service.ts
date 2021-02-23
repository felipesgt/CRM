import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Usuario } from './login/user-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private authService: AuthService) {

  }
  login(usuario: Usuario): Observable<Usuario> {
    let response = this.authService.save(usuario);
    return response;
  }
}

