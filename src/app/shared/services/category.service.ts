import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getAllByServerId(serverId: number): Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}category?serverId=${serverId}`)
  }
}
