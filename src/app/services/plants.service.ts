import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { PlantIndexInterface } from '../interfaces/PlantIndex.Interface';
import { PlantDataInterface } from '../interfaces/PlantData.Interface';
import { PlantResponseInterface } from '../interfaces/PlantResponse.Interface';
import { PlantShowInterface } from '../interfaces/PlantShow.Interface';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  constructor(private http:HttpClient) { }

  getPlants():Observable<PlantIndexInterface>{
    return this.http.get<PlantIndexInterface>(`${environment.UrlPlants}/index`);
  }

  storePlant(data:PlantDataInterface):Observable<PlantResponseInterface>{
    return this.http.post<PlantResponseInterface>(`${environment.UrlPlants}/store`,data);
  }

  getPlant(id:number):Observable<PlantResponseInterface>{
    return this.http.get<PlantResponseInterface>(`${environment.UrlPlants}/plant/${id}`);
  }
  getPlantsById(id:number):Observable<PlantShowInterface>{
    return this.http.get<PlantShowInterface>(`${environment.UrlPlants}/show/${id}`);
  }
  actualizarPlants(plant:any,id:number){
    return this.http.put<any>(`${environment.UrlPlants}/update/${id}`, plant);
  }

  eliminarPlants(id:number){
    return this.http.delete<any>(`${environment.UrlPlants}/destroy/${id}`);
  }
}
