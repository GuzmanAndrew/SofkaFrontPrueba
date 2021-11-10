import { Injectable } from '@angular/core';
import { Paciente } from '../models/Paciente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  Url = 'http://localhost:8081/api/listUsers';

  constructor(private http: HttpClient) { }

  getPersonas() {
    return this.http.get(`${this.Url}`);
  }
}
