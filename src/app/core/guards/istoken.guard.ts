import { Injectable } from '@angular/core';
import { CanActivateFn ,CanActivate, Router, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class IsToken implements CanActivate{
  constructor(private router: Router, private auth:AuthService) { }
  canActivate(
    route:ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.auth.isauth().pipe(
        map(response => {
          if (response.status === 200) {
            this.router.navigate(['/lifeplants/home']);
            return false;
          } 
          return true;

        }),
        catchError(error => {
          console.error(error);
          return of(true);
        })
      );
    }
};
