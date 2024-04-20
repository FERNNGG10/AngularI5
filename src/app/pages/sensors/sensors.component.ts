import { Component, OnInit } from '@angular/core';
import { SensorsIndexInterface } from '../../interfaces/SensorIndex.Interface';
import { SensorsService } from '../../services/sensors.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sensors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sensors.component.html',
  styleUrl: './sensors.component.css'
})
export class SensorsComponent implements OnInit{
  public sensors:SensorsIndexInterface={data:[]}
  constructor(private sensorService:SensorsService){

  }
  ngOnInit(): void {
      this.sensorService.getSensors().subscribe((response)=>{
        console.log("response",response)
        this.sensors = response
        console.log("var",this.sensors)
      })
  }

  

}
