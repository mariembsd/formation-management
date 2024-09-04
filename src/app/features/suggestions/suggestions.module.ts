import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SuggestionsListComponent } from './suggestions-list/suggestions-list.component';

const routes: Routes = [
  { path: '', component: SuggestionsListComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SuggestionsModule { }
