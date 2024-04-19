import { Routes } from '@angular/router';
import { tokenGuard } from './core/guards/auth.guard';

export const routes: Routes = [

    {path:'lifeplants',loadComponent:()=>import('./components/login-nav-bar/login-nav-bar.component').then(c => c.LoginNavBarComponent),canActivate:[tokenGuard],children:[
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', loadComponent:() => import('./pages/home/home.component').then(c => c.HomeComponent), canActivate: [tokenGuard]},
        {path: 'plants', loadComponent:() => import('./pages/plants/plants.component').then(c => c.PlantsComponent), canActivate: [tokenGuard]},
        {path: 'plant/:id', loadComponent:() => import('./pages/plant/plant.component').then(c => c.PlantComponent), canActivate: [tokenGuard]},
        {path:'sensors',loadComponent:()=>import('./pages/sensors/sensors.component').then(c => c.SensorsComponent),canActivate:[tokenGuard]},
        {path: 'users',loadComponent:()=>import('./pages/users/users.component').then(c => c.UsersComponent),canActivate:[tokenGuard]},
        {path: 'about',loadComponent:()=>import('./pages/about/about.component').then(c => c.AboutComponent),canActivate:[tokenGuard]},

        
    ]},
    {path:'login',loadComponent:()=>import('./pages/login/login.component').then(c => c.LoginComponent)},
    {path:'registro',loadComponent:()=>import('./pages/register/register.component').then(c => c.RegisterComponent)},
    {path:'',redirectTo:'/login',pathMatch:'full'},
    {path: '**', loadComponent:() => import('./pages/notfound/notfound.component').then(m => m.NotfoundComponent)},
];
