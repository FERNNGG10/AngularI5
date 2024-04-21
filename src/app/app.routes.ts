import { Routes } from '@angular/router';
import { tokenGuard } from './core/guards/auth.guard';
import { AdminGuard } from './core/guards/admin.guard';
import { activeGuard } from './core/guards/active.guard';

export const routes: Routes = [

    {path:'lifeplants',loadComponent:()=>import('./components/login-nav-bar/login-nav-bar.component').then(c => c.LoginNavBarComponent),canActivate:[activeGuard,tokenGuard],children:[
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', loadComponent:() => import('./pages/home/home.component').then(c => c.HomeComponent), canActivate: [activeGuard,tokenGuard]},
        {path: 'plants', loadComponent:() => import('./pages/plants/plants.component').then(c => c.PlantsComponent), canActivate: [tokenGuard,activeGuard]},
        {path: 'plant/:id', loadComponent:() => import('./pages/plant/plant.component').then(c => c.PlantComponent), canActivate: [tokenGuard,activeGuard]},
        {path: 'users',loadComponent:()=>import('./pages/users/users.component').then(c => c.UsersComponent),canActivate:[tokenGuard,AdminGuard,activeGuard]},  
        {path: 'about',loadComponent:()=>import('./pages/about/about.component').then(c => c.AboutComponent),canActivate:[tokenGuard,activeGuard]},

        
    ]},
    {path:'login',loadComponent:()=>import('./pages/login/login.component').then(c => c.LoginComponent)},
    {path:'registro',loadComponent:()=>import('./pages/register/register.component').then(c => c.RegisterComponent)},
    {path:'',redirectTo:'/login',pathMatch:'full'},
    {path: '**', loadComponent:() => import('./pages/notfound/notfound.component').then(m => m.NotfoundComponent)},
];
