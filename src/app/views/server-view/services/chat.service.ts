import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private channel = new  BehaviorSubject<Channel | null>(null)
  private channel$ = this.channel.asObservable()



  baseUrl = environment.apiUrl;
  constructor(
    private httpClient: HttpClient
  ) { }

  getChannelId(): Observable<Channel | null>{
    return this.channel$
  }

  setChannelId(channel: Channel){
    this.channel.next(channel);
  }

  getAllMessagesByChannelId(channelId: number){
    return this.httpClient.get<any>(`${this.baseUrl}server-message/${channelId}`)
  }
}

export interface Channel{
  id: number
  name: string
  description: string
}