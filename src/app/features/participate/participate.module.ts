import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ParticipateListComponent } from './participate-list/participate-list.component';

const routes: Routes = [
  { path: '', component: ParticipateListComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ParticipateModule { }
