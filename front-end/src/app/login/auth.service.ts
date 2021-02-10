import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Injectable()
export class AuthService {
  usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(form: FormGroup){
    if (form.value.email === 'usuario@email.com' &&
      form.value.password === '123456') {
      form.value.isAuthenticated = true;
      this.mostrarMenuEmitter.emit(true);
      localStorage.setItem("admin", JSON.stringify(form.value));
      this.router.navigate(['/']);
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }
}