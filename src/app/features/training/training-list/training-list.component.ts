import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-training',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './training-list.component.html',
  styleUrl: './training-list.component.css'
})
export class TrainingListComponent {

  formations = [
    { id: 1, title: 'Introduction à Angular', description: 'Apprenez les bases d\'Angular, un framework de développement web. Ce cours couvre les composants, les directives, et la gestion des routes.', image: 'url1' },
    { id: 2, title: 'Développement Web Avancé', description: 'Perfectionnez vos compétences en développement web avec des techniques avancées en HTML, CSS, et JavaScript. Idéal pour les développeurs expérimentés.', image: 'url2' },
    { id: 3, title: 'Gestion de Projet Agile', description: 'Maîtrisez les principes de la gestion de projet Agile et Scrum. Apprenez à gérer des projets de manière efficace et à s\'adapter aux besoins changeants des clients.', image: 'url3' },
    { id: 4, title: 'Introduction au Machine Learning', description: 'Découvrez les concepts fondamentaux du Machine Learning et comment appliquer des algorithmes d\'apprentissage automatique pour résoudre des problèmes complexes.', image: 'url4' }
  ];

  isManager = true; // Set this based on the user's role
  showAddForm = false; // Toggle for showing the add formation form
  newFormation = { title: '', description: '', image: '' };

  viewDetails(id: number) {
    console.log('Viewing details for formation:', id);
    // Implement the logic to view formation details, like navigating to a details page
  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }

}

