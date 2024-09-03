import { Routes } from '@angular/router';
import { AccueilComponent } from './features/accueil/accueil.component';
import { MyRequestListComponent } from './features/my-request/my-request-list/my-request-list.component';
import { ParticipateComponent } from './features/participate/participate.component';
import { SuggestionsListComponent } from './features/suggestions/suggestions-list/suggestions-list.component';
import { TrainingManagementComponent } from './features/training-management/training-management-list/training-management-list.component';
import { FeedbackComponent } from './features/feedback/feedback.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },
  { path: 'home-page', component: AccueilComponent, title: 'ADS | Accueil' },
  { path: 'request', component: MyRequestListComponent, title: 'ADS | Request' },
  { path: 'participate', component: ParticipateComponent, title: 'ADS | Participate' },
  { path: 'suggestion', component: SuggestionsListComponent, title: 'ADS | Suggestions' },
  { 
    path: 'training', 
    loadChildren: () => import('./features/training/training.module').then(m => m.TrainingModule), 
    title: 'ADS | Training' 
  },
  { path: 'training-management', component: TrainingManagementComponent, title: 'ADS | Training Management' },
  { path: 'feedback', component: FeedbackComponent, title: 'ADS | Feedback' },
  { path: '**', redirectTo: 'home-page', title: 'ADS | Not Found' }
];
