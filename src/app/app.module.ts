import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- Include both FormsModule and ReactiveFormsModule
import { AppComponent } from './app.component';
import { AuthModule } from './features/auth/auth.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    FormsModule,             // <-- Add FormsModule for template-driven forms like ngModel
    ReactiveFormsModule       // <-- Keep ReactiveFormsModule
  ]
})
export class AppModule {}
