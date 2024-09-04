import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-accueil-list',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './accueil-list.component.html',
  styleUrl: './accueil-list.component.css'
})
export class AccueilListComponent {

}
