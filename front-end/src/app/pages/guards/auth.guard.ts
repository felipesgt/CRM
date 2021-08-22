import { AuthService } from '../login/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../login/login/user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any  {
      const user = JSON.parse(localStorage.getItem('admin')) as Usuario;
      if (user){
        return  new Promise(function(resolve, _reject) {
              setTimeout(resolve, 350, true);
        });
      }
      this.router.navigate(['/login']);
      return false;
  }
}
