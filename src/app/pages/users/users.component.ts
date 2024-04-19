import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ModalComponent } from '../../components/modal/modal.component';
import { UsersIndexInterface } from '../../interfaces/UserIndex.Interface';
import { UsersService } from '../../services/users.service';

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
  
  constructor(private userService:UsersService) { }

  ngOnInit(): void {
  }
}
