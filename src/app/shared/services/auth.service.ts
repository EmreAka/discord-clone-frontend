import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenChanged = new BehaviorSubject<string | null>(null);
  private tokenChanged$ = this.tokenChanged.asObservable();

  constructor(private jwt: JwtHelperService) { }

  decodeToken(token: string){
    const decodeToken = this.jwt.decodeToken(token);
    localStorage.setItem("username", decodeToken["username"])
  }

  isTokenChanged(){
    return this.tokenChanged$;
  }

  changeToken(token: string){
    this.tokenChanged.next(token)
  }
}
