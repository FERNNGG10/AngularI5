import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersIndexInterface } from '../interfaces/UserIndex.Interface';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get<UsersIndexInterface>(`${environment.UrlUsers}/index`);
  }

  
}
