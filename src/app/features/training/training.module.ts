import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingRoutingModule } from './training-routing.module';
import { TrainingListComponent } from './training-list/training-list.component';
import { TrainingDetailComponent } from './training-detail/training-detail.component';
import { TrainingFormComponent } from './training-form/training-form.component';

@NgModule({
  declarations: [
    TrainingListComponent,
    TrainingDetailComponent,
    TrainingFormComponent
  ],
  imports: [
    CommonModule,
    TrainingRoutingModule
  ]
})
export class TrainingModule { }
