import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Usuario } from './user-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: Usuario;
  form: FormGroup;


  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  public onSubmit(): void {
    if (this.form.dirty && this.form.valid) {
      this.usuario = Object.assign({}, this.usuario, this.form.value);
      this.loginService.login(this.usuario)
        .subscribe(
          response => {
            if (response.authenticated === false) {
              this.loginFailed();
            }
            else {
              this.loginSucess(response);
            }
          }

        );
    }

  }
  public loginFailed(): void {
    this.loginService.mostrarMenuEmitter.emit(false);
  }
  public loginSucess(response: any): void {
    this.form.value.isAuthenticated = true;
    this.loginService.mostrarMenuEmitter.emit(true);
    localStorage.setItem('admin', JSON.stringify(response));
    this.router.navigate(['/']);
  }
}
