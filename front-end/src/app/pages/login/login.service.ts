import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {Usuario} from './login/user-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private authService: AuthService) {

  }
  public login(usuario: Usuario): Observable<Usuario> {
    return this.authService.save(usuario);
  }
}

