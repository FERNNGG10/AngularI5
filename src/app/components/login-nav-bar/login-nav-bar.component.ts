import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-login-nav-bar',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './login-nav-bar.component.html',
  styleUrl: './login-nav-bar.component.css'
})
export class LoginNavBarComponent implements OnInit,OnDestroy{
  constructor(private authService:AuthService,private router:Router,private socketService:SocketService) { }
  user_id=0
  rol_id = 0
  logout(){
    this.authService.logout().subscribe((response)=>{
      console.log(response);
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    },(error)=>{
      console.log(error);
    });
  }

  ngOnInit(): void {
    this.authService.me().subscribe((response)=>{
      console.log(response);
      this.rol_id = response.rol_id
      this.user_id = response.id
      console.log("variable",this.rol_id);
      console.log("variable",this.user_id);
    },(error)=>{
      console.log(error);
    });

    this.socketService.UserRolSocket();
    const echo = this.socketService.getEcho()
    echo.channel('userRol').listen('.UserRol', (e: any) => {
      console.log(echo);
      console.log("socket",e.data.user_id);
      if(this.user_id == e.data.user_id){
        this.rol_id = e.data.rol_id
        console.log("socket",this.rol_id);
      }
      
    });
    
  }

  ngOnDestroy(): void {
    this.socketService.closeWebSocket();
  }
}
