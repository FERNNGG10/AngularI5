import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NoLoginNavBarComponent } from '../../components/no-login-nav-bar/no-login-nav-bar.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NoLoginNavBarComponent, RouterLink,CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
