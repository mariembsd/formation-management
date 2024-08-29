import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/Layout/navbar/navbar.component';
import { SidebarComponent } from './shared/Layout/sidebar/sidebar.component';
import { FooterComponent } from './shared/Layout/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, NavbarComponent, SidebarComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Updated to styleUrls
})
export class AppComponent {
  title = 'formation-management';
   // Method called when a route is activated
   onActivate(event: any) {
    console.log('Activated Route:', event);
  }

  // Method called when a route is deactivated
  onDeactivate(event: any) {
    console.log('Deactivated Route:', event);
  }
}
