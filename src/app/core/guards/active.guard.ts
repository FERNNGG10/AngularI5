import { Injectable } from '@angular/core';
import { CanActivateFn ,CanActivate, Router, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class activeGuard implements CanActivate{
  constructor(private router: Router, private auth:AuthService) { }
  canActivate(
    route:ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.auth.checkActive().pipe(
        map(response => {
          if (response === 1) {
            return true;
          }
         
            this.router.navigate(['/login']);
            return false;
          
        }),
        catchError(error => {
          console.error(error);
          this.router.navigate(['/login']);
          return of(false);
        })
        )
    }
}