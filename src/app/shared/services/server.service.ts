import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  baseUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getAllEnrolled(): Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}server/enrolled`)
  }

  getAll(): Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}server`)
  }

  enroll(serverId: number): Observable<any>{
    return this.httpClient.post<any>(`${this.baseUrl}server/${serverId}`, {})
  }
}
