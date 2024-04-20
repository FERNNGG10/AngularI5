import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SensorsIndexInterface } from '../interfaces/SensorIndex.Interface';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SensorsService {

  constructor(private http:HttpClient) { }

  getSensors(){
    return this.http.get<SensorsIndexInterface>(`${environment.UrlSensors}/index`)
  }
}
