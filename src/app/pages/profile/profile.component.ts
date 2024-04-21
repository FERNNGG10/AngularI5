import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MeResponseInterface } from '../../interfaces/MeResponse.Interface';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  public MeResponse:MeResponseInterface={id:0,name:'',email:'',email_verified_at:'',status:0,created_at:'',updated_at:'',plant_count:0,rol_id:0};
  ChangePasswordForm:FormGroup;
  public ChangePasswordData:any={password:''};
  msg='';
  errors = {password:''}
  constructor(private authService:AuthService,private formBuilder:FormBuilder) {
    this.ChangePasswordForm = this.formBuilder.group({
      password: [this.ChangePasswordData.password, [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/),Validators.maxLength(230)]]
    });
   }

  ngOnInit(): void {
    this.me();
  }

  changePassword(){ 
    if(this.ChangePasswordForm.valid){
      this.ChangePasswordData = this.ChangePasswordForm.value;
      this.authService.changepassword(this.ChangePasswordData).subscribe((response)=>{
        console.log(response);
        this.msg = response.msg;
        setTimeout(()=>{
          this.msg = '';
        },3000);
      },(error)=>{
        console.log(error);
        this.errors = error.error.errors.password
        setTimeout(() => {
          this.errors = {password:''};
        }, 3000);
      });
    }
  }

  me(){
    this.authService.me().subscribe(data=>{
      console.log(data);
      this.MeResponse=data;
    },error=>{
      console.log(error);
    });

  }


}
