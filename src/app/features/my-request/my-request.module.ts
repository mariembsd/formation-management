import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyRequestListComponent } from './my-request-list/my-request-list.component';

const routes: Routes = [
  { path: '', component: MyRequestListComponent }
];

@NgModule({
  declarations: [MyRequestListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MyRequestsModule { }
