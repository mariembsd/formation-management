import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-suggestions-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // Make sure to import CommonModule and FormsModule
  templateUrl: './suggestions-list.component.html',
  styleUrls: ['./suggestions-list.component.css'] // Fix typo (styleUrl -> styleUrls)
})
export class SuggestionsListComponent {
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
