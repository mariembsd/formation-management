import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-training-management-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './training-management-list.component.html',
  styleUrls: ['./training-management-list.component.css'] // Fixed typo (styleUrl -> styleUrls)
})
export class TrainingManagementListComponent {

  formations = [
    { id: 1, title: 'Formation Développement Web Avancé', description: 'Perfectionnez vos compétences en développement web avec des techniques avancées en HTML, CSS, et JavaScript. Idéal pour les développeurs expérimentés.' },
    { id: 2, title: 'Formation Introduction au Machine Learning', description: 'Découvrez les concepts fondamentaux du Machine Learning et comment appliquer des algorithmes dapprentissage automatique pour résoudre des problèmes complexes.' },
    { id: 1, title: 'Formation Angular', description: 'Perfectionnez vos compétences en développement web avec des techniques avancées en HTML, CSS, et JavaScript. Idéal pour les développeurs expérimentés.' },
    { id: 2, title: 'Formation Agile', description: 'Découvrez les concepts fondamentaux du Machine Learning et comment appliquer des algorithmes dapprentissage automatique pour résoudre des problèmes complexes.' }
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
