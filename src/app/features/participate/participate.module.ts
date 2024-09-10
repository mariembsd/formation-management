import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ParticipateListComponent } from './participate-list/participate-list.component';  // Import the component
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ParticipateListComponent }
];

@NgModule({
  declarations: [ParticipateListComponent], 
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ParticipateModule { }
