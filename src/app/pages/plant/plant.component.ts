import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PlantUpdate } from '../../interfaces/PlantUpdate.Interface';
import { MongoInterface } from '../../interfaces/Mongo.Interface';
import { ModalComponent } from '../../components/modal/modal.component';
import { PlantsService } from '../../services/plants.service';
import Pusher from 'pusher-js';
import Echo from 'laravel-echo';
import Socket from 'pusher-js/types/src/core/socket';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-plant',
  standalone: true,
  imports: [CommonModule,RouterLink,ReactiveFormsModule,ModalComponent],
  templateUrl: './plant.component.html',
  styleUrl: './plant.component.css'
})
export class PlantComponent implements OnInit{
  @Input('id') id!: number;
  putPlantForm:FormGroup
  putPlant: PlantUpdate = {plant: '', status: 0};
  data_sensor: MongoInterface = {data: { _id: '', Temperatura: { Valor: 0, Unidad: '', Fecha: '' }, Humedad: { Valor: 0, Unidad: '', Fecha: '' }, Lluvia: { Valor: 0, Unidad: '', Fecha: '' }, Suelo: { Valor: 0, Unidad: '', Fecha: '' }, Agua: { Valor: 0, Unidad: '', Fecha: '' }, Luz: { Valor: 0, Unidad: '', Fecha: '' }, Movimiento: { Valor: 0, Unidad: '', Fecha: '' },Vibracion:{Valor:0,Unidad:'',Fecha:''}, updated_at: '', created_at: '' }};
  plantShow: any;
  echo:any;
  img= '';
  msg=''
  buttonActive = true;
  constructor(private plantService:PlantsService,private router:Router,private formBuilder:FormBuilder,private mongo:SocketService) {
    this.putPlantForm = this.formBuilder.group({
      plant: [this.putPlant.plant, [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern(/^[a-zA-Z0-9 ]+$/)]],
      status: [this.putPlant.status, [Validators.required, Validators.min(0), Validators.max(1)]]
    });
  }
  
  ngOnInit(): void {  
    console.log(this.id);
    if(this.id){
      this.plantService.getPlantsById(this.id).subscribe((response)=>{
        console.log("response",response);
        this.plantShow = response;
        console.log("var",this.plantShow);
      },(error)=>{
        console.log(error);
      });
      this.mongo.MongoData().subscribe((response)=>{
        console.log(response);
        this.data_sensor = response;
      },(error)=>{
        console.log(error);
      });
      this.websocket();
    }
    this.img = this.getImg(); 
    
  }
  getImg(){
    const numero = Math.floor(Math.random() * 5) + 1;
    return `../../../assets/imagenes/plantsIcons/${numero}.jpg`;
  }

  openModal(id: string) {
    this.id = parseInt(id);
  }

  editModal(id: string, plant: string, status: number) {
    this.id = parseInt(id);
    this.putPlant.plant = plant;
    this.putPlant.status = status;
  }
  deletePlant(id: number) {
    this.plantService.eliminarPlants(id).subscribe(res => {
      this.ngOnInit();
      console.log(res.msg);
      this.msg = res.msg;
      setTimeout(() => {
        this.msg = '';
      }, 3000);
    });
  }
  editPlant(id: number) {
    this.putPlant = this.putPlantForm.value;
    this.plantService.actualizarPlants(this.putPlant, id).subscribe(res => {
      console.log(res.msg);
      this.msg = res.msg;
      setTimeout(() => {
        this.msg = '';
      }, 3000);
      this.ngOnInit();
    });
  }
  regar() {
    this.mongo.BombEvent().subscribe((response) => {
      console.log(response);
      this.msg = response.msg;
      setTimeout(() => {
        this.msg = '';
      }, 3000);
    });
    this.buttonActive = false;
    setTimeout(() => {
      this.buttonActive = true;
    }, 15000);
  }
  websocket(){
    
    (window as any).Pusher = Pusher;
    this.echo = new Echo({
      broadcaster: 'pusher',
      key: 'lifePlants09123',
      cluster: 'mt1',
      encrypted: true,
      //wsHost: window.location.hostname,
      wsHost: '18.227.105.11',
      wsPort: 6001,
      disableStats: true,
      forceTLS: false,
    });
    this.echo.channel('dataSensors').listen('.MongoData', (e: any) => {
    
      console.log('hola');
      console.log(this.echo);
      console.log(e);
      this.data_sensor = e;
      console.log('PRUEBAAAA')
      console.log(this.data_sensor);
    });
  }
  closewebsocket(){
    if(this.echo){
      this.echo.disconnect();
    }
  }
  ngOnDestroy(): void {
      this.closewebsocket();
  }
 
}