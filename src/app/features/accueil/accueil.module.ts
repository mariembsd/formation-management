import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccueilListComponent } from './accueil-list/accueil-list.component';

const routes: Routes = [
  { path: '', component: AccueilListComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AccueilModule { }
