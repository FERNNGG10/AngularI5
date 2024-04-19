import { Injectable } from '@angular/core';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private echo: any;
  constructor() { }

  UserRolSocket() {
    (window as any).Pusher = Pusher;
    this.echo = new Echo({
      broadcaster: 'pusher',
      key: 'lifePlants09123',
      cluster: 'mt1',
      encrypted: true,
      wsHost: window.location.hostname,
      wsPort: 6001,
      disableStats: true,
      forceTLS: false,
    });

    this.echo.channel('userRol').listen('.UserRol', (e: any) => {
      console.log(this.echo);
      console.log(e);
    });
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
