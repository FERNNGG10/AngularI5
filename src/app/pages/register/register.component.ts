import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NoLoginNavBarComponent } from '../../components/no-login-nav-bar/no-login-nav-bar.component';
import { AuthService } from '../../services/auth.service';
import { RegisterDataInterface } from '../../interfaces/RegisterData.Interface';
import { MsgService } from '../../services/msg.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NoLoginNavBarComponent, RouterLink,CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm:FormGroup
  showPassword=false;
  errors = {name:'',email:'',password:''}
  msg=''  
  errorsV=false;
  buttonDisabled = false;
  public registerData:RegisterDataInterface={name:'',email:'',password:'',password_confirmation:''};

  constructor(private authService:AuthService,private formBuilder:FormBuilder,private router:Router,private msgService:MsgService) { 
    this.registerForm = this.formBuilder.group({
      name: [this.registerData.name, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: [this.registerData.email, [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      password: [this.registerData.password, [Validators.required, Validators.minLength(8), Validators.pattern(/^[a-zA-Z0-9 ]*$/),Validators.maxLength(230)]],
      password_confirmation: [this.registerData.password_confirmation,[Validators.required, Validators.minLength(8), Validators.pattern(/^[a-zA-Z0-9 ]*$/)]]
    });
  }

  register(){
    if(this.registerForm.valid){
      this.registerData = this.registerForm.value;
      this.authService.register(this.registerData).subscribe((response)=>{
        console.log(response);
        this.msg = response.msg;
      
        setTimeout(()=>{
          this.msg = '';
          this.router.navigate(['/login']);
        },2500);

      },(error)=>{
        this.errorsV=true;
        console.log(error);
        this.errors.password = error.error.errors.password
        this.errors.email = error.error.errors.email
        this.errors.name = error.error.errors.name
        setTimeout(() => {
          this.errorsV = false;
          this.errors = {name:'',email:'',password:''};
        }, 3000);
      });
      this.buttonDisabled = true;
      setTimeout(()=>{
        this.buttonDisabled = false;
      }, 3000);
    }
  
  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }



}
