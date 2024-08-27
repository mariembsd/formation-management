import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  private apiUrl = 'http://your-api-url.com/trainings';

  constructor(private http: HttpClient) { }

  getTrainings(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getTrainingById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createTraining(training: any): Observable<any> {
    return this.http.post(this.apiUrl, training);
  }

  updateTraining(id: number, training: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, training);
  }

  deleteTraining(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
