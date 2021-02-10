import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crm';
  mostrarMenu: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
  }
  ngOnInit(): void {
    if(localStorage.getItem('admin')) {
      this.mostrarMenu  = true;
    }
    this.authService.mostrarMenuEmitter.subscribe(
      (mostrar: boolean) => this.mostrarMenu = mostrar
    );
  }
  logout(): void {
    if(localStorage.getItem('admin')) {      
      localStorage.removeItem('admin');
      window.location.reload()
    }
  }
}
