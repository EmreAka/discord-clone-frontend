import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
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
    private httpClient: HttpClient,
    private socket: Socket
  ) { }

  getChannel(): Observable<Channel | null>{
    return this.channel$
  }

  setChannel(channel: Channel){
    this.channel.next(channel);
  }

  getAllMessagesByChannelId(channelId: number){
    return this.httpClient.get<any>(`${this.baseUrl}server-message/${channelId}`)
  }

  add(message: CreateMessageDto){
    return this.httpClient.post<CreateMessageDto>(`${this.baseUrl}server-message`, {
      message: message.message,
      serverId: message.serverId,
      channelId: message.channelId
    })
  }

  sendMessage(message: CreateMessageDto){
    this.socket.emit('sendMessage', message)
  }
}

export interface Channel{
  id: number
  name: string
  description: string
}

export interface CreateMessageDto{
  message: string
  serverId: number
  channelId: number
}