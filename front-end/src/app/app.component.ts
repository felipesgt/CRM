import {Component, EventEmitter, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './pages/login/auth.service';
import { LoginService } from './pages/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'crm';
  mostrarMenu = true;

  constructor(private loginService: LoginService) {
  }
  ngOnInit(): void {
    if (localStorage.getItem('admin')) {
      this.mostrarMenu = true;
    }
    this.loginService.mostrarMenuEmitter.subscribe(
      (mostrar: boolean) => this.mostrarMenu = mostrar
    );
  }

  logout(): void {
    if (localStorage.getItem('admin')) {
      localStorage.removeItem('admin');
      window.location.reload();
    }
  }
}
