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

  getById(id: number){
    return this.httpClient.get<any>(this.baseUrl + "server"+"?"+"id="+id)
  }

  getAllEnrolled(): Observable<any>{
    return this.httpClient.get<ServerDto>(`${this.baseUrl}server/enrolled`)
  }

  getAll(query:Query): Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}server/paginate?page=${query.page}&pageSize=${query.pageSize}&keyword=${query.keyword}`)
  }

  enroll(serverId: number): Observable<any>{
    return this.httpClient.post<any>(`${this.baseUrl}server/${serverId}`, {})
  }
}

export interface Query{
  page: number
  pageSize: number
  keyword: string
}

export interface ServerDto{
  id: number;
  name: string;
  founderUsername: string;
}