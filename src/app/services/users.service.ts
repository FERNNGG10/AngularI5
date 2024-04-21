import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersIndexInterface } from '../interfaces/UserIndex.Interface';
import { environment } from '../../environments/environment.development';
import { UserDataInterface } from '../interfaces/UserData.interface';
import { Observable } from 'rxjs';
import { UserShowInterface } from '../interfaces/UserShow.Interface';
import { UserResponseInterface } from '../interfaces/UserResponse.Interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getUsers():Observable<UsersIndexInterface>{
    return this.http.get<UsersIndexInterface>(`${environment.UrlUsers}/index`);
  }

  delete(id:number){
    return this.http.delete(`${environment.UrlUsers}/destroy/${id}`);
  }

  postUser(data:UserDataInterface):Observable<UserResponseInterface>{
    return this.http.post<UserResponseInterface>(`${environment.UrlUsers}/store`,data);
  }

  updateUser(id:number,data:UserDataInterface):Observable<UserResponseInterface>{
    return this.http.put<UserResponseInterface>(`${environment.UrlUsers}/update/${id}`,data);
  }

  getUser(id:number):Observable<UserShowInterface>{
    return this.http.get<UserShowInterface>(`${environment.UrlUsers}/show/${id}`);
  }
}
