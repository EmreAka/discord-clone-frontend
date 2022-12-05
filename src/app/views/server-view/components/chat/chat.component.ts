import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy{

  subscription$: Subscription
  channelId: number | null;
  loading: boolean = true;

  messages: any[] = []

  constructor(
    private chatService: ChatService
  ) {}

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
  ngOnInit(): void {
    this.getChannelId();
  }

  getMessagesByChannelId(channelId: number){
    this.chatService.getAllMessagesByChannelId(channelId).subscribe({
      next: (value) => {
        this.messages = value
        this.loading = false
      }
    })
  }

  getChannelId(){
    this.subscription$ = this.chatService.getChannelId().subscribe({
      next: (value) => {
        this.channelId = value;
        if (value != null) {
          this.getMessagesByChannelId(value)
        }
      }
    })
  }

}
