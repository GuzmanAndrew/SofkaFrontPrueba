import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../models/login-usuario';
import { JwtDTO } from '../models/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'http://localhost:8081/auth/';

  constructor(private httpClient: HttpClient) { }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'login', loginUsuario);
  }

  public greetEs(id: number) {
    return this.httpClient.get(`${this.authURL}/greet/es/${id}`);
  }

  public greetEn(id: number) {
    return this.httpClient.get(`${this.authURL}/greet/en/${id}`);
  }

  public greetFr(id: number) {
    return this.httpClient.get(`${this.authURL}/greet/fr/${id}`);
  }

  public findByUserName(name: string) {
    return this.httpClient.get(`${this.authURL}/findUsuario/${name}`);
  }  
}
