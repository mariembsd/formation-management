import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { TrainingListComponent } from './training-list/training-list.component';

const routes: Routes = [
  { path: '', component: TrainingListComponent },  
  { path: 'details', component: TrainingDetailsComponent }  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TrainingModule { }
