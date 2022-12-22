import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  baseUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  add(channel: Channel){
    return this.httpClient.post<any>(this.baseUrl + "channel", channel)
  }
}

export interface Channel{
  name: string
  description: string
  categoryId: number
}