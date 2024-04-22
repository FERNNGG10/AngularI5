import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import { MongoInterface } from '../interfaces/Mongo.Interface';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { SensorFilter } from '../interfaces/SensorFilter.interface';
@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private echo: any;
  constructor(private http:HttpClient) { }

  UserRolSocket() {
    (window as any).Pusher = Pusher;
    this.echo = new Echo({
      broadcaster: 'pusher',
      key: 'lifePlants09123',
      cluster: 'mt1',
      encrypted: true,
      wsHost: '18.227.105.11',
      //wsHost: '127.0.0.1',
      wsPort: 6001,
      disableStats: true,
      forceTLS: false,
    });

    this.echo.channel('userRol').listen('.UserRol', (e: any) => {
      console.log(this.echo);
      console.log(e);
    });
  }

  MongoData():Observable<MongoInterface>{
    return this.http.get<MongoInterface>(`${environment.UrlMongo}/last`);
  }

  BombEvent():Observable<any>{
    return this.http.post<any>(`${environment.UrlMongo}/bomb`,{});
  }

  closeWebSocket() {
    if (this.echo) {
      this.echo.disconnect();
    }
  }

  getEcho(){
    return this.echo;
  }

  getAgua(){
    return this.http.get<SensorFilter>(`${environment.UrlMongo}/agua`);
  }
  
  getHumedad(){
    return this.http.get<SensorFilter>(`${environment.UrlMongo}/humedad`);
  }
  
  getLuz(){
    return this.http.get<SensorFilter>(`${environment.UrlMongo}/luz`);
  }
  
  getMovimiento(){
    return this.http.get<SensorFilter>(`${environment.UrlMongo}/movimiento`);
  }
  
  getTemperatura(){
    return this.http.get<SensorFilter>(`${environment.UrlMongo}/temperatura`);
  }
  
  getVibracion(){
    return this.http.get<SensorFilter>(`${environment.UrlMongo}/vibracion`);
  }
  
  getLluvia(){
    return this.http.get<SensorFilter>(`${environment.UrlMongo}/lluvia`);
  }
  
  getSuelo(){
    return this.http.get<SensorFilter>(`${environment.UrlMongo}/suelo`);
  }
}
