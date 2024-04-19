import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-no-login-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './no-login-nav-bar.component.html',
  styleUrl: './no-login-nav-bar.component.css'
})
export class NoLoginNavBarComponent {

}
