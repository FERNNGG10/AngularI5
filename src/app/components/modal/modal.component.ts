import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() modalId!: string;
  @Input() modalTitle!: string;
  @Input() id?: number;
}
