import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-requests-list',
  templateUrl: './my-request-list.component.html',
  styleUrls: ['./my-request-list.component.scss']
})
export class MyRequestListComponent implements OnInit {
  requests = [
    {
      id: 1,
      trainingTitle: 'Angular Advanced Training',
      submissionDate: new Date('2024-09-01'),
      requestedDate: new Date('2024-10-15'),
      status: 'pending',
      approvedBy: 'John Doe'
    },
    {
      id: 2,
      trainingTitle: 'Leadership Skills',
      submissionDate: new Date('2024-08-20'),
      requestedDate: new Date('2024-09-30'),
      status: 'approved',
      approvedBy: 'Jane Smith'
    }
  ];
totalRequests: any;
pendingRequests: any;
approvedRequests: any;

  constructor() {}

  ngOnInit(): void {}

  getStatusClass(status: string): string {
    return {
      'approved': 'approved',
      'pending': 'pending',
      'rejected': 'rejected'
    }[status] || '';
  }
  
  getProgress(status: string): number {
    return {
      'approved': 100,
      'pending': 50,
      'rejected': 0
    }[status] || 0;
  }
  
  getProgressLabel(status: string): string {
    return {
      'approved': 'Completed',
      'pending': 'In Progress',
      'rejected': 'Rejected'
    }[status] || 'Unknown';
  }
  

  viewDetails(id: number): void {
    // Navigate to the detailed view or open a dialog
    console.log('Viewing details for request ID:', id);
  }
}
