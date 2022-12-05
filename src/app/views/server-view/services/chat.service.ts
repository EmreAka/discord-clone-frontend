import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private channelId = new  BehaviorSubject<number | null>(null)
  private channelId$ = this.channelId.asObservable()



  baseUrl = environment.apiUrl;
  constructor(
    private httpClient: HttpClient
  ) { }

  getChannelId(): Observable<number | null>{
    return this.channelId$
  }

  setChannelId(channelId: number){
    this.channelId.next(channelId);
  }

  getAllMessagesByChannelId(channelId: number){
    return this.httpClient.get<any>(`${this.baseUrl}server-message/${channelId}`)
  }
}
