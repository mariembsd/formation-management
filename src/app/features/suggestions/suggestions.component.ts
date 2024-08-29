import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-suggestions',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './suggestions.component.html',
  styleUrl: './suggestions.component.css'
})
export class SuggestionsComponent {

  isManager = true;  // Adjust based on the user's role
  showAddForm = false;

  newFormation = {
    title: '',
    description: '',
    image: ''
  };

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }

  submitFormation() {
    console.log('New Formation:', this.newFormation);
    // Add logic to save the new formation
    this.toggleAddForm();  // Close the form after submission
  }
}
