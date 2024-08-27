import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingListComponent } from './training-list/training-list.component';
import { TrainingDetailComponent } from './training-detail/training-detail.component';
import { TrainingFormComponent } from './training-form/training-form.component';
import { AuthGuard } from '../../core/auth.guard';

const routes: Routes = [
  { path: '', component: TrainingListComponent, canActivate: [AuthGuard] },
  { path: 'detail/:id', component: TrainingDetailComponent, canActivate: [AuthGuard] },
  { path: 'create', component: TrainingFormComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: TrainingFormComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
