import { Component } from '@angular/core';
import { NoLoginNavBarComponent } from '../../components/no-login-nav-bar/no-login-nav-bar.component';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { LoginDataInterface } from '../../interfaces/LoginData.Interface';
import { CodeDataInterface } from '../../interfaces/CodeData.Interface';
import { FormBuilder,FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NoLoginNavBarComponent, RouterLink,CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm:FormGroup;
  codeForm:FormGroup;
  showCode = false;
  showPassword=false;
  buttonDisabled = false;
  errorMsg = '';
  msg=''
  public loginData:LoginDataInterface={email:'',password:''};
  public codeData:CodeDataInterface={email:'',password:'',code:''};

  constructor(private authService:AuthService,private formBuilder:FormBuilder,private router:Router) {
    this.loginForm = this.formBuilder.group({
      email: [this.loginData.email, [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      password: [this.loginData.password, [Validators.required]]
    });
    this.codeForm = this.formBuilder.group({
      code: [this.codeData.code, [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern(/^[0-9]{6}$/)]]
    });
   }

  login(){
    if(this.loginForm.valid){
      this.loginData = this.loginForm.value;
      this.authService.login(this.loginData).subscribe((response)=>{
        this.showCode = true;
        console.log(response);
        this.msg = response.msg;
        setTimeout(() => {
          this.msg = '';
        }, 3000);
      },(error)=>{
        console.log(error);
        console.log(error.error.error)
        this.errorMsg = error.error.error;
        console.log(this.errorMsg);
        setTimeout(() => {
          this.errorMsg = '';
        }, 3000);
      });
      this.buttonDisabled = true;
      setTimeout(()=>{
        this.buttonDisabled = false;
      }, 3000);
    }
  }
  verifycode(){
    this.codeData.code = this.codeForm.value.code;
    this.codeData.email = this.loginData.email;
    this.codeData.password = this.loginData.password
    this.authService.verifyCode(this.codeData).subscribe((response)=>{
        console.log(response);
        localStorage.setItem('token',response.access_token);
        this.router.navigate(['/lifeplants/home']);
    },(error)=>{
        this.errorMsg = error.error;
        console.log(error);
        console.log(error.error)
        setTimeout(() => {
          this.errorMsg = '';
        }, 3000);
    });
  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
