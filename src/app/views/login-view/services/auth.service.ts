import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: "http://localhost:3000/"
  constructor(private httpService: HttpClient) { }

  login(credentials: any): Observable<any>{
    return this.httpService.post<any>(`http://localhost:3000/auth/signin`, credentials);
  }
}
