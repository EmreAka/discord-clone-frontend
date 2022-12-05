import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Channel, ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.scss']
})
export class ChatHeaderComponent implements OnInit, OnDestroy{
  @Input() chatId: string = "";
  subscription$: Subscription;
  channel: Channel = {id: 0, name: "", description: ""}

  constructor(
    private chatService: ChatService
  ) {}

  ngOnDestroy(): void {
    this.subscription$.unsubscribe()
  }

  ngOnInit(): void {
    this.getChannel();
  }

  getChannel(){
    this.subscription$ = this.chatService.getChannel().subscribe({
      next: (value) => {
        if (value != null) {
          this.channel = value;
        }
      }
    })
  }
}
