import { Routes } from '@angular/router';
import { AccueilComponent } from './features/accueil/accueil.component';
import { MyRequestsComponent } from './features/my-requests/my-requests.component';
import { ParticipateComponent } from './features/participate/participate.component';
import { SuggestionsComponent } from './features/suggestions/suggestions.component';
import { TrainingComponent } from './features/training/training.component';
import { TrainingManagementComponent } from './features/training-management/training-management.component';
import { FeedbackComponent } from './features/feedback/feedback.component';

export const routes: Routes = [
  { path: '',   redirectTo: 'home-page', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'home-page', component: AccueilComponent, title: 'ADS | Accueil' },
  { path: 'request', component: MyRequestsComponent, title: 'ADS | Request' },
  { path: 'participate', component: ParticipateComponent, title: 'ADS | Participate' },
  { path: 'suggestion', component: SuggestionsComponent, title: 'ADS | Suggestions' },
  { path: 'training', component: TrainingComponent, title: 'ADS | Training' },
  { path: 'training-management', component: TrainingManagementComponent, title: 'ADS | Training Management' },
  { path: 'feedback', component: FeedbackComponent, title: 'ADS | Feedback' },
  { path: '**', redirectTo: '', title: 'ADS | Not Found' } // Redirect any unknown path to the home page
];
