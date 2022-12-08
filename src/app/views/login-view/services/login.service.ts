import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // baseUrl: "http://localhost:3000/"
  baseUrl = environment.apiUrl;
  constructor(
    private httpService: HttpClient,
    private jwt: JwtHelperService,
  ) { }

  login(credentials: any): Observable<any> {
    return this.httpService.post<any>(`${this.baseUrl}auth/signin`, credentials);
  }

  decodeToken(token: string) {
    const decodeToken = this.jwt.decodeToken(token);
    localStorage.setItem("username", decodeToken["username"])
  }
}
