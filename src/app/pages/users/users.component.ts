import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ModalComponent } from '../../components/modal/modal.component';
import { UsersIndexInterface } from '../../interfaces/UserIndex.Interface';
import { UsersService } from '../../services/users.service';
import { UserDataInterface } from '../../interfaces/UserData.interface';
import { RolesService } from '../../services/roles.service';
import { RolesIndexInterface } from '../../interfaces/RolesIndex.interface';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule,RouterLink,ReactiveFormsModule,ModalComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users: UsersIndexInterface = {data: []};
  userfilter: string = 'all';
  userData:UserDataInterface={name:'',email:'',password:'',password_confirmation:'',status:0,rol_id:0};
  //userDataUpdate:UserDataInterface={name:'',email:'',password:'',status:0,rol_id:0};
  roles:RolesIndexInterface = {data:[]};
  PostUserForm:FormGroup;
  msg=''

  //UpdateUserForm:FormGroup;
  id:number=0;
  errrorV=false;
  errors = {name:'',email:'',password:'',status:'',rol_id:''}
  constructor(private userService:UsersService, private formBuilde:FormBuilder, private rolesSerivce:RolesService) {

    this.PostUserForm = this.formBuilde.group({
      name: [this.userData.name, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: [this.userData.email, [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      password: [this.userData.password, [Validators.required, Validators.minLength(8), Validators.pattern(/^[a-zA-Z0-9 ]*$/),Validators.maxLength(230)]],
      password_confirmation: [this.userData.password_confirmation, [Validators.required, Validators.minLength(8), Validators.pattern(/^[a-zA-Z0-9 ]*$/),Validators.maxLength(230)]],
      status: [this.userData.status, [Validators.required, Validators.pattern(/^[0-1]{1}$/)]],
      rol_id: [1, [Validators.required, Validators.pattern(/^[0-9]{1}$/)]]
    });

    // this.UpdateUserForm = this.formBuilde.group({
    //   name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    //   email: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
    //   password: ['', [Validators.minLength(8), Validators.pattern(/^[a-zA-Z0-9 ]*$/),Validators.maxLength(230)]],
    //   status: [0, [Validators.required, Validators.pattern(/^[0-1]{1}$/)]],
    //   rol_id: [0, [Validators.required, Validators.pattern(/^[0-9]{1}$/)]]
    // });
   }

  ngOnInit(): void {
    this.getUsers();
    this.getRoles();
  }

  filterUsers(user: any) {
    this.userfilter = user;
  }

  deleteModal(id: number) {
    this.id = id;
    console.log(this.id);
  }
  postUser(){
    if(this.PostUserForm.valid){
      this.userData = this.PostUserForm.value;
      this.userService.postUser(this.userData).subscribe((response)=>{
        this.getUsers();
        this.msg = response.msg;
        setTimeout(() => {
          this.msg = '';
        }, 3000);
        this.PostUserForm.reset();
      },(error)=>{
        console.log(error);
        this.errrorV=true;
        this.errors.password = error.error.errors.password
        this.errors.email = error.error.errors.email
        this.errors.name = error.error.errors.name
        this.errors.status = error.error.errors.status
        this.errors.rol_id = error.error.errors.rol_id
        setTimeout(() => {
          this.errrorV=false
          this.errors = {name:'',email:'',password:'',status:'',rol_id:''};
        }, 3000);
      });
    }
  }

  getUsers() {
    this.userService.getUsers().subscribe((response) => {
      this.users = response;
    }, (error) => {
      console.log(error);
    });
  }

  getRoles(){
    this.rolesSerivce.getRoles().subscribe((response)=>{
      console.log(response);
      this.roles = response;
    },(error)=>{
      console.log(error);
    });
  }
  // editModal(id: number,name:string,email:string,status:number,rol_id:number) {
  //   id = this.id;
  //   this.UpdateUserForm.setValue({name:name,email:email,status:status,rol_id:rol_id});
  //   console.log(this.UpdateUserForm.value);
  // }
  // closeModal() {
  //   this.id = 0;
  //   this.UpdateUserForm.reset();
  // }

  deleteUser() {
    this.userService.delete(this.id).subscribe((response) => {
      this.getUsers();
    }, (error) => {
      console.log(error);
    });
  }

  // updateUser(){
  //   if(this.UpdateUserForm.valid){
  //     this.userDataUpdate = this.UpdateUserForm.value;
  //     this.userService.updateUser(this.id,this.userDataUpdate).subscribe((response)=>{
  //       this.getUsers();
  //       this.UpdateUserForm.reset();
  //     },(error)=>{
  //       console.log(error);
  //       this.errors.password = error.error.errors.password
  //       this.errors.email = error.error.errors.email
  //       this.errors.name = error.error.errors.name
  //       this.errors.status = error.error.errors.status
  //       this.errors.rol_id = error.error.errors.rol_id
  //       setTimeout(() => {
  //         this.errors = {name:'',email:'',password:'',status:'',rol_id:''};
  //       }, 3000);
  //     });
  //   }
  // }



  
  
}
