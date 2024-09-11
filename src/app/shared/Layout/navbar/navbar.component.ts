import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [], // This can be empty if you don't have any Angular modules to import
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // Fix typo from styleUrl to styleUrls
})
export class NavbarComponent {}
