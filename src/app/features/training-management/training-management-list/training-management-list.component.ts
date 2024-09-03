import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-training-management',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './training-management-list.component.html',
  styleUrl: './training-management-list.component.css'
})
export class TrainingManagementComponent {

  formations = [
    { id: 1, title: 'Formation 1', description: 'Description of Formation 1' },
    { id: 2, title: 'Formation 2', description: 'Description of Formation 2' }
  ];
  
  editFormation: any = null;


  edit(formation: any) {
    this.editFormation = { ...formation };
  }

  updateFormation() {
    if (this.editFormation) {
      const index = this.formations.findIndex(f => f.id === this.editFormation.id);
      if (index !== -1) {
        this.formations[index] = this.editFormation;
        this.editFormation = null;
      }
    }
  }

  deleteFormation(id: number) {
    this.formations = this.formations.filter(f => f.id !== id);
  }
}

