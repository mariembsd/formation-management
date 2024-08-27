import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string) {
    // Implement login logic here, likely with an HTTP request to your backend API
  }

  register(name: string, email: string, password: string) {
    // Implement registration logic here, likely with an HTTP request to your backend API
  }

  logout() {
    // Implement logout logic here, e.g., clearing the token from localStorage
  }

  isAuthenticated(): boolean {
    // Implement logic to check if the user is authenticated (e.g., check if a token exists)
    return !!localStorage.getItem('token');
  }
}
