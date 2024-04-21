import { CanActivateFn } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivate{
  constructor(private router: Router, private auth:AuthService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.auth.checkRol().pipe(map(response => {
        if (response === 2) {
            return true;
        } else {
            this.router.navigate(['/lifeplants/home']);
            return false;
        }
    }));
  }
}