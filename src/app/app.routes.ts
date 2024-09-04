import { Routes } from '@angular/router';
import { AccueilListComponent } from './features/accueil/accueil-list/accueil-list.component';
import { MyRequestListComponent } from './features/my-request/my-request-list/my-request-list.component';
import { ParticipateListComponent } from './features/participate/participate-list/participate-list.component';
import { SuggestionsListComponent } from './features/suggestions/suggestions-list/suggestions-list.component';
import { TrainingManagementListComponent } from './features/training-management/training-management-list/training-management-list.component';
import { FeedbackListComponent } from './features/feedback/feedback-list/feedback-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },
  { path: 'home-page', component: AccueilListComponent, title: 'ADS | Accueil' },
  { path: 'request', component: MyRequestListComponent, title: 'ADS | Request' },
  { path: 'participate', component: ParticipateListComponent, title: 'ADS | Participate' },
  { path: 'suggestion', component: SuggestionsListComponent, title: 'ADS | Suggestions' },
  { 
    path: 'training', 
    loadChildren: () => import('./features/training/training.module').then(m => m.TrainingModule), 
    title: 'ADS | Training' 
  },
  { 
    path: 'training-management', 
    loadChildren: () => import('./features/training-management/training-management.module').then(m => m.TrainingManagementModule), 
    title: 'ADS | Training Management' 
  },
  { path: 'feedback', component: FeedbackListComponent, title: 'ADS | Feedback' },
  { path: '**', redirectTo: 'home-page', title: 'ADS | Not Found' }
];
