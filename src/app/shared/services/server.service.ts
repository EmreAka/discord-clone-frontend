import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  baseUrl = environment.apiUrl;
  
  private modalOpened = new BehaviorSubject<boolean>(false)
  private modalOpened$ = this.modalOpened.asObservable()

  constructor(private httpClient: HttpClient) { }

  isModalOpened(){
    return this.modalOpened$
  }

  openModal(){
    this.modalOpened.next(true)
  }

  closeModal(){
    this.modalOpened.next(false)
  }

  add(server: CreateServerDto){
    return this.httpClient.post<any>(this.baseUrl + "server",server)
  }

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

//TODO: Image will be sent instead of imagePath
export interface CreateServerDto{
  name: string
  description: string
  imagePath: string
}