import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = 'http://localhost:8080/api/auth/register';
  private loginUrl = 'http://localhost:8080/api/auth/login';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(this.loginUrl, { email, password });
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(this.registerUrl, { username: name, email, password });
  }

  logout() {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
