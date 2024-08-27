import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './features/auth/auth.module';
import { TrainingModule } from './features/training/training.module';

@NgModule({
  imports: [
    BrowserModule,
    AuthModule,
    TrainingModule
  ],
  bootstrap: [] // No need to declare AppComponent here if it's standalone
})
export class AppModule { }
