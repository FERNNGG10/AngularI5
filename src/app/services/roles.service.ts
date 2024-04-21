import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RolesIndexInterface } from '../interfaces/RolesIndex.interface';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http:HttpClient) { }

  getRoles():Observable<RolesIndexInterface>{
    return this.http.get<RolesIndexInterface>(`${environment.UrlRoles}/index2`);
  }
}
