import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../login/user-model';

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
      const user = <Usuario>JSON.parse(localStorage.getItem("admin"))
      if (user && user.isAuthenticated){
        return  new Promise(function (resolve, _reject) {
              setTimeout(resolve, 350, true)
        })
      }
      this.router.navigate(['/login'])
      return false
  }
}
