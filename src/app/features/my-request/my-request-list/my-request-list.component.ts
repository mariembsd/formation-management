import { Component } from '@angular/core';

@Component({
  selector: 'app-my-requests-list',
  templateUrl: './my-request-list.component.html',
  styleUrls: ['./my-request-list.component.css']
})
export class MyRequestListComponent {
  requests = [
    { title: 'Formation en Angular', description: 'Demande pour une formation avancée en Angular.', status: 'pending', date: new Date() },
    { title: 'Formation en TypeScript', description: 'Demande pour une formation sur TypeScript.', status: 'approved', date: new Date() },
    { title: 'Formation en Design Patterns', description: 'Demande pour une formation sur les Design Patterns.', status: 'rejected', date: new Date() }
  ];

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'pending';
      case 'approved':
        return 'approved';
      case 'rejected':
        return 'rejected';
      default:
        return '';
    }
  }

  viewDetails(request: any) {
    // Logic to display detailed information about the request
    console.log('Viewing details for:', request);
  }
}
