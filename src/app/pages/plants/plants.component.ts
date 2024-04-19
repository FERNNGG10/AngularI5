import { Component, OnInit } from '@angular/core';
import { PlantIndexInterface } from '../../interfaces/PlantIndex.Interface';
import { PlantsService } from '../../services/plants.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../components/modal/modal.component';
import { PlantDataInterface } from '../../interfaces/PlantData.Interface';
import { FormBuilder, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';

@Component({
  selector: 'app-plants',
  standalone: true,
  imports: [CommonModule,RouterLink,ModalComponent,ReactiveFormsModule],
  templateUrl: './plants.component.html',
  styleUrl: './plants.component.css'
})
export class PlantsComponent implements OnInit{
  public plants:PlantIndexInterface = {data:[]};
  public plantData:PlantDataInterface={plant:''};
  filteredPlants:string= 'all';
  srcImg:String[]= []; 
  img= '';
  plantForm:FormGroup;
  msg=''
  error=''
  constructor(private plantService:PlantsService,private router:Router,private formBuilder:FormBuilder) {
    this.plantForm = this.formBuilder.group({
      plant: [this.plantData.plant, [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern(/^[a-zA-Z0-9 ]+$/)]],
    });
   }
  ngOnInit(): void {
      this.getplants();
  }
  getImg(){
    const numero = Math.floor(Math.random() * 5) + 1;
    return `../../../assets/imagenes/plantsIcons/${numero}.jpg`;
  }
  filterPlants(plant:any) {
    this.filteredPlants = plant
  }

  addPlant(){
    if(this.plantForm.valid){
      this.plantData = this.plantForm.value;
      this.plantService.storePlant(this.plantData).subscribe((response)=>{
        console.log("PLANTA",response);
        this.msg = response.msg;
        setTimeout(() => {
          this.msg = '';
        }, 3000);
        this.getplants()
      },(error)=>{
        console.log(error);
        this.error = error.error.errors.plant[0];
        setTimeout(() => {
          this.error = '';
        }, 3000);
      });
    }
  }

  getplants(){
    this.plantService.getPlants().subscribe((response)=>{
      this.plants = response;
      console.log("response",response);
      console.log("var",this.plants);
      for (let i = 0; i < this.plants.data.length; i++) {
        this.img = this.getImg();
       this.srcImg.push(this.img);
     }
    },(error)=>{
      console.log(error);
    });
  }
  
}
