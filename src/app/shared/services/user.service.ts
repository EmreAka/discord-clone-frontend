import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  getCurrentUser(): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}users/me`)
  }
}

export interface User {
  id: number,
  firstName: string
  lastName: string
  email: string
  username: string
  imagePath: string
}