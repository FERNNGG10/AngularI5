import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { LoginDataInterface } from '../interfaces/LoginData.Interface';
import { Observable } from 'rxjs';
import { LoginResponseInterface } from '../interfaces/LoginResponse.Interface';
import { CodeResponseInterface } from '../interfaces/CodeResponse.Interface';
import { RegisterDataInterface } from '../interfaces/RegisterData.Interface';
import { RegisterResponseInterface } from '../interfaces/RegisterResponse.interface';
import { MeResponseInterface } from '../interfaces/MeResponse.Interface';
import { MsgInterface } from '../interfaces/Msg.Interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(data:LoginDataInterface):Observable<CodeResponseInterface>{
    return this.http.post<CodeResponseInterface>(`${environment.UrlAuth}/login`,data);
  }

  verifyCode(data:LoginDataInterface):Observable<LoginResponseInterface>{
    return this.http.post<LoginResponseInterface>(`${environment.UrlAuth}/login`,data);
  }

  logout():Observable<any>{
    return this.http.post<any>(`${environment.UrlAuth}/logout`,{});
  }
  
  register(data:RegisterDataInterface):Observable<RegisterResponseInterface>{
    return this.http.post<RegisterResponseInterface>(`${environment.UrlAuth}/register`,data);
  }
  
  me():Observable<MeResponseInterface>{
    return this.http.get<MeResponseInterface>(`${environment.UrlAuth}/me`);
  }

  isauth():Observable<HttpResponse<any>>{
    return this.http.get<any>(`${environment.UrlAuth}/me`,{observe:'response'});
  }

  checkRol():Observable<any>{
    return this.http.get<any>(`${environment.UrlAuth}/getrol`);
  }

  checkActive():Observable<any>{
    return this.http.get<any>(`${environment.UrlAuth}/getstatus`);
  }

  checkroleevent():Observable<any>{
    return this.http.get<any>(`${environment.UrlAuth}/socketrol`);
  }

  changepassword(data:any):Observable<MsgInterface>{
    return this.http.post<MsgInterface>(`${environment.UrlAuth}/changepassword`,data);
  }

  


}
