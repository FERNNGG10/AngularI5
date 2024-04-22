import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { SocketService } from '../../services/socket.service';
import { CommonModule } from '@angular/common';
import { SensorFilter } from '../../interfaces/SensorFilter.interface';
@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [NgxPaginationModule,CommonModule],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent implements OnInit{
  constructor(private websocketService:SocketService){}
  sensors: SensorFilter={data: []};
  msg= '';
  p: number = 1;

  ngOnInit() {
    this.websocketService.getAgua().subscribe(res => {
      console.log(res);
      this.sensors = res;
    });


  }

  selectChangeHandler(event: any){
    switch(event.target.value){
      case 'Agua':
        this.getAgua();
        break;
      case 'Humedad':
        this.getHumedad();
        break;
      case 'Luz':
        this.getLuz();
        break;
      case 'Movimiento':
        this.getMovimiento();
        break;
      case 'Temperatura':
        this.getTemperatura();
        break;
      case 'Vibracion':
        this.getVibracion();
        break;
      case 'Lluvia':
        this.getLluvia();
        break;
      case 'Suelo':
        this.getSuelo();
        break;
    }
  }

  getAgua(){
    this.msg= 'Agua';
    this.sensors.data = [];
    this.websocketService.getAgua().subscribe(res => {
      console.log(res);
      this.sensors = res;
    });
  }

  getHumedad(){
    this.msg= 'Humedad';
    this.sensors.data = [];
    this.websocketService.getHumedad().subscribe(res => {
      console.log(res);
      this.sensors = res;
    });
  }

  getLuz(){
    this.msg= 'Luz';
    this.sensors.data = [];
    this.websocketService.getLuz().subscribe(res => {
      console.log(res);
      this.sensors = res;
    });
  }

  getMovimiento(){
    this.msg= 'Movimiento';
    this.sensors.data = [];
    this.websocketService.getMovimiento().subscribe(res => {
      console.log(res);
      this.sensors = res;
    });
  }

  getTemperatura(){
    this.msg= 'Temperatura';
    this.sensors.data = [];
    this.websocketService.getTemperatura().subscribe(res => {
      console.log(res);
      this.sensors = res;
    });
  }

  getVibracion(){
    this.msg= 'Vibracion';
    this.sensors.data = [];
    this.websocketService.getVibracion().subscribe(res => {
      console.log(res);
      this.sensors = res;
    });
  }

  getLluvia(){
    this.msg= 'Lluvia';
    this.sensors.data = [];
    this.websocketService.getLluvia().subscribe(res => {
      console.log(res);
      this.sensors = res;
    });
  }

  getSuelo(){
    this.msg= 'Suelo';
    this.sensors.data = [];
    this.websocketService.getSuelo().subscribe(res => {
      console.log(res);
      this.sensors = res;
    });
  }
}
