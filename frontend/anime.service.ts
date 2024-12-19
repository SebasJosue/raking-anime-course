import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({  
  providedIn: 'root'  
})  
export class AnimeService {  
  private apiUrl = 'http://localhost:3000'; // Cambia esto según tu backend  

  constructor(private http: HttpClient) {}  

  // Métodos para interactuar con el servidor  
  getAnimeCourses(): Observable<any> {  
    return this.http.get(`${this.apiUrl}/anime-courses`);  
  }  
}