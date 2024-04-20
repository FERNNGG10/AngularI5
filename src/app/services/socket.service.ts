import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import { MongoInterface } from '../interfaces/Mongo.Interface';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
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

  closeWebSocket() {
    if (this.echo) {
      this.echo.disconnect();
    }
  }

  getEcho(){
    return this.echo;
  }
}
