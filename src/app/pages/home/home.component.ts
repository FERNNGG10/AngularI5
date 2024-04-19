import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PlantsService } from '../../services/plants.service';
import { PlantIndexInterface } from '../../interfaces/PlantIndex.Interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
  export class HomeComponent implements OnInit{
    public plants:PlantIndexInterface = {data:[]};
    constructor(private plantService:PlantsService,private router:Router) { }

    ngOnInit(): void {
      this.plantService.getPlants().subscribe((response)=>{
        this.plants = response;
        console.log("response",response);
        console.log("var",this.plants);
      },(error)=>{
        console.log(error);
      });
    }

    link(){
      this.router.navigate(['/lifeplants/plants']);
    }
   
}
